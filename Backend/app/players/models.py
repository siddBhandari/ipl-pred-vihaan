from django.db import models
import requests
from django.db.models import Func
import json

class Similarity(Func):
    function = 'SIMILARITY'

class Players(models.Model):
    class Meta:
        db_table = 'Players'
        verbose_name_plural = 'Players'

    playerId = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=255)
    age = models.IntegerField(null=True, blank=True)
    avatarURL = models.URLField(max_length=255, null=True, blank=True)
    COUNTRY_CHOICES = [
        ('IND', 'India'),
        ('AUS', 'Australia'),
        ('ENG', 'England'),
        ('NZ', 'New Zealand'),
        ('SA', 'South Africa'),
        ('WI', 'West Indies'),
        ('PAK', 'Pakistan'),
        ('SL', 'Sri Lanka'),
        ('BAN', 'Bangladesh'),
        ('AFG', 'Afghanistan'),
        ('NED', 'Netherlands'),
    ]
    PLAYER_ROLE_CHOICES = [
        ('Batsman', 'Batsman'),
        ('Bowler', 'Bowler'),
        ('All Rounder', 'All Rounder'),
        ('Unknown', 'Unknown'),
    ]
    TEAM_ROLE_CHOICES = [
        ('Captain', 'Captain'),
        ('Wicket Keeper', 'Wicket Keeper'),
        ('None', 'None'),
    ]
    playerRole = models.CharField(max_length=255, choices=PLAYER_ROLE_CHOICES, default='Unknown')
    teamRole = models.CharField(max_length=255, choices=TEAM_ROLE_CHOICES, default='None')
    country = models.CharField(max_length=255, choices=COUNTRY_CHOICES)
    iccId = models.IntegerField(null=True, blank=True)
    howstatId = models.IntegerField(unique=True)  # NEED TO BE MADE UNIQUE LATER....

    def __str__(self):
        return self.name


class Teams(models.Model):
    class Meta:
        db_table = 'Teams'
        verbose_name_plural = 'Teams'

    ICC = 'ICC'
    IPL = 'IPL'
    TEAM_CATEGORY_CHOICES = [
        (ICC, 'ICC'),
        (IPL, 'IPL'),
    ]

    teamId = models.AutoField(primary_key=True)
    teamCategory = models.CharField(max_length=255, choices=TEAM_CATEGORY_CHOICES, default=ICC)
    name = models.CharField(max_length=255)
    flagURL = models.CharField(max_length=255)
    abbreviation = models.CharField(max_length=10)

    def __str__(self):
        return self.name


class ICCRanking(models.Model):
    class Meta:
        db_table = 'ICCRanking'
        verbose_name_plural = 'ICC Rankings'
        unique_together = (('playerId', 'matchFormat', 'role'))

    BOWLER = 'Bowler'
    BATSMAN = 'Batsman'
    ALLROUNDER = 'All Rounder'
    ROLE_CHOICES = [
        (BOWLER, 'Bowling'),
        (BATSMAN, 'Batting'),
        (ALLROUNDER, 'All Rounder'),
    ]

    MATCH_FORMAT_CHOICES = [
        ('ODI', 'ODI'),
        ('TEST', 'TEST'),
        ('T20', 'T20'),
    ]

    id = models.AutoField(primary_key=True)
    matchFormat = models.CharField(max_length=20, choices=MATCH_FORMAT_CHOICES)
    playerId = models.ForeignKey(Players, on_delete=models.CASCADE)
    lastUpdated = models.DateTimeField(auto_now=True)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    rank = models.IntegerField()
    rating = models.IntegerField()

    def __str__(self):
        return f'{self.playerId.name} - {self.matchFormat} - {self.role} Rank: {self.rank}'


