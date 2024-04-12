from players.models import Players, ICCRanking, PlayerStats
import json
from django.db import transaction

def s2f(string):
    try:
        return float(string)
    except:
        return -1.0


def s2i(string):
    try:
        return int(string)
    except:
        return -1


stats_data = open("./populate-db/odi_stats.json", "r")
data = json.load(stats_data)


def update_or_create_player(player_data):
    name = player_data.get('name', '')
    howstat_id = player_data.get('howstatId', '')
    age = int(player_data.get('age', 0))
    role = player_data.get('role', '')
    country = player_data.get('country', '')
    odi_data = player_data.get('odi', {})

    try:
        player = Players.objects.get(howstatId=howstat_id)
    except Players.DoesNotExist:
        # Player doesn't exist, create a new player
        player = Players.objects.create(name=name, age=age, playerRole=role, howstatId=howstat_id, country=country)

    # try:
    #     player = Players.objects.filter(howstatId=int(howstat_id))
    #     if len(player) > 1:
    #         print(f"Found multiple players with howstatId: {howstat_id}")
    #         print(f"deleting all except first")
    #         pp = None
    #         for p in player:
    #             if p.iccId != -1 and p.iccId != howstat_id:
    #                 pp = p
    #                 break
    #         if pp is None:
    #             pp = player[0]
    #         Players.objects.filter(howstatId=int(howstat_id)).exclude(playerId=pp.playerId).delete()
    #         print("deleted ----------------------------------------------------------------------------------------------------------------")
        # elif len(player) == 1:
        #     player = player[0]
        #     player.name = name
        #     player.age = age
        #     player.playerRole = role
        #     player.howstatId = howstat_id
        #     player.country = country
        #     player.save()
    #     else:
    #         print(f"Could not find player with howstatId: {howstat_id}")
    # except Players.DoesNotExist:
    #     print(f"Could not find player with howstatId: {howstat_id}")
        # print(f"Creating new player: {name} with howstatId: {howstat_id}")
        # pass
        # player = Players.objects.create(name=name, age=age, playerRole=role, iccId=howstat_id)

    with transaction.atomic():
        player_stats, created = PlayerStats.objects.get_or_create(playerId=player, matchFormat='ODI')
        player_stats.totalMatches = s2i(player_data.get('totalODIMatches', 0))
        player_stats.innings = s2i(odi_data['batting'].get('innings', -1))
        player_stats.notOuts = s2i(odi_data['batting'].get('notOuts', -1))
        player_stats.aggregate = s2f(odi_data['batting'].get('agrregate', -1.0))
        player_stats.highestScore = odi_data['batting'].get('highestScore', '-1')
        player_stats.average = s2f(odi_data['batting'].get('average', -1.0))
        player_stats.fiftys = s2i(odi_data['batting'].get('50s', -1))
        player_stats.hundreds = s2i(odi_data['batting'].get('100s', -1))
        player_stats.ducks = s2i(odi_data['batting'].get('ducks', -1))
        player_stats.fours = s2i(odi_data['batting'].get('4s', -1))
        player_stats.sixes = s2i(odi_data['batting'].get('6s', -1))
        player_stats.scoringRate = s2f(odi_data['batting'].get('scoringRate', -1.0))
        player_stats.ballsFaced = s2f(odi_data['batting'].get('BallsFaced', -1))

        # Update bowling stats
        player_stats.overs = s2f(odi_data['bowling'].get('ballDeliveries', -1.0)) / 6
        player_stats.runsConceded = s2i(odi_data['bowling'].get('runsConceded', -1))
        player_stats.wickets = s2i(odi_data['bowling'].get('wicktes', -1))
        player_stats.bowlingAverage = s2f(odi_data['bowling'].get('bowlingAverage', -1.0))
        player_stats.bowlingEconomyRate = s2f(odi_data['bowling'].get('bowlingEconomyRate', -1.0))
        player_stats.bowlingStrikeRate = s2f(odi_data['bowling'].get('bowlingStrikeRate', -1.0))

        # Save the PlayerStats record
        player_stats.save()

    # Update other fields in the Players model if needed

    print(f"Updated player: {name} with howstatId: {howstat_id}")


print(f"Total players: {len(data)}")
for player_data in data:
    update_or_create_player(player_data)



# exec(open("./populate-db/update_odi_players.py").read())