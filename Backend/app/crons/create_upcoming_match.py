from bs4 import BeautifulSoup
import requests
import re
import datetime
import pandas as pd
from players.models import UpcomingEvents, Teams, PlayerIPL
import players
from fuzzywuzzy import fuzz
import json
from crons.update_player_stats import update_player_stat_in_db
from crons.fetch_player import search_player_howstat_id, get_player_id_map

player_map_df = pd.read_json('crons/client_id_player_role_team_map.json', orient='records')

with open('crons/player.json', 'r') as f:
    PLAYER_MAP = json.load(f)

COUNTRY_MAP = {
    "afghanistan": "AFG",
    "australia": "AUS",
    "bangladesh": "BAN",
    "england": "ENG",
    "india": "IND",
    "ireland": "IRE",
    "new zealand": "NZ",
    "pakistan": "PAK",
    "south africa": "SA",
    "sri lanka": "SL",
    "west indies": "WI",
    "zimbabwe": "ZIM",
    "netherlands": "NED"
}

IPL_MAP = {
    "punjab kings": "PBKS",
    "delhi capitals": "DC",
    "kolkata knight riders": "KKR",
    "sunrisers hyderabad": "SRH",
    "chennai super kings": "CSK",
    "royal challengers bengaluru": "RCB",
    "rajasthan royals": "RR",
    "lucknow super giants": "LSG",
    "gujrat titans": "GT",
    "mumbai indians": "MI"
}

TEAM_FLAG_URL = {
    "AFG": "https://flags.fmcdn.net/data/flags/w580/af.png",
    "AUS": "https://flags.fmcdn.net/data/flags/w580/au.png",
    "BAN": "https://flags.fmcdn.net/data/flags/w580/bd.png",
    "ENG": "https://flags.fmcdn.net/data/flags/w580/gb-eng.png",
    "IND": "https://flags.fmcdn.net/data/flags/w580/in.png",
    "IRE": "https://flags.fmcdn.net/data/flags/w580/ie.png",
    "NZ": "https://flags.fmcdn.net/data/flags/w580/nz.png",
    "PAK": "https://flags.fmcdn.net/data/flags/w580/pk.png",
    "SA": "https://flags.fmcdn.net/data/flags/w580/za.png",
    "SL": "https://flags.fmcdn.net/data/flags/w580/lk.png",
    "WI": "https://flags.fmcdn.net/data/flags/w580/wi.png",
    "ZIM": "https://flags.fmcdn.net/data/flags/w580/zw.png",
    "NED": "https://flags.fmcdn.net/data/flags/w580/nl.png"
}


def get_playing11(playing11_list):
    team_squad = {
        'playing11': {}
    }

    for player in playing11_list:
        player_role = player.find_next('div').find_next('div').find_next('div').find('span', {
            'class': 'cb-font-12 text-gray'}).text.strip()
        player_name_role = player.find_next('div').find_next('div').find_next('div').text.strip()
        player_name = player_name_role.replace(player_role, '').strip()
        if '(C)' in player_name:
            player_name = player_name.replace('(C)', '').strip()
            team_squad['captain'] = player_name
        elif '(WK)' in player_name:
            player_name = player_name.replace('(WK)', '').strip()
            team_squad['wicket_keeper'] = player_name
        elif '(C & WK)' in player_name:
            player_name = player_name.replace('(C & WK)', '').strip()
            team_squad['captain'] = player_name
            team_squad['wicket_keeper'] = player_name
        team_squad['playing11'][player_name] = player_role

    return team_squad


def get_bench_players(bench_players_list):
    team_squad = {
        'bench_players': {}
    }

    for player in bench_players_list:
        player_role = player.find_next('div').find_next('div').find_next('div').find('span', {
            'class': 'cb-font-12 text-gray'}).text.strip()
        player_name_role = player.find_next('div').find_next('div').find_next('div').text.strip()
        player_name = player_name_role.replace(player_role, '').strip()
        if '(WK)' in player_name:
            player_name = player_name.replace('(WK)', '').strip()
        team_squad['bench_players'][player_name] = player_role

    return team_squad


