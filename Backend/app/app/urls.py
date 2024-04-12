"""
URL configuration for app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from players.views import ListUpcomingMatches, ListTopPlayers, EventDetailView, MatchPlayersAPIView, BenchedPlayersAPIView
from prediction.views import EventPredictionView, CustomTeamEventPredictionView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/matches/upcoming/', ListUpcomingMatches.as_view(), name='upcoming-matches'),
    path('api/v1/players/top/', ListTopPlayers.as_view(), name='top-players'),
    path('api/v1/matches/', EventPredictionView.as_view(), name='event-prediction'),
    path('api/v1/matches/<int:event_id>/', EventDetailView.as_view(), name='event-detail'),
    path('api/v1/matches/<int:match_id>/players/', MatchPlayersAPIView.as_view(), name='match-players-api'),
    path('api/v1/matches/<int:eventId>/custom_prediction/', CustomTeamEventPredictionView.as_view(), name='custom-prediction'),
    path('api/v1/matches/<int:event_id>/benched_players/', BenchedPlayersAPIView.as_view(), name='benched-players-api')
]