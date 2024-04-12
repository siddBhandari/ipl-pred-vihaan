from players.models import Players, ICCRanking
import pandas as pd


def populate_icc_ranking_table(data):
    for i in range(len(data)):
        if data['rating'][i] == -1:
            continue

        howstatid = data['howstatid'][i]
        player = Players.objects.filter(howstatId=howstatid)

        if len(player) == 0:
            continue

        player = player[0]
        iccranking = ICCRanking(matchFormat=data['format'][i], playerId=player, role=data['icc_role'][i],
                                rank=data['rank'][i], rating=data['rating'][i])
        try:
            iccranking.save()
            player.iccId = data['iccid'][i]
            player.save()
        except Exception as e:
            print(e)

        print("Saved ICC Ranking for " + player.name + " in " + data['format'][i] + " as " + data['icc_role'][i])


data = pd.read_csv('./populate-db/ODI_BATSMAN.csv')
populate_icc_ranking_table(data)
