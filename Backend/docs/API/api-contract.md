# API Contract for Cricket Yug

## [ER Diagram](https://drive.google.com/file/d/1Xt1xZRyeZOF-AM8Ns-Yj1GzE2t97naTb/view?usp=sharing)

## API Endpoints

### 1. Get all upcoming matches

#### Request

Method: `GET`

Endpoint: `/api/v1/matches/upcoming?event=series&limit=6`

Note - By default limit is 6
event can be series or match

#### Response

```json
    {
    "status": "success",
    "data": [{
          "id": 1,
          "team1": "India",
          "team2": "Australia",
          "location": "Sydney",
          "start": "2021-01-01T00:00:00.000Z",
          "end": "2021-01-01T00:00:00.000Z",
          "title": "India vs Australia",
          "format": "ODY/TEST/T20",
          "type": "ICC/IPL",
          "cover": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
          "team1_logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
          "team2_logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170666/australia-flag-1415080446.jpg"
    },
    {
          "id": 2,
          "team1": "India",
          "team2": "Australia",
          "location": "Sydney",
          "start": "2021-01-01T00:00:00.000Z",
          "end": "2021-01-01T00:00:00.000Z",
          "title": "India vs Australia",
          "format": "ODY/TEST/T20",
          "type": "ICC/IPL",
          "cover": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
          "team1_logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
          "team2_logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170666/australia-flag-1415080446.jpg"
      }
    ]
}
```

### 2. Get TOP players

top players can be batsman, bowler, allrounder for the formats test, odi, t20

#### Request

Method: `GET`

Endpoint: `/api/v1/players/top?match_format=TEST&role=BATTING&limit=10`

Note - By default limit is 10

Response for role == batsman:
```json
{
  "status": "success",
  "message": "Top players fetched successfully",
  "data": [
    {
      "id": "1",
      "name": "Virat Kohli",
      "country": "India",
      "role": "Batsman",
      "playerAvatar": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
      "batting": {
        "matches": 100,
        "runs": 1111,
        "strike_rate": 111.11,
        "average": 111.11,
        "potential": 111.11,
        "strength": 111.11
      },
      "bowling": {
        "matches": 100,
        "wickets": 111,
        "economy": 111.11,
        "average": 111.11,
        "runs_conceeded": 111.11,
        "strike_rate": 111.11,
        "overs": 111.11
      },
      "allrounder": {
        "matches": 100,
        "runs": 1111,
        "wickets": 111,
        "batting_average": 111.11,
        "bowling_strike_rate": 111.11,
        "economy": 111.11,
        "batting_strike_rate": 111.1
      }
    }
  ]
}
```

### 3. Get Match Predictions with Custom Team Players

#### Request

Method: `POST`

Endpoint: `/api/v1/matches/{match_id}/custom_prediction`

Body:

```json
{
  "team_1_abb": "IND",
  "team_2_abb": "PAK",
  "team_1_player_ids": ["playerId1", "playerId2"],
  "team_2_player_ids": ["playerId1", "playerId2"]
}
```

Response:

```json
{
  "status": "success",
  "data": {
  "id": 1,
    "title": "India vs Australia",
    "result": {
        "status": "win",
        "winner": "India",
        "percentage": 60
    },
    "matrix": {
        "c1_min_c2_min": 54,
        "c1_min_c2_max": 50,
        "c1_max_c2_min": 73,
        "c1_max_c2_max": 97
    },
    "country_1": {
        "id": 1,
        "name": "India",
        "logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170661/india-flag-1415080396.jpg",
        "runs": {
            "min": 100,
            "max": 200
        },
        "wickets": {
            "min": 1,
            "max": 10
        },
        "overs": {
            "min": 1,
            "max": 50
        },
        "batting_stats": [
            {
                "id": 1,
                "name": "Virat Kohli",
                "runs": 100,
                "balls": 100,
                "played": True
            }
        ],
        "bowling_stats": [
            {
                "id": 1,
                "name": "Millinga",
                "wickets": 1,
                "economy": 1.6,
                "played": True,
            }
        ]
    },
    "country_2": {
        "id": 2,
        "name": "Australia",
        "logo": "https://www.cricbuzz.com/a/img/v1/192x192/i1/c170666/australia-flag-1415080396.jpg",
        "runs": {
            "min": 100,
            "max": 200
        },
        "wickets": {
            "min": 1,
            "max": 10
        },
        "overs": {
            "min": 1,
            "max": 50
        },
        "batting_stats": [
          {
            "id": 1,
            "name": "Virat Kohli",
            "runs": 100,
            "balls": 100,
            "played": True
          },
        ],
        "bowling_stats": [
          {
            "id": 1,
            "name": "Millinga",
            "wickets": 1,
            "economy": 1.6,
            "played": True,
          },
        ]
      }
}

```


### 4. Get Match Details

#### Request

Method: `GET`

Endpoint: `/api/v1/matches/{match_id}`

```json
{
	"status": "success",
	"data": {
		"id": "1",
		"title": "India vs Australia",
		"label": "Match 1",
		"location": "Sydney",
		"timestamp": "2021-01-01T00:00:00.000Z",
		"team1": "India",
		"team2": "Australia"
	}
}
```

### 5. Get Playing11 Players for Match

#### Request

Method: `GET`

Endpoint: `/api/v1/matches/{match_id}/players`

```json
{
  "country_1": [
        {
            "id": 1328,
            "name": "Najmul Hossain Shanto",
            "country": "BAN",
            "role": "Batsman",
            "benched": false,
            "playerAvatar": null,
            "matches": 39,
            "bowling": {
                "wickets": 1,
                "economy": 5.4,
                "runs_conceded": 45,
                "strike_rate": 50.0,
                "overs": 8.333333333333334,
                "average": 22.3
            },
            "batting": {
                "runs": 1130.0,
                "strike_rate": 78.64,
                "average": 30.54,
                "potential": 0.0,
                "strength": 0.0
            }
        },
    {...},
    {...},
  // same for country_2
}
```

### 6. Get Benched Players for Match

#### Request

Method: `GET`

Endpoint: `/api/v1/matches/{match_id}/benched_players`

```json
{
  "country_1_benched": [
        {
            "id": 1328,
            "name": "Najmul Hossain Shanto",
            "country": "BAN",
            "role": "Batsman",
            "benched": false,
            "playerAvatar": null,
            "matches": 39,
            "bowling": {
                "wickets": 1,
                "economy": 5.4,
                "runs_conceded": 45,
                "strike_rate": 50.0,
                "overs": 8.333333333333334,
                "average": 22.3
            },
            "batting": {
                "runs": 1130.0,
                "strike_rate": 78.64,
                "average": 30.54,
                "potential": 0.0,
                "strength": 0.0
            }
        },
    {...},
    {...},
  // same for country_2
}
```
