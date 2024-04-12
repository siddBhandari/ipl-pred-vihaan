from players.models import Players, ICCRanking, PlayerStats
import json

from datetime import datetime


def calculate_age(birthdate):
    if birthdate == -1:
        return -1

    try:
        birthdate_obj = datetime.strptime(birthdate, "%m/%d/%Y")
        current_date = datetime.now()
        age = current_date.year - birthdate_obj.year - (
                    (current_date.month, current_date.day) < (birthdate_obj.month, birthdate_obj.day))
        return age
    except:
        return -1


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


def get_country(country):
    return COUNTRY_MAP.get(country.lower(), None)


stats_data = open("./players/stats.json", "r")
data = json.load(stats_data)

players_populate = [Players(name=p['name'], age=calculate_age(p.get('dob', -1)), avatarURL=None, country=get_country(p['country']),
                            iccId=p.get('iccId', -1), howstatId=p.get('playerId', -1)) for p in data]
Players.objects.bulk_create(players_populate)
