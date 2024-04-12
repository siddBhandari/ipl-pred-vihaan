from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import UpcomingEvents
from .serializers import UpcomingMatchSerializer
from .models import ICCRanking, PlayerStats, Teams, Players, PlayerIPL
from .serializers import PlayerSerializer, PlayerStatsSerializer, ICCRankingSerializer, UpcomingEventsSerializer
from django.shortcuts import get_object_or_404
from datetime import timedelta

TEMP_ROLE_MAP = {
    'BATTING': 'Batsman',
    'BOWLING': 'Bowler',
    'ALLROUNDER': 'All Rounder'
}

EVENT_TYPE_MAP = {
    'series': 'SERIES',
    'match': 'MATCH'
}

BASE_AVATAR_URL = "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/"  # add iccid.png in the end


def cf(value):  # custom formatter for formatting the output
    if isinstance(value, (int, float)):
        if value == -1:
            return 0
        elif value < 0:
            return abs(value)
        else:
            return round(value)
    else:
        return 0


def order_players(player_list, team_order):
    if team_order == "":
        return player_list
    print(f"team_order: {team_order}")
    order_ids = [int(id_) for id_ in team_order.split(',')]
    ordered_result = sorted(player_list, key=lambda x: order_ids.index(x['id']))
    return ordered_result


class ListUpcomingMatches(APIView):

    def handle_exception(self, exc):
        response_data = {
            "status": "error",
            "message": str(exc),
            "data": []
        }
        return Response(response_data)

    def get(self, request, *args, **kwargs):
        event_type = self.request.query_params.get('event', 'SERIES').lower()
        limit = int(self.request.query_params.get('limit', 6))


        queryset = UpcomingEvents.objects.filter(eventType=EVENT_TYPE_MAP[event_type]).order_by('-startDateTime')[:limit]

        all_events = []

        for event in queryset:
            event.startDateTime += timedelta(hours=5, minutes=30)
            event = UpcomingEventsSerializer(event).data

            team1 = Teams.objects.get(teamId=event['teamId1'])
            team2 = Teams.objects.get(teamId=event['teamId2'])

            single_event = {
                "id": event['eventId'],
                "team1": team1.name,
                "team2": team2.name,
                "location": event['location'],
                "start": event['startDateTime'],
                "end": event['endDate'],
                "title": event['title'],
                "format": event['matchFormat'],
                "type": event['matchType'],
                "cover": event['cover'],
                "team1_logo": team1.flagURL,
                "team2_logo": team2.flagURL
            }

            all_events.append(single_event)

        response_data = {
            "status": "success",
            "message": "Upcoming matches fetched successfully.",
            "data": all_events
        }

        return Response(response_data)


class ListTopPlayers(APIView):
    # todo: Rewrite using ipl website scrapper
    # we need to make sure that we only display only 2024 data

    def handle_exception(self, exc):
        response_data = {
            "status": "error",
            "message": str(exc),
            "data": []
        }
        return Response(response_data)

    def top_players(self, format_type, role, limit):
        queryset = ICCRanking.objects.filter(matchFormat=format_type, role=role).order_by('-rating')[:limit]
        return queryset

    def get(self, request):

        format_type = request.GET.get('match_format', 'T20')
        role = request.GET.get('role', 'Batsman')
        limit = int(request.GET.get('limit'), 10)

        top_players = self.top_players(format_type, role, limit)
        print(f"Top players: {top_players}")
        serialized = ICCRankingSerializer(top_players, many=True)
        print(serialized.data)
        all_players = []

        for player in serialized.data:

            try:
                playerStats = PlayerStats.objects.get(playerId=player['playerId'], matchFormat=format_type)
            except Exception as e:
                with open('logs/players.txt', 'a') as file:
                    playerObject = Players.objects.get(playerId=player['playerId'])
                    file.write('\n' + str(playerObject.name) + '\t' + str(player['playerId']) + '\t' + str(
                        player['matchFormat']) + '\t' + str(playerObject.iccId) + '\t' + str(playerObject.howstatId))
                continue

            battingStrength = playerStats.ballsFaced / (playerStats.innings - playerStats.notOuts)
            battingPotential = battingStrength * playerStats.scoringRate

            battingData = {
                "matches": cf(playerStats.totalMatches),
                "runs": cf(playerStats.aggregate),
                "strike_rate": playerStats.scoringRate,
                "average": playerStats.average,
                "potential": cf(battingPotential),
                "strength": cf(battingStrength)
            }

            bowlingData = {
                "matches": cf(playerStats.totalMatches),
                "wickets": cf(playerStats.wickets),
                "economy": playerStats.bowlingEconomyRate,
                "runs_conceeded": cf(playerStats.runsConceded),
                "strike_rate": playerStats.bowlingStrikeRate,
                "overs": cf(playerStats.overs)
            }

            allrounderData = {
                "matches": cf(playerStats.totalMatches),
                "runs": cf(playerStats.aggregate),
                "wickets": cf(playerStats.wickets),
                "batting_average": playerStats.average,
                "bowling_strike_rate": playerStats.scoringRate,
                "economy": playerStats.bowlingEconomyRate,
                "batting_strike_rate": playerStats.scoringRate
            }

            playerDetails = Players.objects.get(playerId=player['playerId'])

            player = {
                "id": player['playerId'],
                "name": playerDetails.name,
                "country": playerDetails.country,
                "role": playerDetails.playerRole,
                "playerAvatar": BASE_AVATAR_URL + str(playerDetails.iccId) + ".png",
                "batting": battingData,
                "bowling": bowlingData,
                "allrounder": allrounderData
            }

            all_players.append(player)

        response_data = {
            "status": "success",
            "message": "Top players fetched successfully",
            "data": all_players
        }

        return Response(
            response_data, status=status.HTTP_200_OK
        )

