import json
from players.models import PlayerIPL

# Assuming you have the JSON data in a file named 'player_data.json' 
with open('./crons/combined-2024.json', 'r') as file:
    data = json.load(file)

for player_data in data:
    if player_data['ClientPlayerID'] == '':
        continue
    
    if len(PlayerIPL.objects.filter(clientPlayerId=player_data['ClientPlayerID'])) != 0:
        continue
    
    for key, val in player_data.items():
        if val == '-':
            player_data[key] = None
    if player_data['StrikerName']:
        if player_data['HighestScore'][-1] == '*':
            player_data['HighestScore'] = player_data['HighestScore'][:-1]
        player_name = player_data['StrikerName']
        team_code = player_data['TeamCode_batting'] 
        batting_matches_played_cur = int(player_data.get('Matches_batting', 0))
        batting_innings_played_cur = int(player_data.get('Innings_batting', 0))
        not_out_cur = int(player_data.get('NotOuts', 0))
        runs_cur = int(player_data.get('TotalRuns', 0))
        high_score_cur = int(player_data.get('HighestScore', 0))
        batting_average_cur = float(player_data.get('BattingAverage', 0)) if player_data['BattingAverage'] else 0
        balls_faced_cur = int(player_data.get('Balls', 0))
        strike_rate_cur = float(player_data.get('StrikeRate', 0))
    else:
        batting_matches_played_cur = None
        batting_innings_played_cur = None
        not_out_cur = None
        runs_cur = None
        high_score_cur = None
        batting_average_cur = None
        balls_faced_cur = None
        strike_rate_cur = None
    
    bowling_matches_played_cur = batting_matches_played_cur
    
    if player_data['BowlerName']:
        player_name = player_data['BowlerName']
        team_code = player_data['TeamCode_bowling']
        bowling_innings_played_cur = int(player_data['Innings_bowling'])
        overs_bowled_cur = int(float(player_data['OversBowled']))
        run_conceeded_cur = int(player_data['TotalRunsConceded'])
        wickets_cur = int(player_data['Wickets'])
        bowling_average_cur = float(player_data['BowlingAverage'])
        economy_cur = float(player_data['EconomyRate'])
        bowling_strike_rate_cur = float(player_data['StrikeRate_bowling'])
    else:
        bowling_innings_played_cur = None
        overs_bowled_cur = None
        run_conceeded_cur = None
        wickets_cur = None
        bowling_average_cur = None
        economy_cur = None
        bowling_strike_rate_cur = None

    # Create PlayerIPL object
    try:
        player = PlayerIPL.objects.create(
            playerName=player_name,
            playerTeamCode=team_code,
            battingMatchesPlayedCur=batting_matches_played_cur,
            battingInningsPlayedCur=batting_innings_played_cur,
            notOutCur=not_out_cur,
            runsCur=runs_cur,
            highScoreCur=high_score_cur,
            averageCur=batting_average_cur,
            ballsFacedCur=balls_faced_cur,
            strikeRateCur=strike_rate_cur,
            bowlingMatchesPlayedCur=bowling_matches_played_cur,
            bowlingInningsPlayedCur=bowling_innings_played_cur,
            oversBowledCur=overs_bowled_cur,
            runsConceededCur=run_conceeded_cur,
            wicketsCur=wickets_cur,
            bowlingAverageCur=bowling_average_cur,
            economyCur=economy_cur,
            bowlingStrikeRateCur=bowling_strike_rate_cur,
            clientPlayerId=int(player_data['ClientPlayerID']) if player_data['ClientPlayerID'] != '' else -1
        )
        player.save()
    except Exception as e:
        print(e, player_data)
    
