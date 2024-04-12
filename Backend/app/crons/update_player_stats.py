from bs4 import BeautifulSoup
import requests
from players.models import Players, PlayerStats
import players

URL_MAP = {
    "ODI": "http://www.howstat.com/cricket/Statistics/Players/PlayerOverview_ODI.asp?PlayerID=",
    "T20": "http://www.howstat.com/cricket/Statistics/Players/PlayerOverview_T20.asp?PlayerID=",
    "TEST": "http://www.howstat.com/cricket/Statistics/Players/PlayerOverview.asp?PlayerID=",
    "IPL": "http://www.howstat.com/cricket/Statistics/Players/PlayerOverview_IPL.asp?PlayerID=",
    "SUMMARY": "http://www.howstat.com/cricket/Statistics/Players/PlayerOverviewSummary.asp?PlayerID=",
}


def odi_t20_stat(soup):
    match_index_mapping = {
        "batting": {
            "innings": "Innings:",
            "notOuts": "Not Outs:",
            "aggregate": "Aggregate:",
            "highestScore": "Highest Score:",
            "average": "Average:",
            "50s": "50s:",
            "100s": "100s:",
            "ducks": "Ducks:",
            "4s": "4s:",
            "6s": "6s:",
            "scoringRate": "Scoring Rate",
            "BallsFaced": "Balls Faced:"
        },
        "bowling": {
            "ballDeliveries": "Balls:",
            "runsConceded": "Runs Conceded:",
            "wickets": "Wickets:",
            "bowlingAverage": "Average:",
            "5Wickets": "5 Wickets in Innings:",
            "bestBowling": "Best:",
            "bowlingEconomyRate": "Economy Rate:",
            "bowlingStrikeRate": "Strike Rate:",
        },
        "captaincy": {
            "Matches/Won/Lost:": "Matches/Won/Lost:"
        }
    }

    stats = {
        "batting": {},
        "bowling": {},
        "captaincy": {}
    }

    for key1 in match_index_mapping.keys():
        for key2 in match_index_mapping[key1].keys():
            try:
                stats[key1][key2] = soup.find('span', string=match_index_mapping[key1][key2]).find_next(
                    'td').text.strip()
            except AttributeError:
                stats[key1][key2] = None

    return stats


def test_stat(soup):
    match_index_mapping = {
        "batting": {
            "innings": "Innings:",
            "notOuts": "Not Outs:",
            "aggregate": "Aggregate:",
            "highestScore": "Highest Score:",
            "average": "Average:",
            "50s": "50s:",
            "100s": "100s:",
            "ducks": "Ducks:",
            "4s": "4s:",
            "6s": "6s:",
            "scoringRate": "Scoring Rate",
            "BallsFaced": "Balls Faced:"
        },
        "bowling": {
            "ballDeliveries": "Balls:",
            "runsConceded": "Runs Conceded:",
            "wickets": "Wickets:",
            "bowlingAverage": "Average:",
            "5Wickets": "5 Wickets in Innings:",
            "bestBowling": "Best - Match:",
            "bowlingEconomyRate": "Economy Rate:",
            "bowlingStrikeRate": "Strike Rate:",
        },
        "captaincy": {
            "Matches/Won/Lost:": "Matches/Won/Lost:"
        }
    }

    stats = {
        "batting": {},
        "bowling": {},
        "captaincy": {}
    }

    for key1 in match_index_mapping.keys():
        for key2 in match_index_mapping[key1].keys():
            try:
                stats[key1][key2] = soup.find('span', string=match_index_mapping[key1][key2]).find_next(
                    'td').text.strip()
            except AttributeError:
                stats[key1][key2] = None

    return stats


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


