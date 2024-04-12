from players.models import PlayerIPL

all_players = PlayerIPL.objects.all()

for player in all_players:
    try:
        player.updateFromApi()
    except Exception as e:
        print(e)
    