def get_match_squads(match_url, MATCH_DETAILS):
    MATCH_DETAILS['playing11'] = {}
    MATCH_DETAILS['bench_players'] = {}
    cricbuzz_match_id = match_url.split('/')[-2]
    squad_url = f"https://www.cricbuzz.com/api/html/match-squads/{cricbuzz_match_id}"
    squad_html = requests.get(squad_url)
    squad_soup = BeautifulSoup(squad_html.content, 'html.parser')
    team1_squad_country_code = squad_soup.find('a', {'class': 'cb-team1'}).find_next('div').find_next(
        'div').text.strip()
    if team1_squad_country_code == 'RSA':
        team1_squad_country_code = 'SA'
    team2_squad_country_code = squad_soup.find('a', {'class': 'cb-team2'}).find_next('div').find_next(
        'div').text.strip()
    if team2_squad_country_code == 'RSA':
        team2_squad_country_code = 'SA'

    if len(squad_soup.find_all('div', {
        'class': 'cb-col cb-col-50 cb-play11-lft-col'})) == 3:  # when playing11 and bench players are available
        print("Playing11 and bench players are available as 1")
        team1_playing11_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-lft-col'})[
            0].find_all('a')
        team2_playing11_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-rt-col'})[
            0].find_all('a')

        team1_playing11_squad = get_playing11(team1_playing11_list_soup)
        team2_playing11_squad = get_playing11(team2_playing11_list_soup)

        MATCH_DETAILS['playing11'][team1_squad_country_code] = team1_playing11_squad
        MATCH_DETAILS['playing11'][team2_squad_country_code] = team2_playing11_squad

        team1_bench_players_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-lft-col'})[
            1].find_all('a')
        team2_bench_players_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-rt-col'})[
            1].find_all('a')

        team1_bench_players_squad = get_bench_players(team1_bench_players_list_soup)
        team2_bench_players_squad = get_bench_players(team2_bench_players_list_soup)
    else:  # when the playing 11 is not declared
        print("Playing 11 Declared. Playing11 and bench players are available as 2 and ")
        team1_playing11_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-lft-col'})[
            0].find_all('a')
        team2_playing11_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-rt-col'})[
            0].find_all('a')

        team1_playing11_squad = get_playing11(team1_playing11_list_soup[:11])
        team2_playing11_squad = get_playing11(team2_playing11_list_soup[:11])

        MATCH_DETAILS['playing11'][team1_squad_country_code] = team1_playing11_squad
        MATCH_DETAILS['playing11'][team2_squad_country_code] = team2_playing11_squad

        team1_bench_players_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-lft-col'})[
            1].find_all('a')
        team2_bench_players_list_soup = squad_soup.find_all('div', {'class': 'cb-col cb-col-50 cb-play11-rt-col'})[
            1].find_all('a')

        team1_bench_players_squad = get_bench_players(team1_bench_players_list_soup)
        team2_bench_players_squad = get_bench_players(team2_bench_players_list_soup)

    MATCH_DETAILS['bench_players'][team1_squad_country_code] = team1_bench_players_squad
    MATCH_DETAILS['bench_players'][team2_squad_country_code] = team2_bench_players_squad

    print(f"get_match_squads - {MATCH_DETAILS}")

    return MATCH_DETAILS


def update_upcoming_events(match_url, match_type, match_format, event_type, match_number):
    MATCH_DETAILS = {'match_url': match_url}
    response = requests.get(match_url)
    if response.status_code != 200:
        raise "Please check the URL or contact admin to know the issue. Couldn't able to fetch content of the URL provided."

    soup = BeautifulSoup(response.content, 'html.parser')
    get_match_info(soup, MATCH_DETAILS, match_type)
    get_match_squads(match_url=match_url, MATCH_DETAILS=MATCH_DETAILS)
    update_upcoming_event_in_db(MATCH_DETAILS, match_type, match_format, event_type, match_number)


