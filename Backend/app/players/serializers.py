from rest_framework import serializers
from .models import Players, Teams, ICCRanking, UpcomingEvents, PlayerStats


class PlayersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Players
        fields = '__all__'


class TeamsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teams
        fields = '__all__'


class ICCRankingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ICCRanking
        fields = '__all__'


class UpcomingEventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvents
        fields = '__all__'


class PlayerStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlayerStats
        fields = '__all__'


from rest_framework import serializers


class BattingStatsSerializer(serializers.Serializer):
    matches = serializers.IntegerField()
    runs = serializers.IntegerField()
    strike_rate = serializers.FloatField()
    average = serializers.FloatField()
    potential = serializers.FloatField()
    strength = serializers.FloatField()


class BowlingStatsSerializer(serializers.Serializer):
    matches = serializers.IntegerField()
    wickets = serializers.IntegerField()
    economy = serializers.FloatField()
    average = serializers.FloatField()
    runs_conceded = serializers.FloatField()
    strike_rate = serializers.FloatField()
    overs = serializers.FloatField()


class AllrounderStatsSerializer(serializers.Serializer):
    matches = serializers.IntegerField()
    runs = serializers.IntegerField()
    wickets = serializers.IntegerField()
    batting_average = serializers.FloatField()
    bowling_strike_rate = serializers.FloatField()
    economy = serializers.FloatField()
    batting_strike_rate = serializers.FloatField()


class PlayerSerializer(serializers.ModelSerializer):
    # id = serializers.IntegerField()
    # name = serializers.CharField()
    # country = serializers.CharField()
    # role = serializers.CharField()
    # playerAvatar = serializers.URLField()
    # batting = BattingStatsSerializer(required=False)
    # bowling = BowlingStatsSerializer(required=False)
    # allrounder = AllrounderStatsSerializer(required=False)
    class Meta:
        model = Players
        fields = '__all__'

class UpcomingMatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingEvents
        fields = '__all__'