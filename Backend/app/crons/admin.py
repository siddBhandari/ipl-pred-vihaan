from django.contrib import admin
from .models import UpdatePlayerStats, UpdateUpcomingEvents


@admin.register(UpdatePlayerStats)
class UpdatePlayerStatsAdmin(admin.ModelAdmin):
    list_display = ('iccId', 'howstatId', 'matchFormat', 'lastUpdated')


@admin.register(UpdateUpcomingEvents)
class UpdateUpcomingEventsAdmin(admin.ModelAdmin):
    list_display = ('matchUrl', 'lastUpdated', 'matchType', 'matchFormat', 'eventType')


