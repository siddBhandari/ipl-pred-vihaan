from django.contrib import admin

from .models import PlayerStats, Players, Teams, ICCRanking, UpcomingEvents, PlayerIPL


@admin.register(PlayerStats)
class PlayerStatsAdmin(admin.ModelAdmin):
    list_display = (
        'playerId', 'matchFormat', 'totalMatches', 'innings', 'notOuts', 'aggregate', 'highestScore', 'average', 'fiftys',
        'hundreds', 'ducks', 'fours', 'sixes', 'scoringRate', 'overs', 'runsConceded', 'wickets', 'bowlingAverage',
        'bowlingAverage', 'bowlingEconomyRate', 'bowlingStrikeRate')


@admin.register(Teams)
class TeamsAdmin(admin.ModelAdmin):
    list_display = ('teamId', 'teamCategory', 'name', 'flagURL', 'abbreviation')


@admin.register(ICCRanking)
class ICCRankingAdmin(admin.ModelAdmin):
    list_display = ('id', 'matchFormat', 'playerId', 'lastUpdated', 'role', 'rank', 'rating')


@admin.register(UpcomingEvents)
class UpcomingEventsAdmin(admin.ModelAdmin):
    list_display = ('eventId', 'matchType', 'matchFormat', 'matchNumber', 'eventType', 'title', 'startDateTime', 'endDate', 'location',
                    'teamId1', 'teamId2', 'get_playing11_team1', 'get_playing11_team2')

    def get_playing11_team1(self, obj):
        return "\n".join([p.playerName for p in obj.Playing11Team1PlayerId.all()])

    def get_playing11_team2(self, obj):
        return "\n".join([p.playerName for p in obj.Playing11Team2PlayerId.all()])


@admin.register(Players)
class PlayersAdmin(admin.ModelAdmin):
    list_display = ('playerId', 'name', 'age', 'avatarURL', 'country', 'iccId', 'howstatId')

@admin.register(PlayerIPL)
class PlayerIPLAdmin(admin.ModelAdmin):
    list_display = ('playerName', 'playerTeamCode', 'clientPlayerId')