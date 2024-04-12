from django.db import models
from crons.update_player_stats import update_player_stat_in_db
from crons.create_upcoming_match import update_upcoming_events


class UpdatePlayerStats(models.Model):
    class Meta:
        db_table = 'UpdatePlayerStats'
        verbose_name_plural = 'UpdatePlayerStats'

    FORMAT_CHOICES = [
        ('ODI', 'ODI'),
        ('TEST', 'TEST'),
        ('T20', 'T20'),
        ('ALL', 'ALL')
    ]

    id = models.AutoField(primary_key=True)
    iccId = models.IntegerField(null=True, blank=True)
    howstatId = models.IntegerField(null=True, blank=True)
    matchFormat = models.CharField(max_length=20, choices=FORMAT_CHOICES, default='ALL')
    lastUpdated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.iccId} - {self.howstatId} - {self.matchFormat}'

    def save(self, *args, **kwargs):
        if self.howstatId is None:
            raise ValueError("player's howstatId must be set")
        else:
            if self.matchFormat == 'ALL':
                update_player_stat_in_db(self.howstatId, ['ODI', 'TEST', 'T20'])
            else:
                update_player_stat_in_db(self.howstatId, [self.matchFormat]),
        return super(UpdatePlayerStats, self).save(*args, **kwargs)


class UpdateUpcomingEvents(models.Model):
    class Meta:
        db_table = 'UpdateUpcomingEvents'
        verbose_name_plural = 'UpdateUpcomingEvents'

    ICC = 'ICC'
    IPL = 'IPL'
    MATCH_TYPE_CHOICES = [
        (ICC, 'ICC'),
        (IPL, 'IPL'),
    ]

    ODI = 'ODI'
    TEST = 'TEST'
    T20 = 'T20'
    MATCH_FORMAT_CHOICES = [
        (ODI, 'ODI'),
        (TEST, 'TEST'),
        (T20, 'T20'),
    ]

    SERIES = 'SERIES'
    MATCH = 'MATCH'
    EVENT_TYPE_CHOICES = [
        (SERIES, 'Series'),
        (MATCH, 'Match'),
    ]

    id = models.AutoField(primary_key=True)
    matchUrl = models.CharField(max_length=255)
    lastUpdated = models.DateTimeField(auto_now=True)
    matchType = models.CharField(max_length=255, choices=MATCH_TYPE_CHOICES, default='ICC')
    matchFormat = models.CharField(max_length=255, choices=MATCH_FORMAT_CHOICES)
    matchNumber = models.IntegerField(null=True, blank=True)
    eventType = models.CharField(max_length=255, choices=EVENT_TYPE_CHOICES, default='Match')

    def __str__(self):
        return f'{self.lastUpdated}'

    def save(self, *args, **kwargs):
        update_upcoming_events(match_url=self.matchUrl, match_type=self.matchType, match_format=self.matchFormat,
                               event_type=self.eventType, match_number=self.matchNumber)
        return super(UpdateUpcomingEvents, self).save(*args, **kwargs)