class PlayerStats(models.Model):
    class Meta:
        db_table = 'PlayerStats'
        verbose_name_plural = 'Player Stats'
        unique_together = (('playerId', 'matchFormat'))

    ODI = 'ODI'
    T20 = 'T20'
    TEST = 'TEST'
    MATCH_TYPE_CHOICES = [
        (ODI, 'ODI'),
        (T20, 'T20'),
        (TEST, 'TEST'),
    ]

    statsId = models.AutoField(primary_key=True)
    playerId = models.ForeignKey(Players, on_delete=models.CASCADE)
    matchFormat = models.CharField(max_length=4, choices=MATCH_TYPE_CHOICES)
    totalMatches = models.IntegerField(default=-1)
    innings = models.IntegerField(default=-1)
    notOuts = models.IntegerField(default=-1)
    aggregate = models.FloatField(default=-1.0)
    highestScore = models.CharField(max_length=255)
    average = models.FloatField(default=-1.0)
    fiftys = models.IntegerField(default=-1)
    hundreds = models.IntegerField(default=-1)
    ducks = models.IntegerField(default=-1)
    fours = models.IntegerField(default=-1)
    sixes = models.IntegerField(default=-1)
    scoringRate = models.FloatField(default=-1.0)
    ballsFaced = models.IntegerField(default=-1)
    overs = models.FloatField(default=-1.0)
    runsConceded = models.IntegerField(default=-1)
    wickets = models.IntegerField(default=-1)
    bowlingAverage = models.FloatField(default=-1.0)
    bowlingEconomyRate = models.FloatField(default=-1.0)
    bowlingStrikeRate = models.FloatField(default=-1.0)

    def __str__(self):
        return f'{self.playerId} - {self.matchFormat}'
    
