from players.models import Players, ICCRanking, PlayerStats
import json


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


stats_data = open("./players/stats.json", "r")
data = json.load(stats_data)

cp = Players.objects.all()

lr = 110
size = 5

while lr < len(data):
    ur = lr + size

    if ur > len(data):
        ur = len(data)
    stats_populate = []

    for i in range(lr, ur):
        q = data[i]
        play = cp[i]
        for t in ['ODI', 'TEST', 'T20']:
            lt = t.lower()
            if q[lt]['batting'] == {}:
                continue

            if t == 'ODI':
                tm = q.get('totalODIMatches', -1)
            elif t == 'TEST':
                tm = q.get('totalTestMatches', -1)
            else:
                tm = q.get('totalT20Matches', -1)

            stats_populate.append(PlayerStats(playerId=play, matchFormat=t, totalMatches=s2i(tm),
                                              innings=s2i(q[lt]['batting'].get('innings', -1)),
                                              notOuts=s2i(q[lt]['batting'].get('notOuts', -1)),
                                              aggregate=s2i(q[lt]['batting'].get('agrregate', -1)),
                                              highestScore=s2i(q[lt]['batting'].get('highestScore', -1)),
                                              average=s2f(q[lt]['batting'].get('average', -1)),
                                              fiftys=s2i(q[lt]['batting'].get('50s', -1)),
                                              hundreds=s2i(q[lt]['batting'].get('100s', -1)),
                                              ducks=s2i(q[lt]['batting'].get('ducks', -1)),
                                              fours=s2i(q[lt]['batting'].get('4s', -1)),
                                              sixes=s2i(q[lt]['batting'].get('6s', -1)),
                                              scoringRate=s2f(q[lt]['batting'].get('scoringRate', -1)),
                                              overs=s2f(q[lt]['bowling'].get('Overs', -1)),
                                              runsConceded=s2i(q[lt]['bowling'].get('runsConceded', -1)),
                                              wickets=s2i(q[lt]['bowling'].get('wicktes', -1)),
                                              bowlingAverage=s2f(q[lt]['bowling'].get('bowlingAverage', -1)),
                                              bowlingEconomyRate=s2f(q[lt]['bowling'].get('bowlingEconomyRate', -1)),
                                              bowlingStrikeRate=s2f(q[lt]['bowling'].get('bowlingStrikeRate', -1))))

    PlayerStats.objects.bulk_create(stats_populate)
    lr = ur

# exec(open("./players/populate_db.py").read())

# exec(open("./players/populate2.py").read())