def get_player_info(soup):
    player_info = {}
    try:
        player_info['name'] = soup.find('td', string="Full Name:").find_next('td').text.strip()
        country_full_name = soup.find('select', {'class': 'TeamInput'}).find_next('option').text.strip()
        player_info['country'] = COUNTRY_MAP[country_full_name.lower()]
    except:
        return None
    try:
        player_info['age'] = soup.find('td', string="Current Age:").find_next('td').text.strip().split('years')[0]
    except:
        player_info['age'] = -1
    return player_info


def get_total_matches(soup):
    try:
        total_matches = soup.find('td', string="Matches:").find_next('td').text.split('(')[0].strip()
    except AttributeError:
        total_matches = -1
    return total_matches


def get_player_stats(player_id, match_format):  # here match format is a list ['ODI', 'T20', 'TEST']
    PLAYER_STAT = {
        "ODI": {},
        "T20": {},
        "TEST": {}
    }

    for mf in URL_MAP.keys():
        PLAYER_INFO_FLAG = False
        stats = {
            "batting": {},
            "bowling": {},
            "captaincy": {}
        }
        if mf in match_format:
            url = URL_MAP[mf]
        else:
            continue
        request_url = url + player_id
        response = requests.get(request_url, timeout=10)
        print(f"Requesting {request_url} and response code is {response.status_code}")

        if response.status_code != 200:
            print("Player stats not found for player id " + player_id + " with response code " + str(
                response.status_code))
            PLAYER_STAT[mf] = stats

        else:
            soup = BeautifulSoup(response.content, 'html.parser')
            if not PLAYER_INFO_FLAG:
                PLAYER_INFO = get_player_info(soup)

                print(f"Player info for {player_id} is {PLAYER_INFO}")
                if PLAYER_INFO is None:
                    print("Player info not found for player id " + player_id)
                    PLAYER_STAT[mf] = stats
                    continue
                else:
                    PLAYER_INFO_FLAG = True
                    PLAYER_STAT.update(PLAYER_INFO)

            if mf == 'ODI':
                PLAYER_STAT['ODI'] = odi_t20_stat(soup)
                PLAYER_STAT['totalODIMatches'] = get_total_matches(soup)
            elif mf == 'T20':
                PLAYER_STAT['T20'] = odi_t20_stat(soup)
                PLAYER_STAT['totalT20Matches'] = get_total_matches(soup)
            elif mf == 'TEST':
                PLAYER_STAT['TEST'] = test_stat(soup)
                PLAYER_STAT['totalTestMatches'] = get_total_matches(soup)
            else:
                print("Unknown url " + url)

    return PLAYER_STAT


def insert_player(player_stats, howstatid):
    try:
        new_player = Players(name=player_stats['name'], age=player_stats.get('age', -1), avatarURL=None,
                             country=player_stats['country'],
                             iccId=player_stats.get('iccId', -1), howstatId=player_stats.get('playerId', -1))
    except:
        raise f"Sorry, We couldn't able to add the player with id - {howstatid}. Please raise concern to admin"
    resp = new_player.save()

    if resp is None:
        print("Error while inserting player " + player_stats['name'])
        return None

    return new_player


def s2f(string):
    try:
        return float(string)
    except:
        return -1


def s2i(string):
    try:
        return int(string)
    except:
        return -1


