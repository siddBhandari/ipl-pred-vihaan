import json
from players.models import PlayerIPL

# Assuming you have the JSON data in a file named 'player_data.json' 
with open('./scripts/combined-2023.json', 'r') as file:
    data = json.load(file)

for player_data in data:
    for key, val in player_data.items():
        if val == '-':
            player_data[key] = None
    if player_data['StrikerName']:
        if player_data['HighestScore'][-1] == '*':
            player_data['HighestScore'] = player_data['HighestScore'][:-1]
        player_name = player_data['StrikerName']
        team_code = player_data['TeamCode_batting'] 
        batting_matches_played_prev = int(player_data.get('Matches_batting', 0))
        batting_innings_played_prev = int(player_data.get('Innings_batting', 0))
        not_out_prev = int(player_data.get('NotOuts', 0))
        runs_prev = int(player_data.get('TotalRuns', 0))
        high_score_prev = int(player_data.get('HighestScore', 0))
        batting_average_prev = float(player_data.get('BattingAverage', 0)) if player_data['BattingAverage'] else 0
        balls_faced_prev = int(player_data.get('Balls', 0))
        strike_rate_prev = float(player_data.get('StrikeRate', 0))
    else:
        batting_matches_played_prev = None
        batting_innings_played_prev = None
        not_out_prev = None
        runs_prev = None
        high_score_prev = None
        batting_average_prev = None
        balls_faced_prev = None
        strike_rate_prev = None
    
    bowling_matches_played_prev = batting_matches_played_prev
    
    if player_data['BowlerName']:
        player_name = player_data['BowlerName']
        team_code = player_data['TeamCode_bowling']
        bowling_innings_played_prev = int(player_data['Innings_bowling'])
        overs_bowled_prev = int(float(player_data['OversBowled']))
        run_conceeded_prev = int(player_data['TotalRunsConceded'])
        wickets_prev = int(player_data['Wickets'])
        bowling_average_prev = float(player_data['BowlingAverage'])
        economy_prev = float(player_data['EconomyRate'])
        bowling_strike_rate_prev = float(player_data['StrikeRate_bowling'])
    else:
        bowling_innings_played_prev = None
        overs_bowled_prev = None
        run_conceeded_prev = None
        wickets_prev = None
        bowling_average_prev = None
        economy_prev = None
        bowling_strike_rate_prev = None

    # Create PlayerIPL object
    try:
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
            bowlingMatchesPlayedPrev=bowling_matches_played_prev,
            bowlingInningsPlayedPrev=bowling_innings_played_prev,
            oversBowledPrev=overs_bowled_prev,
            runsConceededPrev=run_conceeded_prev,
            wicketsPrev=wickets_prev,
            bowlingAveragePrev=bowling_average_prev,
            economyPrev=economy_prev,
            bowlingStrikeRatePrev=bowling_strike_rate_prev,
            clientPlayerId=int(player_data['ClientPlayerID']) if player_data['ClientPlayerID'] != '' else -1
        )
        player.save()
    except Exception as e:
        print(e, player_data)
    
