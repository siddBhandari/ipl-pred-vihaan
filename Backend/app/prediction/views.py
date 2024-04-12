from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import MatchPredictionResultAdmin, MatchPredictionResult
from players.models import UpcomingEvents
from django.core.exceptions import ObjectDoesNotExist
import json


def order_players(team_result, team_order):
    if team_order == "":
        return team_result
    order_ids = [int(id_) for id_ in team_order.split(',')]
    team_result['batting_stats'] = sorted(team_result['batting_stats'], key=lambda x: order_ids.index(x['id']))
    team_result['bowling_stats'] = sorted(team_result['bowling_stats'], key=lambda x: order_ids.index(x['id']))
    return team_result


class EventPredictionView(APIView):

    def handle_exception(self, exc):
        if isinstance(exc, ObjectDoesNotExist):
            return Response({"error": str(exc)}, status=status.HTTP_404_NOT_FOUND)
        # if isinstance(exc, ValueError):
        #     return Response({"error": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return super().handle_exception(exc)

    def get(self, request):

        eventId = request.GET.get('eventId', None)
        team1 = request.GET.get('team1', None)
        team2 = request.GET.get('team2', None)

        if (eventId is None) or (team1 is None) or (team2 is None):
            raise ValueError("eventId, team1, team2 must be set")

        event = UpcomingEvents.objects.get(eventId=eventId)

        resultAdmin = MatchPredictionResultAdmin(eventId=event, team1=team1, team2=team2)

        resultAdmin.save()

        result = MatchPredictionResult.objects.get(triggerId=resultAdmin.triggerId)

        resultTeam1Json = result.predictionJsonTeam1
        resultTeam1Json["id"] = result.team1.teamId
        resultTeam1Json["name"] = result.team1.name
        resultTeam1Json["logo"] = result.team1.flagURL

        resultTeam2Json = result.predictionJsonTeam2
        resultTeam2Json["id"] = result.team2.teamId
        resultTeam2Json["name"] = result.team2.name
        resultTeam2Json["logo"] = result.team2.flagURL

        responseData = {
            "id": result.resultId,
            "title": result.team1.name + ' vs ' + result.team2.name,
            "result": {
                "status": "win",
                "winner": result.winner.name,
                "percentage": result.winPercentage if result.winPercentage != -1 else 60
            },
            "matrix": {
                "c1_min_c2_min": 54,
                "c1_min_c2_max": 50,
                "c1_max_c2_min": 73,
                "c1_max_c2_max": 97
            },
            "country_1": order_players(team_result=resultTeam1Json, team_order=event.playerOrderTeam1),
            "country_2": order_players(team_result=resultTeam2Json, team_order=event.playerOrderTeam2),
        }

        resultAdmin.save()

        return Response(
            {"status": "success", "message": "Event Prediction fetched successfully.", "data": responseData})


class CustomTeamEventPredictionView(APIView):

    def handle_exception(self, exc):
        if isinstance(exc, ObjectDoesNotExist):
            return Response({"error": str(exc)}, status=status.HTTP_404_NOT_FOUND)
        if isinstance(exc, ValueError):
            return Response({"error": str(exc)}, status=status.HTTP_400_BAD_REQUEST)
        return super().handle_exception(exc)

    def post(self, request, eventId):

        request_body = json.loads(request.body)
        team1 = request_body.get('team_1_abb', None)
        team2 = request_body.get('team_2_abb', None)
        team_1_players = request_body.get('team_1_player_ids', None)
        team_2_players = request_body.get('team_2_player_ids', None)

        if (eventId is None) or (team1 is None) or (team2 is None):
            raise ValueError("eventId, team1, team2 must be set")

        event = UpcomingEvents.objects.get(eventId=eventId)

        resultAdmin = MatchPredictionResultAdmin(eventId=event, team1=team1, team2=team2)

        resultAdmin.save(custom_team_1_id_list=team_1_players, custom_team_2_id_list=team_2_players)

        result = MatchPredictionResult.objects.get(triggerId=resultAdmin.triggerId)

        resultTeam1Json = result.predictionJsonTeam1
        resultTeam1Json["id"] = result.team1.teamId
        resultTeam1Json["name"] = result.team1.name
        resultTeam1Json["logo"] = result.team1.flagURL

        resultTeam2Json = result.predictionJsonTeam2
        resultTeam2Json["id"] = result.team2.teamId
        resultTeam2Json["name"] = result.team2.name
        resultTeam2Json["logo"] = result.team2.flagURL

        responseData = {
            "id": result.resultId,
            "title": result.team1.name + ' vs ' + result.team2.name,
            "result": {
                "status": "win",
                "winner": result.winner.name,
                "percentage": result.winPercentage if result.winPercentage != -1 else 60
            },
            "matrix": {
                "c1_min_c2_min": 54,
                "c1_min_c2_max": 50,
                "c1_max_c2_min": 73,
                "c1_max_c2_max": 97
            },
            "country_1": order_players(resultTeam1Json, ','.join(str(e) for e in team_1_players)),
            "country_2": order_players(resultTeam2Json, ','.join(str(e) for e in team_2_players)),

        }

        resultAdmin.save()

        return Response(
            {"status": "success", "message": "Event Prediction fetched successfully.", "data": responseData})