def update_player_stat_in_db(howstatid, match_format):  # match_format is a list ['ODI', 'T20', 'TEST']
    howstatid = str(howstatid)
    player_stats = get_player_stats(howstatid, match_format)

    if player_stats is None:
        return None

    try:
        player = Players.objects.get(howstatId=int(howstatid))
    except players.models.Players.DoesNotExist:
        player = None

    if player is None:
        new_player = insert_player(player_stats, howstatid)
        if new_player is None:
            return None

    for mf in match_format:
        if mf == 'ODI':
            total_matches = player_stats.get('totalODIMatches', -1)
        elif mf == 'TEST':
            total_matches = player_stats.get('totalTestMatches', -1)
        else:
            total_matches = player_stats.get('totalT20Matches', -1)

        lt = mf
        player_already_exists = PlayerStats.objects.filter(playerId=player, matchFormat=mf)
        if player_already_exists:
            player_already_exists.update(playerId=player, matchFormat=mf, totalMatches=s2i(total_matches),
                                         innings=s2i(player_stats[lt]['batting'].get('innings', -1)),
                                         notOuts=s2i(player_stats[lt]['batting'].get('notOuts', -1)),
                                         aggregate=s2i(player_stats[lt]['batting'].get('aggregate', -1)),
                                         highestScore=s2i(player_stats[lt]['batting'].get('highestScore', -1)),
                                         average=s2f(player_stats[lt]['batting'].get('average', -1)),
                                         fiftys=s2i(player_stats[lt]['batting'].get('50s', -1)),
                                         hundreds=s2i(player_stats[lt]['batting'].get('100s', -1)),
                                         ducks=s2i(player_stats[lt]['batting'].get('ducks', -1)),
                                         fours=s2i(player_stats[lt]['batting'].get('4s', -1)),
                                         sixes=s2i(player_stats[lt]['batting'].get('6s', -1)),
                                         scoringRate=s2f(player_stats[lt]['batting'].get('scoringRate', -1)),
                                         ballsFaced=s2i(player_stats[lt]['batting']['BallsFaced']),
                                         overs=int(s2i(player_stats[lt]['bowling']['ballDeliveries']) / 6),
                                         runsConceded=s2i(player_stats[lt]['bowling'].get('runsConceded', -1)),
                                         wickets=s2i(player_stats[lt]['bowling'].get('wickets', -1)),
                                         bowlingAverage=s2f(player_stats[lt]['bowling'].get('bowlingAverage', -1)),
                                         bowlingEconomyRate=s2f(
                                             player_stats[lt]['bowling'].get('bowlingEconomyRate', -1)),
                                         bowlingStrikeRate=s2f(
                                             player_stats[lt]['bowling'].get('bowlingStrikeRate', -1)))
            print("Player successfully updated")
        else:
            updated_player = PlayerStats(playerId=player, matchFormat=mf, totalMatches=s2i(total_matches),
                                         innings=s2i(player_stats[lt]['batting'].get('innings', -1)),
                                         notOuts=s2i(player_stats[lt]['batting'].get('notOuts', -1)),
                                         aggregate=s2i(player_stats[lt]['batting'].get('aggregate', -1)),
                                         highestScore=s2i(player_stats[lt]['batting'].get('highestScore', -1)),
                                         average=s2f(player_stats[lt]['batting'].get('average', -1)),
                                         fiftys=s2i(player_stats[lt]['batting'].get('50s', -1)),
                                         hundreds=s2i(player_stats[lt]['batting'].get('100s', -1)),
                                         ducks=s2i(player_stats[lt]['batting'].get('ducks', -1)),
                                         fours=s2i(player_stats[lt]['batting'].get('4s', -1)),
                                         sixes=s2i(player_stats[lt]['batting'].get('6s', -1)),
                                         scoringRate=s2f(player_stats[lt]['batting'].get('scoringRate', -1)),
                                         ballsFaced=s2i(player_stats[lt]['batting']['BallsFaced']),
                                         overs=int(s2i(player_stats[lt]['bowling']['ballDeliveries']) / 6),
                                         runsConceded=s2i(player_stats[lt]['bowling'].get('runsConceded', -1)),
                                         wickets=s2i(player_stats[lt]['bowling'].get('wickets', -1)),
                                         bowlingAverage=s2f(player_stats[lt]['bowling'].get('bowlingAverage', -1)),
                                         bowlingEconomyRate=s2f(
                                             player_stats[lt]['bowling'].get('bowlingEconomyRate', -1)),
                                         bowlingStrikeRate=s2f(
                                             player_stats[lt]['bowling'].get('bowlingStrikeRate', -1)))
            db_resp = updated_player.save()
            print("Player successfully created...")

            if db_resp is None:
                print("Error while inserting player stats " + player_stats['name'])
                return None

    return True
