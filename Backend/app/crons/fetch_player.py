import requests
from bs4 import BeautifulSoup
from fuzzywuzzy import fuzz

COUNTRY_MAP_HOWSTAT = {
    "IND": "IND",
    "PAK": "PAK",
    "ENG": "ENG",
    "AUS": "AUS",
    "NZ": "NZL",
    "ZIM": "ZIM",
    "WI": "WI",
    "SA": "SAF",
    "SL": "SRL",
    "BAN": "BAN",
    "NED": "NED",
}

HOWSTAT_COMP = {
    "T20": "W",
    "ODI": "O",
    "TEST": "T",
}

BASE_URL = "http://www.howstat.com/cricket/Statistics/Players/PlayerCountryList.asp"


def get_player_search_soup(country_code, match_format):
    country_code = COUNTRY_MAP_HOWSTAT[country_code.upper()]
    match_format = HOWSTAT_COMP[match_format.upper()]
    parameter = f"?Country={country_code}&Comp={match_format}"
    url = BASE_URL + parameter
    response = requests.post(url, timeout=30)
    soup = BeautifulSoup(response.content, 'html.parser')

    return soup


def get_player_id_map(country_code, match_format):
    soup = get_player_search_soup(country_code, match_format)
    player_id_map = {}
    for player in soup.find_all("a"):
        if player.get("href") and player.get("href").startswith("PlayerOverview"):
            player_id = player.get("href").split("=")[-1]
            if player.text[-1] == "*":
                player_name = player.text[:-1]
                player_id_map[player_name] = player_id

    print(f"Found {len(player_id_map)} players for {country_code} in {match_format}")
    return player_id_map


def fuzzy_match(string1, string2):
    similarity_ratio = fuzz.ratio(str(string1), str(string2))
    return similarity_ratio


def search_player_howstat_id(player_id_map, player_name):
    for player in player_id_map.keys():
        if fuzzy_match(player, player_name) > 90:
            print(f"Found {player} for {player_name}")
            return player_id_map[player]
    return None
