from django.db import models
from players.models import UpcomingEvents
from players.models import Teams, PlayerIPL

from prediction.predict import PredictMatchResult


class MatchPredictionResult(models.Model):
    class Meta:
        db_table = 'MatchPredictionResult'
        verbose_name_plural = 'Match Prediction Results'

    resultId = models.AutoField(primary_key=True)
    eventId = models.ForeignKey(UpcomingEvents, on_delete=models.CASCADE)
    triggerId = models.ForeignKey('MatchPredictionResultAdmin', on_delete=models.CASCADE, null=True)
    team1 = models.ForeignKey(Teams, related_name='team_1', on_delete=models.CASCADE)
    team2 = models.ForeignKey(Teams, related_name='team_2', on_delete=models.CASCADE)
    winner = models.ForeignKey(Teams, related_name='winner', on_delete=models.CASCADE)
    winPercentage = models.FloatField(default=-1)
    winPercentageTeam1 = models.FloatField(default=-1)
    winPercentageTeam2 = models.FloatField(default=-1)
    predictionJsonTeam1 = models.JSONField()
    predictionJsonTeam2 = models.JSONField()


class MatchPredictionResultAdmin(models.Model):
    class Meta:
        db_table = 'MatchPredictionTriggerAdmin'
        verbose_name_plural = 'Trigger Match Prediction'

    TEAM_CHOICE = [
        ('MI', 'Mumbai Indians'),
        ('RR', 'Rajasthan Royals'),
        ('RCB', 'Royal Challengers Bangalore'),
        ('DC', 'Delhi Capitals'),
        ('SRH', 'Sun Risers Hyderabad'),
        ('PBKS', 'Punjab Kings'),
        ('GT', 'Gujrat Titans'),
        ('LSG', 'Lucknow Super Giants'),
        ('KKR', 'Kolkata Knight Riders'),
        ('CSK', 'Chennai Super Kings'),
    ]

    triggerId = models.AutoField(primary_key=True)
    eventId = models.ForeignKey(UpcomingEvents, on_delete=models.CASCADE)
    team1 = models.CharField(max_length=255, choices=TEAM_CHOICE)
    team2 = models.CharField(max_length=255, choices=TEAM_CHOICE)

    def save(self, custom_team_1_id_list=None, custom_team_2_id_list=None, *args, **kwargs, ):
        if self.eventId is None:
            raise ValueError("eventId must be set")
        else:
            event = UpcomingEvents.objects.get(eventId=self.eventId.eventId) # eventId is actually event object
            trigger_match_prediction = PredictMatchResult(event_id=self.eventId, team1_abbr=self.team1, team2_abbr=self.team2)

            if custom_team_1_id_list is not None and custom_team_2_id_list is not None:
                # todo: Change the logic to use PlayerIPL Model
                custom_team_1_stats = PlayerIPL.objects.filter(playerIPLID__in=custom_team_1_id_list)
                custom_team_2_stats = PlayerIPL.objects.filter(playerIPLID__in=custom_team_2_id_list)
                result = trigger_match_prediction.get_match_result(team1_players_stats = custom_team_1_stats, team2_players_stats = custom_team_2_stats)
            else:
                result = trigger_match_prediction.get_match_result()

            print(f"result: {result}")


            # for player in result[1]['batting_stats'] + result[1]['bowling_stats'] + result[2]['batting_stats'] + result[2]['bowling_stats']:
            #     player['name'] = player['id'].playerName
            #     player['id'] = player['id'].playerIPLID

            super(MatchPredictionResultAdmin, self).save(*args, **kwargs) # moved here since we need trigger id to be set before saving MatchPredictionResult
            try:
                # prediction = MatchPredictionResult.objects.get(eventId=self.eventId)
                prediction = MatchPredictionResult.objects.get(triggerId=self.triggerId)
                prediction.winner = Teams.objects.get(abbreviation=result[0])
                prediction.predictionJsonTeam1 = result[1]
                prediction.predictionJsonTeam2 = result[2]
            except Exception as e:
                print(e)
                prediction = MatchPredictionResult(
                    eventId=self.eventId,
                    team1=Teams.objects.get(abbreviation=self.team1),
                    team2=Teams.objects.get(abbreviation=self.team2),
                    winner=Teams.objects.get(abbreviation=result[0]),
                    predictionJsonTeam1=result[1],
                    predictionJsonTeam2=result[2],
                    triggerId=self # self is MatchPredictionResultAdmin object
                    )
            try:
                prediction.save()
                print('(89, models.py) predicton saved')
            except Exception as e:
                print("Prediction Saving Failed :(")
                print(e)