class PlayerIPL(models.Model):
    IPL_MAP = [
    ("PBKS", "PBKS"),
    ("DC", "DC"),
    ("KKR", "KKR"),
    ("SRH", "SRH"),
    ("CSK", "CSK"),
    ("RCB", "RCB"),
    ("RR", "RR"),
    ("LSG", "LSG"),
    ("GT", "GT"),
    ("MI", "MI")
    ]
    
    ROLE_MAP = [
    ("BOWLER", "BOWLER"),
    ("BATSMAN", "BATSMAN"),
    ("ALLROUNDER", "ALLROUNDER")
    ]
    # playerRole, currentTeam # stick to playerStats names
    # batsman stats required: ballsFaced, innings, notOuts, strikerate, aggregate,
    # bowling stats required: economy, bowlingStrikeRate, totalOvers, totalMatches
    class Meta:
        db_table = 'PlayerIPL'
        verbose_name_plural = 'Player IPL'
    playerName = models.TextField()
    playerTeamCode = models.TextField(choices=IPL_MAP)
    playerIPLID = models.AutoField(primary_key=True)
    playerRole = models.TextField(choices=ROLE_MAP, default='ALLROUNDER')
    clientPlayerId = models.IntegerField(null=False) # ipl website id
    imagePlayerId = models.IntegerField(null=True)
    
    battingMatchesPlayedPrev = models.IntegerField(null=True)
    battingInningsPlayedPrev = models.IntegerField(null=True)
    notOutPrev = models.IntegerField(null=True)
    runsPrev= models.IntegerField(null=True)
    highScorePrev = models.IntegerField(null=True)
    averagePrev = models.IntegerField(null=True)
    ballsFacedPrev = models.IntegerField(null=True)
    strikeRatePrev = models.IntegerField(null=True)
    
    bowlingMatchesPlayedPrev = models.IntegerField(null=True)
    bowlingInningsPlayedPrev = models.IntegerField(null=True)
    oversBowledPrev = models.IntegerField(null=True)
    runsConceededPrev = models.IntegerField(null=True)
    wicketsPrev = models.IntegerField(null=True)
    bowlingAveragePrev = models.IntegerField(null=True)
    economyPrev = models.IntegerField(null=True)
    bowlingStrikeRatePrev = models.IntegerField(null=True)
    
    battingMatchesPlayedCur = models.IntegerField(null=True)
    battingInningsPlayedCur = models.IntegerField(null=True)
    notOutCur = models.IntegerField(null=True)
    runsCur= models.IntegerField(null=True)
    highScoreCur = models.IntegerField(null=True)
    averageCur = models.IntegerField(null=True)
    ballsFacedCur = models.IntegerField(null=True)
    strikeRateCur = models.IntegerField(null=True)
    
    bowlingMatchesPlayedCur = models.IntegerField(null=True)
    bowlingInningsPlayedCur = models.IntegerField(null=True)
    oversBowledCur = models.IntegerField(null=True)
    runsConceededCur = models.IntegerField(null=True)
    wicketsCur = models.IntegerField(null=True)
    bowlingAverageCur = models.FloatField(null=True)
    economyCur = models.FloatField(null=True)
    bowlingStrikeRateCur = models.FloatField(null=True)
    
    # todo: Handling PlayerRole (I may need to scrap/get data from  https://www.iplt20.com/teams/mumbai-indians for role field)
    
    def getBattingStrikeRate(self):
        sr_prev = self.strikeRatePrev if self.strikeRatePrev else 0
        sr_cur = self.strikeRateCur if self.strikeRateCur else 0
        print("self.playerName, sr_cur, sr_prev")
        print(self.playerName, sr_cur, sr_prev)
        ans = (sr_prev + sr_cur) / (sr_prev != 0 + sr_cur != 0) if (sr_prev != 0 + sr_cur != 0) != 0 else 0
        print("getBattingStrikeRate",ans)
        return ans
    
    def getBallsFaced(self):
        balls_faced_cur = self.ballsFacedCur if self.ballsFacedCur else 0
        balls_faced_prev = self.ballsFacedPrev if self.ballsFacedPrev else 0
        return (balls_faced_cur + balls_faced_prev) 

    def getBattingInnings(self):
        batting_innings_cur = self.battingInningsPlayedCur if self.battingInningsPlayedCur is not None else 0
        batting_innings_prev = self.battingInningsPlayedPrev if self.battingInningsPlayedPrev is not None else 0
        return batting_innings_cur + batting_innings_prev

    def getNotOuts(self):
        no_cur = self.notOutCur if self.notOutCur is not None else 0
        no_prev = self.notOutPrev if self.notOutPrev is not None else 0
        return no_cur + no_prev

    def getAggregate(self):
        runs_cur = self.runsCur if self.runsCur is not None else 0
        runs_prev = self.runsPrev if self.runsPrev is not None else 0
        return runs_cur + runs_prev

    def getEconomy(self):
        economy_cur = self.economyCur if self.economyCur is not None else 0
        economy_prev = self.economyPrev if self.economyPrev is not None else 0
        if ((economy_cur != 0) + (economy_prev != 0)) == 0: return 100
        return (economy_cur + economy_prev) / ((economy_cur != 0) + (economy_prev != 0)) 

    def getBowlingStrikeRate(self):
        bowling_strike_rate_cur = self.bowlingStrikeRateCur if self.bowlingStrikeRateCur is not None else 0
        bowling_strike_rate_prev = self.bowlingStrikeRatePrev if self.bowlingStrikeRatePrev is not None else 0
        if bowling_strike_rate_cur + bowling_strike_rate_prev == 0:
            return 100 
        return (bowling_strike_rate_cur + bowling_strike_rate_prev) / 2

    def getTotalOvers(self):
        overs_bowled_cur = self.oversBowledCur if self.oversBowledCur is not None else 0
        overs_bowled_prev = self.oversBowledPrev if self.oversBowledPrev is not None else 0
        return overs_bowled_cur + overs_bowled_prev
    
    def getBowlingInnings(self):
        bowling_innings_played_cur = self.bowlingInningsPlayedCur if self.bowlingInningsPlayedCur is not None else 0
        bowling_innings_played_prev = self.bowlingInningsPlayedPrev if self.bowlingInningsPlayedPrev is not None else 0
        return bowling_innings_played_cur + bowling_innings_played_prev
        
    def getTotalMatches(self): 
        bowling_matches_played_cur = self.bowlingMatchesPlayedCur if self.bowlingMatchesPlayedCur is not None else 0
        bowling_matches_played_prev = self.bowlingMatchesPlayedPrev if self.bowlingMatchesPlayedPrev is not None else 0
        return bowling_matches_played_cur + bowling_matches_played_prev
    
    def getAverage(self):
        average_cur = self.averageCur if self.averageCur else 0
        average_prev = self.averagePrev if self.averagePrev else 0
        return (average_cur + average_prev) / ((average_cur == 0) + (average_prev == 0)) if (average_cur == 0) + (average_prev == 0) != 0 else 0
    
    def getWickets(self):
        w_cur = self.wicketsCur if self.wicketsCur else 0
        w_prev = self.wicketsPrev if self.wicketsPrev else 0
        return w_cur + w_prev
    
    def getRunsConceeded(self):
        rc_cur = self.runsConceededCur if self.runsConceededCur else 0
        rc_prev = self.runsConceededPrev if self.runsConceededPrev else 0
        return rc_cur + rc_prev
    
    def getTotalRuns(self):
        tr_cur = self.runsCur if self.runsCur else 0
        tr_prev = self.runsPrev if self.runsPrev else 0
        return tr_cur + tr_prev
    
    def getBowlingAverage(self):
        ba_cur = self.bowlingAverageCur if self.bowlingAverageCur else 0
        ba_prev = self.bowlingAveragePrev if self.bowlingAveragePrev else 0
        if (ba_cur != 0 + ba_prev != 0) == 0:
            return 100
        return (ba_cur + ba_prev) / (ba_cur != 0 + ba_prev != 0)
        
    def getRequestObject(self):
        api_url = f"https://scores.iplt20.com/ipl/feeds/stats/player/{self.clientPlayerId}-playerstats.js?onPlayerStats=_jqjsp&_1712065588431="
        response = requests.get(api_url)
        return response
    
    def updateImageId(self):
        if self.clientPlayerId <= 0:
            print('Error Updating data: Client Player id not available')
            return
        
        api_url = f"https://scores.iplt20.com/ipl/feeds/stats/player/{self.clientPlayerId}-playerstats.js?onPlayerStats=_jqjsp&_1712065588431="
        response = requests.get(api_url)
        
        if response.status_code == 200:
            data = json.loads(str(response.content)[16:-3])
            
            if len(data['Batting']) + len(data['Bowling']) == 0:
                print('Error: No Data for image id')
                return
            
            stats = data['Batting'] if ('Batting' in data) and (len(data['Batting']) != 0) else data['Bowling']
            
            self.imagePlayerId = stats[0]['PlayerId'] if stats[0]['PlayerId'] and stats[0]['PlayerId'] != '' else -1
            self.save()
            print('updated image id for', self.playerName)
        else:
            print('Error Updating data: response code:', response.status_code)

    def updateFromApi(self):
        api_url = f"https://scores.iplt20.com/ipl/feeds/stats/player/{self.clientPlayerId}-playerstats.js?onPlayerStats=_jqjsp&_1712065588431="
        response = requests.get(api_url)
        
        if response.status_code == 200:
            data = json.loads(str(response.content)[16:-3])
            batting_data = [player for player in data['Batting'] if player['Year'] == '2024']
            bowling_data = [player for player in data['Bowling'] if player['Year'] == '2024']
            if batting_data and bowling_data:
                print(batting_data, bowling_data)
                batting_stats = batting_data[0]
                bowling_stats = bowling_data[0]
                # player, created = self.objects.get_or_create(playerID=playerID)
                self.playerName = batting_stats['PlayerName'] if batting_stats['PlayerName'] else None
                self.battingMatchesPlayedCur = int(batting_stats['Matches']) if batting_stats['Matches'] else None
                self.battingInningsPlayedCur = int(batting_stats['Innings']) if batting_stats['Innings'] else None
                self.notOutCur = int(batting_stats['NotOuts']) if batting_stats['NotOuts'] else None
                self.runsCur = int(batting_stats['Runs']) if batting_stats['Runs'] else None
                high_score = batting_stats['HighestScore']
                self.highScoreCur = int(high_score.rstrip('*')) if high_score else None
                self.averageCur = float(batting_stats['BattingAvg']) if batting_stats['BattingAvg'] else None
                self.ballsFacedCur = int(batting_stats['Balls']) if batting_stats['Balls'] else None
                self.strikeRateCur = float(batting_stats['StrikeRate']) if batting_stats['StrikeRate'] else None
                self.bowlingMatchesPlayedCur = int(bowling_stats['Matches']) if bowling_stats['Matches'] else None
                self.bowlingInningsPlayedCur = int(bowling_stats['Innings']) if bowling_stats['Innings'] else None
                self.oversBowledCur = float(bowling_stats['Overs']) if bowling_stats['Overs'] else None
                self.runsConceededCur = int(bowling_stats['Runs']) if bowling_stats['Runs'] else None
                self.wicketsCur = int(bowling_stats['Wickets']) if bowling_stats['Wickets'] else None
                self.bowlingAverageCur = float(bowling_stats['Average']) if bowling_stats['Average'] else None
                self.economyCur = float(bowling_stats['Econ']) if bowling_stats['Econ'] else None
                self.bowlingStrikeRateCur = float(bowling_stats['StrikeRate']) if bowling_stats['StrikeRate'] else None
                self.playerTeamCode = batting_stats['TeamShortName']
                self.imagePlayerId = batting_stats['PlayerId'] if batting_stats['PlayerId'] and batting_stats['PlayerId'] != '' else -1
                self.save()
                print(self.playerName, 'Updated :)')
                return True
        else:
            print(self.playerName, 'Failed to update:(')
            raise ValueError("utkarsh gaandu hai")
        
        
