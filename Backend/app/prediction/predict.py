import math

from players.models import PlayerStats, Teams, UpcomingEvents, PlayerIPL
from django.shortcuts import get_object_or_404


def cf(value):  # custom formatter for formatting the output
    if isinstance(value, (int, float)):
        if value < 0:
            return abs(value)
        else:
            return round(value)
    else:
        return None


def get_batting_strength(player_stats):
    balls_faced = player_stats.getBallsFaced()
    batting_innings = player_stats.getBattingInnings()
    if balls_faced <= 0 or batting_innings <= 0:
        return 0
    not_outs = player_stats.getNotOuts()
    print("balls_faced, batting_innings, not_outs")
    print(balls_faced, batting_innings, not_outs)
    if not_outs == -1:
        not_outs = 0
    try:
        batting_strength = balls_faced / (batting_innings - not_outs)
    except:
        batting_strength = 0
    print("batting_strength")
    print(batting_strength)
        
    return batting_strength


def get_strike_rate_per_ball(player_stats):
    if player_stats.aggregate <= 0 or player_stats.ballsFaced <= 0:
        return 0
    strike_rate_per_ball = player_stats.aggregate / player_stats.ballsFaced
    return strike_rate_per_ball


def get_predicted_runs_scored(player_stats):  # this is same as average of the player stats
    batting_strength = get_batting_strength(player_stats)
    strike_rate_per_ball = player_stats.getBattingStrikeRate() / 100
    # print("strike_rate_per_ball", strike_rate_per_ball)
    predicted_runs_scored = batting_strength * strike_rate_per_ball
    # print(f"predicted_runs_scored: {predicted_runs_scored}")
    # print(player_stats.playerName, predicted_runs_scored)
    return round(predicted_runs_scored)


def get_bowler_economy(player_stats):
    economy = player_stats.runsConceded / player_stats.overs
    return economy


def get_max_overs_bowled(match_type):
    if match_type.lower() == "t20":
        return 4
    elif match_type.lower() == "odi":
        return 10
    else:
        return -1


def get_average_runs_conceded_per_over(player_stats, match_type):
    if player_stats.runsConceded == -1:
        return 0
    average_runs_conceded = -1
    max_overs = get_max_overs_bowled(match_type)
    # try:
    bowling_strike_rate = player_stats.bowlingStrikeRate
    if bowling_strike_rate == -1:
        return -1
    average_runs_conceded = (bowling_strike_rate / 6) * max_overs
    # except Exception as e:
    #     print(e)

    return math.ceil(average_runs_conceded)


def get_predicted_runs_conceded_in_match(player_stats, match_type):
    average_runs_conceded = get_average_runs_conceded_per_over(player_stats, match_type)
    predicted_runs_conceded = get_max_overs_bowled(match_type) * average_runs_conceded
    return predicted_runs_conceded


def get_total_overs(bowling_stats):
    total_overs = 0
    for bowler in bowling_stats:
        total_overs += bowler['overs']
    return total_overs

def get_bowling_order(bowling_stats):
    bowlers = []
    for bowler in bowling_stats:
        if bowler['economy'] != -1:
            bowlers.append(bowler)
    return sorted(bowlers, key=lambda x: x['economy'], reverse=False)

def is_bowler(player_stat):
    bowling_innings = player_stat.getBowlingInnings()
    if bowling_innings == 0:
        return False
    min_overs = 2
    return cf(player_stat.getTotalOvers() / bowling_innings) >= min_overs 


