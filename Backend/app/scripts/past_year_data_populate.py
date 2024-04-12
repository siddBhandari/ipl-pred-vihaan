import json
from players.models import PlayerIPL

# Assuming you have the JSON data in a file named 'player_data.json' 
with open('../../../../ipl-data/batting-2023.json', 'r') as file:
    data = json.load(file)

for player_data in data:
    player_name = player_data['StrikerName'] if player_data['StrikerName'] else player_data['BowlerName']
    team_code = player_data['TeamCode_batting'] if player_data['TeamCode_batting'] else player_data['TeamCode_bowling']
    batting_matches_played_prev = int(player_data.get('Matches_batting', 0))
    batting_innings_played_prev = int(player_data.get('Innings_batting', 0))
    not_out_prev = int(player_data.get('NotOuts', 0))
    runs_prev = int(player_data.get('TotalRuns', 0))
    high_score_prev = int(player_data.get('HighestScore', 0))
    batting_average_prev = float(player_data.get('BattingAverage', 0))
    balls_faced_prev = int(player_data.get('Balls', 0))
    strike_rate_prev = float(player_data.get('StrikeRate', 0))
    
    bowling_innings_played_prev = int(player_data.get())

    # Create PlayerIPL object
    player = PlayerIPL.objects.create(
        playerName=player_name,
        playerTeamCode=team_code,
        battingMatchesPlayedPrev=batting_matches_played_prev,
        battingInningsPlayedPrev=batting_innings_played_prev,
        notOutPrev=not_out_prev,
        runsPrev=runs_prev,
        highScorePrev=high_score_prev,
        averagePrev=batting_average_prev,
        ballsFacedPrev=balls_faced_prev,
        strikeRatePrev=strike_rate_prev,
        # Assign other fields accordingly
    )
    player.save()
