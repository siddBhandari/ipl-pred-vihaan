from django.contrib import admin

from prediction.models import MatchPredictionResult, MatchPredictionResultAdmin


# Register your models here.
@admin.register(MatchPredictionResult)
class MatchPredictionAdmin(admin.ModelAdmin):
    list_display = ('resultId', 'eventId', 'team1', 'team2', 'winner', 'winPercentage', 'winPercentageTeam1',
                    'winPercentageTeam2', 'predictionJsonTeam1', 'predictionJsonTeam2')
    list_filter = ('resultId', 'eventId', 'team1', 'team2', 'winner', 'winPercentage', 'winPercentageTeam1',
                   'winPercentageTeam2', 'predictionJsonTeam1', 'predictionJsonTeam2')
    search_fields = ('resultId', 'eventId', 'team1', 'team2', 'winner', 'winPercentage', 'winPercentageTeam1',
                     'winPercentageTeam2', 'predictionJsonTeam1', 'predictionJsonTeam2')
    ordering = ('resultId', 'eventId', 'team1', 'team2', 'winner', 'winPercentage', 'winPercentageTeam1',
                'winPercentageTeam2', 'predictionJsonTeam1', 'predictionJsonTeam2')


@admin.register(MatchPredictionResultAdmin)
class TriggerMatchPredictionResultAdmin(admin.ModelAdmin):
    list_display = ('eventId', 'team1', 'team2')
    list_filter = ('eventId', 'team1', 'team2')
    search_fields = ('eventId', 'team1', 'team2')
    ordering = ('eventId', 'team1', 'team2')