PLAYER_ROLE_MAP = {
    'BATTER':'Batsman',
    'BOWLER':'Bowler',
    'ALLROUNDER':'All Rounder'
}

class MatchPlayersAPIView(APIView):
    def get(self, request, match_id, *args, **kwargs):
        # try:
        event = get_object_or_404(UpcomingEvents, eventId=match_id)
        team1_playing11_id = event.Playing11Team1PlayerId.all()
        team2_playing11_id = event.Playing11Team2PlayerId.all()

        team1_players_stats = PlayerIPL.objects.filter(playerIPLID__in=team1_playing11_id)
        team2_players_stats = PlayerIPL.objects.filter(playerIPLID__in=team2_playing11_id)
        team1_order = event.playerOrderTeam1
        team2_order = event.playerOrderTeam2

        country_1_players = []
        for player in team1_players_stats:
            batting_innings = player.getBattingInnings()
            not_outs = player.getNotOuts()
            if (batting_innings - not_outs) == 0:
                battingStrength = 0
            else:
                battingStrength = player.getBallsFaced() / (batting_innings - not_outs)
            battingPotential = battingStrength * player.getBattingStrikeRate()
            
            total_matches = player.getTotalMatches()

            player_details = {
                "id": player.playerIPLID,
                "name": player.playerName,
                "country": event.teamId1.abbreviation,
                "role": PLAYER_ROLE_MAP[player.playerRole],
                "benched": False,
                "playerAvatar": BASE_AVATAR_URL + str(
                    player.imagePlayerId) + ".png",
                "matches": total_matches,
                "bowling": {
                    "matches": total_matches,
                    "wickets": player.getWickets(),
                    "economy": player.getEconomy(),
                    "runs_conceeded": player.getRunsConceeded(),
                    "strike_rate": player.getBowlingStrikeRate(),
                    "overs": player.getTotalOvers(),
                    "average": player.getBowlingAverage(),
                },
                "batting": {
                    "matches": total_matches,
                    "runs": player.getTotalRuns(),
                    "strike_rate": player.getBattingStrikeRate(),
                    "average": player.getAverage(),
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }

            country_1_players.append(player_details)

        country_2_players = []
        for player in team2_players_stats:
            batting_innings = player.getBattingInnings()
            not_outs = player.getNotOuts()
            if (batting_innings - not_outs) == 0:
                battingStrength = 0
            else:
                battingStrength = player.getBallsFaced() / (batting_innings - not_outs)
            battingPotential = battingStrength * player.getBattingStrikeRate()
            
            total_matches = player.getTotalMatches()

            player_details = {
                "id": player.playerIPLID,
                "name": player.playerName,
                "country": event.teamId2.abbreviation,
                "role": PLAYER_ROLE_MAP[player.playerRole],
                "benched": False,
                "playerAvatar": BASE_AVATAR_URL + str(
                    player.imagePlayerId) + ".png",
                "matches": total_matches,
                "bowling": {
                    "matches": total_matches,
                    "wickets": player.getWickets(),
                    "economy": player.getEconomy(),
                    "runs_conceeded": player.getRunsConceeded(),
                    "strike_rate": player.getBowlingStrikeRate(),
                    "overs": player.getTotalOvers(),
                    "average": player.getBowlingAverage(),
                },
                "batting": {
                    "matches": total_matches,
                    "runs": player.getTotalRuns(),
                    "strike_rate": player.getBattingStrikeRate(),
                    "average": player.getAverage(),
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }
            country_2_players.append(player_details)
        
        benched_player_team1 = event.BenchPlayersTeam1PlayerId.all()
        benched_player_team2 = event.BenchPlayersTeam2PlayerId.all()

        team1_players_stats = PlayerIPL.objects.filter(playerIPLID__in=benched_player_team1)
        team2_players_stats = PlayerIPL.objects.filter(playerIPLID__in=benched_player_team2)


        country_1_players_benched = []
        for player in team1_players_stats:
            batting_innings = player.getBattingInnings()
            not_outs = player.getNotOuts()
            if (batting_innings - not_outs) == 0:
                battingStrength = 0
            else:
                battingStrength = player.getBallsFaced() / (batting_innings - not_outs)
            battingPotential = battingStrength * player.getBattingStrikeRate()
            
            total_matches = player.getTotalMatches()

            player_details = {
                "id": player.playerIPLID,
                "name": player.playerName,
                "country": event.teamId1.abbreviation,
                "role": player.playerRole,
                "benched": True,
                "playerAvatar": BASE_AVATAR_URL + str(
                    player.imagePlayerId) + ".png",
                "matches": total_matches,
                "bowling": {
                    "matches": total_matches,
                    "wickets": player.getWickets(),
                    "economy": player.getEconomy(),
                    "runs_conceeded": player.getRunsConceeded(),
                    "strike_rate": player.getBowlingStrikeRate(),
                    "overs": player.getTotalOvers(),
                    "average": player.getBowlingAverage(),
                },
                "batting": {
                    "matches": total_matches,
                    "runs": player.getTotalRuns(),
                    "strike_rate": player.getBattingStrikeRate(),
                    "average": player.getAverage(),
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }

            country_1_players_benched.append(player_details)

        country_2_players_benched = []
        for player in team2_players_stats:
            batting_innings = player.getBattingInnings()
            not_outs = player.getNotOuts()
            if (batting_innings - not_outs) == 0:
                battingStrength = 0
            else:
                battingStrength = player.getBallsFaced() / (batting_innings - not_outs)
            battingPotential = battingStrength * player.getBattingStrikeRate()
            
            total_matches = player.getTotalMatches()

            player_details = {
                "id": player.playerIPLID,
                "name": player.playerName,
                "country": event.teamId2.abbreviation,
                "role": player.playerRole,
                "benched": True,
                "playerAvatar": BASE_AVATAR_URL + str(
                    player.imagePlayerId) + ".png",
                "matches": total_matches,
                "bowling": {
                    "matches": total_matches,
                    "wickets": player.getWickets(),
                    "economy": player.getEconomy(),
                    "runs_conceeded": player.getRunsConceeded(),
                    "strike_rate": player.getBowlingStrikeRate(),
                    "overs": player.getTotalOvers(),
                    "average": player.getBowlingAverage(),
                },
                "batting": {
                    "matches": total_matches,
                    "runs": player.getTotalRuns(),
                    "strike_rate": player.getBattingStrikeRate(),
                    "average": player.getAverage(),
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }
            country_2_players_benched.append(player_details)

        response_data = {
            "country_1": order_players(player_list=country_1_players, team_order=team1_order) + country_1_players_benched,
            "country_2": order_players(player_list=country_2_players, team_order=team2_order) + country_2_players_benched,
        }

        data = {
            "status": "success",
            "message": "Players fetched successfully",
            "data": response_data
        }

        return Response(data, status=status.HTTP_200_OK)

    # except Exception as e:
    #     return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class EventDetailView(APIView):
    def handle_exception(self, exc):
        if isinstance(exc, UpcomingEvents.DoesNotExist):
            return Response(
                data={
                    "message": "Event not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        return super().handle_exception(exc)

    def get(self, request, event_id):
        event = UpcomingEvents.objects.get(eventId=event_id)
        event.startDateTime += timedelta(hours=5, minutes=30)
        serializer = UpcomingMatchSerializer(event)

        label = "Match " + str(serializer.data['matchNumber']) if serializer.data['matchNumber'] else "Match 0"

        response_data = {
            "id": serializer.data['eventId'],
            "title": event.title,
            "label": label,
            "location": serializer.data['location'] if serializer.data['location'] != '' else "India",
            "timestamp": serializer.data['startDateTime'],
            "team1": event.teamId1.name,
            "team2": event.teamId2.name
        }

        data = {
            "status": "success",
            "data": response_data
        }

        return Response(status=status.HTTP_200_OK, data=data)


class BenchedPlayersAPIView(APIView):
    def handle_exception(self, exc):
        if isinstance(exc, UpcomingEvents.DoesNotExist):
            return Response(
                data={
                    "message": "Event not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )
        return super().handle_exception(exc)
    
    def get(self, request, event_id):
        event = UpcomingEvents.objects.get(eventId=event_id)
        benched_player_team1 = event.BenchPlayersTeam1PlayerId.all()
        benched_player_team2 = event.BenchPlayersTeam2PlayerId.all()

        team1_players_stats = PlayerStats.objects.filter(playerId__in=benched_player_team1,
                                                         matchFormat=event.matchFormat)
        team2_players_stats = PlayerStats.objects.filter(playerId__in=benched_player_team2,
                                                         matchFormat=event.matchFormat)


        country_1_players = []
        for player in PlayerStatsSerializer(team1_players_stats, many=True).data:
            if (player["innings"] - player["notOuts"]) == 0:
                battingStrength = 0
            else:
                battingStrength = player["ballsFaced"] / (player["innings"] - player["notOuts"])
            battingPotential = battingStrength * player["scoringRate"]

            player_details = {
                "id": player['playerId'],
                "name": Players.objects.get(playerId=player['playerId']).name,
                "country": event.teamId1.abbreviation,
                "role": Players.objects.get(playerId=player['playerId']).playerRole,
                "benched": False,
                "playerAvatar": BASE_AVATAR_URL + str(
                    Players.objects.get(playerId=player['playerId']).iccId) + ".png",
                "matches": player['totalMatches'],
                "bowling": {
                    "matches": player['totalMatches'],
                    "wickets": player['wickets'],
                    "economy": player['bowlingEconomyRate'],
                    "runs_conceeded": player['runsConceded'],
                    "strike_rate": player['bowlingStrikeRate'],
                    "overs": player['overs'],
                    "average": player['bowlingAverage'],
                },
                "batting": {
                    "matches": player['totalMatches'],
                    "runs": player['aggregate'],
                    "strike_rate": player['scoringRate'],
                    "average": player['average'],
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }

            country_1_players.append(player_details)

        country_2_players = []
        for player in PlayerStatsSerializer(team2_players_stats, many=True).data:
            if (player["innings"] - player["notOuts"]) == 0:
                battingStrength = 0
            else:
                battingStrength = player["ballsFaced"] / (player["innings"] - player["notOuts"])
            battingPotential = battingStrength * player["scoringRate"]

            player_details = {
                "id": player['playerId'],
                "name": Players.objects.get(playerId=player['playerId']).name,
                "country": event.teamId2.abbreviation,
                "role": Players.objects.get(playerId=player['playerId']).playerRole,
                "benched": False,
                "playerAvatar": BASE_AVATAR_URL + str(
                    Players.objects.get(playerId=player['playerId']).iccId) + ".png",
                "matches": player['totalMatches'],
                "bowling": {
                    "matches": player['totalMatches'],
                    "wickets": player['wickets'],
                    "economy": player['bowlingEconomyRate'],
                    "runs_conceeded": player['runsConceded'],
                    "strike_rate": player['bowlingStrikeRate'],
                    "overs": player['overs'],
                    "average": player['bowlingAverage'],
                },
                "batting": {
                    "matches": player['totalMatches'],
                    "runs": player['aggregate'],
                    "strike_rate": player['scoringRate'],
                    "average": player['average'],
                    "potential": battingPotential,
                    "strength": battingPotential
                }
            }
            country_2_players.append(player_details)

        response_data = {
            "country_1_benched": country_1_players,
            "country_2_benched": country_2_players,
        }

        data = {
            "status": "success",
            "message": "Players fetched successfully",
            "data": response_data
        }

        return Response(data, status=status.HTTP_200_OK)