class PredictMatchResult:

    def __init__(self, team1_abbr, team2_abbr, event_id):
        # self.team_player_role_map = {}
        self.team1_id = team1_abbr
        self.team2_id = team2_abbr
        self.winner_id = None
        self.event_id = event_id
        self.max_overs = None
        self.match_format = None
        self.team1_prediction = {
            "runs": {},
            "wickets": {},
            "overs": {},
            "batting_stats": [],
            "bowling_stats": []
        }
        self.team2_prediction = {
            "runs": {},
            "wickets": {},
            "overs": {},
            "batting_stats": [],
            "bowling_stats": []
        }
        self.team1_stats = {}
        self.team2_stats = {}

        # print(event_id)

        self.match_format = event_id.matchFormat
        if event_id.matchFormat == 'ODI':
            self.max_overs = 50
        elif event_id.matchFormat == 'T20':
            self.max_overs = 20
        else:
            self.max_overs = -1

    def get_match_result(self, team1_players_stats = None, team2_players_stats=None):
        if (team1_players_stats is None) or (team2_players_stats is None):
            team1_players_stats, team2_players_stats = self.get_team_players()
        # print(f"team1_players_stats: {team1_players_stats}")
        # print(f"team2_players_stats: {team2_players_stats}")
        if not team1_players_stats or not team2_players_stats:
            return False, False
        self.team1_stats = self.create_player_prediction_result(team1_players_stats)
        self.team2_stats = self.create_player_prediction_result(team2_players_stats)
        team1_result_prediction, self.team1_stats = self.predict(self.team1_stats)
        team2_result_prediction, self.team2_stats = self.predict(self.team2_stats)
        # print(f"team1_result_prediction: {team1_result_prediction}")
        # print(f"team2_result_prediction: {team2_result_prediction}")
        populate = self.populate_teams_result(team1_result_prediction, team2_result_prediction)

        if max(self.team1_prediction["runs"]['min'], self.team1_prediction["runs"]['max']) > max(
                self.team2_prediction["runs"]['min'], self.team2_prediction["runs"]['max']):
            self.winner_id = self.team1_id
        else:
            self.winner_id = self.team2_id

        # print(f"winner_id: {self.winner_id}")
        # print(f"team1_prediction: {self.team1_prediction}")
        # print(f"team2_prediction: {self.team2_prediction}")

        return self.winner_id, self.team1_prediction, self.team2_prediction

    def get_team_players(self):
        # try:
        # event = UpcomingEvents.objects.get(eventId=int(self.event_id))
        event = self.event_id
        # print(f"event: {event}")
        # except:
        #     return False, False

        # self.match_format = event.matchFormat
        # if event.matchFormat == 'ODI':
        #     self.max_overs = 50
        # elif event.matchFormat == 'T20':
        #     self.max_overs = 20
        # else:
        #     self.max_overs = -1

        team1_playing11_id = event.Playing11Team1PlayerId.all()
        team2_playing11_id = event.Playing11Team2PlayerId.all()
        team1_players_stats = PlayerIPL.objects.filter(playerIPLID__in=team1_playing11_id)
        team2_players_stats = PlayerIPL.objects.filter(playerIPLID__in=team2_playing11_id)

        # print(f"team1_db_players_stats: {team1_players_stats.all()}")
        # print(f"team2_db_players_stats: {team2_players_stats}")

        return team1_players_stats, team2_players_stats
    

    def predict(self, team_stats):
        team_result = {}
        balls_played = 0
        runs_played = 0
        wickets_fallen = 0
        wicket_taken = 0
        runs_conceded = 0
        overs_bowled = 0
        batting_sorted = sorted(team_stats['batting_stats'], key=lambda x: x['balls'],
                                reverse=True)  # sorted based on balls played on average by a player
        bowling_sorted = get_bowling_order(team_stats['bowling_stats'])

        for player in batting_sorted:
            if player['played']:
                runs_played += player['runs']
                balls_played += player['balls']
                wickets_fallen += 1
                # print(player['name'])
                # print("balls_played", "self.max_overs", "wickets_fallen")
                # print(balls_played, self.max_overs, wickets_fallen)
                if balls_played >= self.max_overs * 6 or wickets_fallen >= 10:
                    break

        total_predicted_overs = get_total_overs(bowling_sorted)
        while total_predicted_overs < self.max_overs:
            for player in bowling_sorted:
                if player['played']:
                    player['overs'] += 1
            total_predicted_overs = get_total_overs(bowling_sorted)

        # print(f"bowling_sorted: {bowling_sorted}")

        bowling_stats = []
        for player in bowling_sorted:
            bowler_predictions = {}
            if player['played']:
                # print('BOWLER Players -------------')
                # print(player)
                bowler_predictions['id'] = player['id']
                bowler_predictions['name'] = player['name']
                player_overs_bowled = cf(min(player['overs'], get_max_overs_bowled(self.match_format)))
                bowler_predictions['overs'] = cf(player_overs_bowled)
                bowler_predictions['wickets'] = cf((player_overs_bowled * 6) / player['bowling_strike_rate'])
                bowler_predictions['runs_conceded'] = cf(player_overs_bowled * player['economy'])
                bowler_predictions['economy'] = player['economy']
                bowler_predictions['played'] = True
                runs_conceded += (player_overs_bowled * player['economy'])
                bowling_stats.append(bowler_predictions)

                overs_bowled += player_overs_bowled
                wicket_taken += bowler_predictions['wickets']
                if overs_bowled >= self.max_overs or wicket_taken >= 10:
                    break
        team_stats['bowling_stats'] = bowling_stats

        return {
            "runs_played": runs_played,
            "balls_played": balls_played,
            "wickets_fallen": wickets_fallen,
            "wicket_taken": wicket_taken,
            "runs_conceded": runs_conceded,
            "overs_bowled": overs_bowled
        }, team_stats

    def create_player_prediction_result(self, team_players_stats):
        team_stats = {
            "batting_stats": [],
            "bowling_stats": []
        }
        for player in team_players_stats:
            player_stat = {}
            print(player.__dict__)
            player_role = player.playerRole
            has_bowling_skills = is_bowler(player)

            if player_role == 'BATTER' and has_bowling_skills:
                player_role = 'ALLROUNDER'

            # print(player.name, "has_bowling_skills ?", has_bowling_skills, 'but has role', player_role)
            if player_role == 'BATTER':
                player_stat['id'] = player.playerIPLID
                player_stat['name'] = player.playerName
                # average_runs = player.getAverage()
                # print('average_runs',average_runs)
                player_stat['runs'] = get_predicted_runs_scored(player)
                player_stat['balls'] = cf(get_batting_strength(player))
                player_stat['played'] = True

                team_stats['batting_stats'].append(player_stat)

            elif (player_role == 'BOWLER' or player_role == 'ALLROUNDER'):
                player_stat['id'] = player.playerIPLID
                player_stat['name'] = player.playerName
                bowling_strike_rate = player.getBowlingStrikeRate()
                if bowling_strike_rate != -1:
                    player_stat['bowling_strike_rate'] = cf(bowling_strike_rate)
                else: 
                    # Here the bowling strike rate turns into +1 if it is not defined which is actually very good bowling but misleading in our case.
                    # Setting bowling_strike_rate to a high number like 100, so that wickets taken turn to zero in further calculations.
                    player_stat['bowling_strike_rate'] = 100 

                # (get_bowling_strike_rate(player) / 6) * get_predicted_overs_bowled(self.match_format)
                player_stat['economy'] = player.getEconomy()
                player_stat['overs'] = cf(player.getTotalOvers() / player.getBowlingInnings()) if player.getBowlingInnings() != 0 else 0
                player_stat['played'] = True
                # print("306--")
                # print(player_stat)

                team_stats['bowling_stats'].append(player_stat)

                # batting stats
                player_stat = {}
                player_stat['id'] = player.playerIPLID
                player_stat['name'] = player.playerName
                
                # average_runs = player.getAverage()
                player_stat['runs'] = get_predicted_runs_scored(player)
                player_stat['balls'] = cf(get_batting_strength(player))
                player_stat['played'] = True

                team_stats['batting_stats'].append(player_stat)
            else:
                print( "Player role not found", player_role)
                continue

        # print(f"Team Stats: {team_stats}")
        return team_stats

    def populate_teams_result(self, stats1, stats2):
        self.team1_prediction['runs']['max'] = cf(max(stats1['runs_played'], stats2['runs_conceded']))
        self.team1_prediction['runs']['min'] = cf(min(stats1['runs_played'], stats2['runs_conceded']))
        self.team1_prediction['overs']['max'] = cf(
            min(max(math.floor(stats1['balls_played'] / 6), stats2['overs_bowled']),
                self.max_overs))
        self.team1_prediction['overs']['min'] = cf(
            min(min(math.floor(stats1['balls_played'] / 6), stats2['overs_bowled']),
                self.max_overs))
        self.team1_prediction['wickets']['max'] = cf(min(max(stats1['wickets_fallen'], stats2['wicket_taken']), 10))
        self.team1_prediction['wickets']['min'] = cf(min(min(stats1['wickets_fallen'], stats2['wicket_taken']), 10))
        self.team1_prediction['batting_stats'] = self.team1_stats['batting_stats']
        self.team1_prediction['bowling_stats'] = self.team1_stats['bowling_stats']

        self.team2_prediction['runs']['max'] = cf(max(stats2['runs_played'], stats1['runs_conceded']))
        self.team2_prediction['runs']['min'] = cf(min(stats2['runs_played'], stats1['runs_conceded']))
        self.team2_prediction['overs']['max'] = cf(
            min(max(math.floor(stats2['balls_played'] / 6), stats1['overs_bowled']),
                self.max_overs))
        self.team2_prediction['overs']['min'] = cf(
            min(min(math.floor(stats2['balls_played'] / 6), stats1['overs_bowled']),
                self.max_overs))
        self.team2_prediction['wickets']['max'] = cf(min(max(stats2['wickets_fallen'], stats1['wicket_taken']), 10))
        self.team2_prediction['wickets']['min'] = cf(min(min(stats2['wickets_fallen'], stats1['wicket_taken']), 10))
        self.team2_prediction['batting_stats'] = self.team2_stats['batting_stats']
        self.team2_prediction['bowling_stats'] = self.team2_stats['bowling_stats']

        # print(f"Team1 Prediction: {self.team1_prediction}")
        # print(f"Team2 Prediction: {self.team2_prediction}")
        return True
