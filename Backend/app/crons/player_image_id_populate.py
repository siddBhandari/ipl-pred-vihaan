from players.models import PlayerIPL

all_players = PlayerIPL.objects.all()

for player in all_players:
    try:
        player.updateImageId()
        player.save()
    except Exception as e:
        print('Updating failed for')
        print(player.playerName, player.playerIPLID, player.clientPlayerId)
        print('Because',e)
        