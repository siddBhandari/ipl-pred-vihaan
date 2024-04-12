import pandas as pd
from players.models import PlayerIPL
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

df = pd.read_csv('crons/Players_Info_2024.csv')

def find_best_match(name, choices):
    choices = list(choices)
    best_match, score = process.extractOne(name, choices, scorer=fuzz.token_sort_ratio)
    print()
    if score >= 83:  # Adjust the threshold according to your preference
        return best_match
    else:
        return None

def get_role(player_name, team):
    team_df = df[df['Team Name'] == team.upper()]
    team_df = team_df[['Player Name','Player Role']]
    team_df_map = {p[0]:p[1] for p in team_df.values.tolist()}
    best_match = find_best_match(player_name, team_df_map.keys())
    if not best_match:
        return 'ALLROUNDER'
    role = team_df_map[best_match]
    role = role.split(' ')
    for r in role:
        if r.upper() == 'ALLROUNDER':
            return 'ALLROUNDER'
        if r.upper() == 'BOWLER':
            return 'BOWLER'
        if r.upper() == 'BATTER':
            return 'BATTER'
    
all_players = PlayerIPL.objects.all()

for player in all_players:
    try:
        player.playerRole = get_role(player.playerName, player.playerTeamCode)
        player.save()
        print(player.playerName, 'ka role', player.playerRole)
    except Exception as e:
        print(player.playerName, e)