class UpcomingEvents(models.Model):
    class Meta:
        db_table = 'UpcomingEvents'
        verbose_name_plural = 'Upcoming Events'

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

    eventId = models.AutoField(primary_key=True)
    matchType = models.CharField(max_length=255, choices=MATCH_TYPE_CHOICES, default='ICC')
    matchFormat = models.CharField(max_length=255, choices=MATCH_FORMAT_CHOICES)
    matchNumber = models.IntegerField(null=True, blank=True)
    eventType = models.CharField(max_length=255, choices=EVENT_TYPE_CHOICES, default='Match')
    title = models.CharField(max_length=255)
    startDateTime = models.DateTimeField()
    endDate = models.DateField(null=True, blank=True)
    MatchUrl = models.URLField(max_length=255, null=True, blank=True)
    location = models.CharField(max_length=255)
    cover = models.URLField(max_length=255, null=True, blank=True)
    teamId1 = models.ForeignKey(Teams, related_name='team1', on_delete=models.CASCADE)
    teamId2 = models.ForeignKey(Teams, related_name='team2', on_delete=models.CASCADE)
    Playing11Team1PlayerId = models.ManyToManyField(PlayerIPL, related_name='playing11_team1')
    Playing11Team2PlayerId = models.ManyToManyField(PlayerIPL, related_name='playing11_team2')
    BenchPlayersTeam1PlayerId = models.ManyToManyField(PlayerIPL, related_name='bench_players_team1')
    BenchPlayersTeam2PlayerId = models.ManyToManyField(PlayerIPL, related_name='bench_players_team2')
    playerOrderTeam1 = models.CharField(max_length=255, default="")  # comma separated player ids
    playerOrderTeam2 = models.CharField(max_length=255, default="")  # comma separated player ids

    def __str__(self):
        return self.title        
        
        
        
        
        