def get_match_info(soup, MATCH_DETAILS, match_type):
    p_match_title = re.compile(r'\bcb-nav-hdr\b')
    match_full_title = soup.find('h1', class_=p_match_title).text
    match_title = match_full_title.split(',')[0]

    if match_type == "IPL":
        teams_map = IPL_MAP
    else:
        teams_map = COUNTRY_MAP

    MATCH_DETAILS['team1'] = match_title.split('vs')[0].strip()
    MATCH_DETAILS['team2'] = match_title.split('vs')[1].strip()
    MATCH_DETAILS['team1_code'] = teams_map[MATCH_DETAILS['team1'].lower()]
    MATCH_DETAILS['team2_code'] = teams_map[MATCH_DETAILS['team2'].lower()]
    p_series = re.compile(r'\bcb-nav-subhdr\b')
    match_info_soup = soup.find('div', class_=p_series)
    MATCH_DETAILS['title'] = match_info_soup.find_all('a')[0]['title']
    MATCH_DETAILS['venue'] = match_info_soup.find_all('a')[1]['title']
    match_start_date_time = match_info_soup.find('span', {'itemprop': 'startDate'})['content']
    MATCH_DETAILS['start_date'] = datetime.datetime.strptime(match_start_date_time, '%Y-%m-%dT%H:%M:%S%z').strftime(
        '%Y-%m-%d')
    MATCH_DETAILS['start_time'] = datetime.datetime.strptime(match_start_date_time, '%Y-%m-%dT%H:%M:%S%z').strftime(
        '%H:%M:%S')  # time is in UTC
    MATCH_DETAILS['end_date'] = match_info_soup.find('span', {'itemprop': 'endDate'})['content']

    print(f"Match_Info - {MATCH_DETAILS}")
    return MATCH_DETAILS


def fuzzy_match(string1, string2):
    similarity_ratio = fuzz.ratio(str(string1), str(string2))
    return similarity_ratio


def get_player_howstatid(player_name, team_abbr):
    # for p in player_map_df.get(team_abbr, {}):
    #     if fuzzy_match(player_name, p['name']) > 90:
    #         print(f"get_player_howstatid - {p['howstatId']}, {p['name']}")
    #         return p['howstatId']
    # else:
    #     return False
    for p in player_map_df[player_map_df['Team Name'] == team_abbr.upper()].to_dict('records'):
        if fuzzy_match(player_name, p['Player Name_x']) > 90:
            return p['ClientPlayerID']
        
    allPlayers = PlayerIPL.objects.filter(playerTeamCode=team_abbr.upper())
    
    for p in allPlayers:
        if fuzzy_match(player_name, p.playerName) > 90:
            return p.clientPlayerId
    
    


def update_player_in_json(player_name, team_abbr, howstat_id, role): #absolete useless
    if team_abbr not in PLAYER_MAP.keys():
        PLAYER_MAP[team_abbr] = []
    PLAYER_MAP[team_abbr].append({'name': player_name, 'howstatId': howstat_id, "iccId": -1, "role": role})
    with open('crons/player.json', 'w') as file:
        file.truncate(0)
        json.dump(PLAYER_MAP, file)


def get_player_object(player_name, team_abbr):
    # todo: rewrite this logic to get player details by it's name itself. We might need to use Fuzzy matching
    # done
    try:
        clientPlayerId = get_player_howstatid(player_name, team_abbr)
        if not clientPlayerId:
            return None
        player = PlayerIPL.objects.get(clientPlayerId=clientPlayerId)
    except players.models.PlayerIPL.DoesNotExist:
        return None
    return player


def get_team_object(team_abbr):
    try:
        print("team_abbr", team_abbr)
        team = Teams.objects.get(abbreviation=team_abbr)
    except players.models.Teams.DoesNotExist:
        raise ValueError(f"No team exist with abbreviation - {team_abbr}. Please ask admin to add the team in the Teams Database...")
    return team


def update_playing_11_and_bench_players(event_object, MATCH_DETAILS, match_format):
    team1_playing11 = MATCH_DETAILS['playing11'][MATCH_DETAILS['team1_code']]
    team2_playing11 = MATCH_DETAILS['playing11'][MATCH_DETAILS['team2_code']]
    team1_bench = MATCH_DETAILS['bench_players'][MATCH_DETAILS['team1_code']]
    team2_bench = MATCH_DETAILS['bench_players'][MATCH_DETAILS['team2_code']]

    team1_players = []
    team2_players = []
    team1_order = []
    team2_order = []

    PLAYER_NOTFOUND_SEARCH_MAP = None
    for player_name, player_role in team1_playing11['playing11'].items():
        player = get_player_object(player_name, MATCH_DETAILS['team1_code'])
        if player is not None:
            team1_players.append(player)
            team1_order.append(str(player.playerIPLID))
            # todo:
            # We need to reconfigure it to get data from ipl website. 
            # Currently trying to get predictions from 2023, 2022 data

            try:
                # update_player_stat_in_db(howstatid=player.howstatId, match_format=[match_format])
                player.updateFromApi()
            except Exception as e:
                print(f"Exception while updating player stats - {e}")
        else:
            print(player_name, player_role, MATCH_DETAILS['team1_code'])
            if PLAYER_NOTFOUND_SEARCH_MAP is None:
                PLAYER_NOTFOUND_SEARCH_MAP = get_player_id_map(country_code=MATCH_DETAILS['team1_code'],
                                                               match_format=match_format)
            print(f"Player scraping - {player_name}")
            player_howstat_id = search_player_howstat_id(player_id_map=PLAYER_NOTFOUND_SEARCH_MAP,
                                                         player_name=player_name)
            if player_howstat_id:
                update_player_in_json(player_name=player_name, team_abbr=MATCH_DETAILS['team1_code'],
                                      howstat_id=player_howstat_id, role=player_role)
                update_player_stat_in_db(howstatid=player_howstat_id, match_format=[match_format])
                player = get_player_object(player_name, MATCH_DETAILS['team1_code'])
                if player is not None:
                    team1_players.append(player)
                    team1_order.append(str(player.playerIPLID))
                else:
                    print(f"Player not found in DB even after searching... sadddd ;-;- {player_name}")
    if len(team1_players) > 0:
        event_object.Playing11Team1PlayerId.add(*team1_players)

    team1_players_bench = []
    for player_name, player_role in team1_bench['bench_players'].items():
        player = get_player_object(player_name, MATCH_DETAILS['team1_code'])
        if player is not None:
            team1_players_bench.append(player)
            
            try:
                # update_player_stat_in_db(howstatid=player.howstatId, match_format=[match_format])
                player.updateFromApi()
            except Exception as e:
                print(f"Exception while updating player stats - {e}")
        else:
            continue
            print(player_name, player_role, MATCH_DETAILS['team1_code'])
            if PLAYER_NOTFOUND_SEARCH_MAP is None:
                PLAYER_NOTFOUND_SEARCH_MAP = get_player_id_map(country_code=MATCH_DETAILS['team1_code'],
                                                               match_format=match_format)
            print(f"Player scraping - {player_name}")
            player_howstat_id = search_player_howstat_id(player_id_map=PLAYER_NOTFOUND_SEARCH_MAP,
                                                         player_name=player_name)
            if player_howstat_id:
                update_player_in_json(player_name=player_name, team_abbr=MATCH_DETAILS['team1_code'],
                                      howstat_id=player_howstat_id, role=player_role)
                update_player_stat_in_db(howstatid=player_howstat_id, match_format=[match_format])
                player = get_player_object(player_name, MATCH_DETAILS['team1_code'])
                if player is not None:
                    team1_players_bench.append(player)
                else:
                    print(f"Player not found in DB even after searching... sadddd ;-;- {player_name}")
            print(f"Player not found in DB - {player_name}")
    if len(team1_players_bench) > 0:
        event_object.BenchPlayersTeam1PlayerId.add(*team1_players_bench)

    PLAYER_NOTFOUND_SEARCH_MAP = None
    for player_name, player_role in team2_playing11['playing11'].items():
        player = get_player_object(player_name, MATCH_DETAILS['team2_code'])
        if player is not None:
            team2_players.append(player)
            team2_order.append(str(player.playerIPLID))
            # try:
            #     update_player_stat_in_db(howstatid=player.howstatId, match_format=[match_format])
            # except Exception as e:
            #     print(f"Exception while updating player stats - {e}")
            try:
                # update_player_stat_in_db(howstatid=player.howstatId, match_format=[match_format])
                player.updateFromApi()
            except Exception as e:
                print(f"Exception while updating player stats - {e}")
        else:
            continue
            if PLAYER_NOTFOUND_SEARCH_MAP is None:
                PLAYER_NOTFOUND_SEARCH_MAP = get_player_id_map(country_code=MATCH_DETAILS['team2_code'],
                                                               match_format=match_format)
            print(f"Player scraping - {player_name}")
            player_howstat_id = search_player_howstat_id(player_id_map=PLAYER_NOTFOUND_SEARCH_MAP,
                                                         player_name=player_name)
            if player_howstat_id:
                update_player_in_json(player_name=player_name, team_abbr=MATCH_DETAILS['team2_code'],
                                      howstat_id=player_howstat_id, role=player_role)
                update_player_stat_in_db(howstatid=player_howstat_id, match_format=[match_format])
                player = get_player_object(player_name, MATCH_DETAILS['team2_code'])
                if player is not None:
                    team2_players.append(player)
                    team2_order.append(str(player.playerIPLID))
                else:
                    print(f"Player not found in DB - {player_name}")
    if len(team2_players) > 0:
        event_object.Playing11Team2PlayerId.add(*team2_players)
    print(f"PLAYER_IN_ORDER - {team1_order}, {team2_order}")

    team2_players_bench = []
    for player_name, player_role in team2_bench['bench_players'].items():
        print(player_name)
        player = get_player_object(player_name, MATCH_DETAILS['team2_code'])
        if player is not None:
            team2_players_bench.append(player)
            try:
                # update_player_stat_in_db(howstatid=player.howstatId, match_format=[match_format])
                player.updateFromApi()
            except Exception as e:
                print(f"Exception while updating player stats - {e}")
        else:
            continue
            if PLAYER_NOTFOUND_SEARCH_MAP is None:
                PLAYER_NOTFOUND_SEARCH_MAP = get_player_id_map(country_code=MATCH_DETAILS['team2_code'],
                                                               match_format=match_format)
            print(f"Player scraping - {player_name}")
            player_howstat_id = search_player_howstat_id(player_id_map=PLAYER_NOTFOUND_SEARCH_MAP,
                                                         player_name=player_name)
            if player_howstat_id:
                update_player_in_json(player_name=player_name, team_abbr=MATCH_DETAILS['team2_code'],
                                      howstat_id=player_howstat_id, role=player_role)
                update_player_stat_in_db(howstatid=player_howstat_id, match_format=[match_format])
                player = get_player_object(player_name, MATCH_DETAILS['team2_code'])
                if player is not None:
                    team2_players_bench.append(player)
                else:
                    print(f"Player not found in DB - {player_name}")

    if len(team2_players_bench) > 0:
        event_object.BenchPlayersTeam2PlayerId.add(*team2_players_bench)

    event_object.playerOrderTeam1 = ','.join(team1_order)
    event_object.playerOrderTeam2 = ','.join(team2_order)

    event_object.save()


def update_upcoming_event_in_db(MATCH_DETAILS, match_type, match_format, event_type, match_number=0):
    new_upcoming_event_object = UpcomingEvents(
        matchType=match_type,
        matchFormat=match_format,
        eventType=event_type,
        matchNumber=match_number,
        title=MATCH_DETAILS['title'],
        cover='https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-wallpaper.jpg',  # change cover image
        startDateTime=datetime.datetime.strptime(MATCH_DETAILS['start_date'] + ' ' + MATCH_DETAILS['start_time'],
                                                 '%Y-%m-%d %H:%M:%S'),
        endDate=datetime.date(year=int(MATCH_DETAILS['end_date'].split('-')[0]),
                              month=int(MATCH_DETAILS['end_date'].split('-')[1]),
                              day=int(MATCH_DETAILS['end_date'].split('-')[2])),
        teamId1=get_team_object(MATCH_DETAILS['team1_code']),
        teamId2=get_team_object(MATCH_DETAILS['team2_code'])
    )
    new_upcoming_event_object.save()
    update_playing_11_and_bench_players(event_object=new_upcoming_event_object, MATCH_DETAILS=MATCH_DETAILS,
                                        match_format=match_format)

    return True
