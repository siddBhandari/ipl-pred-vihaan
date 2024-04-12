# Generated by Django 4.2.6 on 2023-11-11 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0002_playerstats_ballsfaced_upcomingevents_cover'),
    ]

    operations = [
        migrations.RenameField(
            model_name='upcomingevents',
            old_name='end',
            new_name='startDateTime',
        ),
        migrations.RemoveField(
            model_name='upcomingevents',
            name='start',
        ),
        migrations.AddField(
            model_name='players',
            name='playerRole',
            field=models.CharField(choices=[('Batsman', 'Batsman'), ('Bowler', 'Bowler'), ('All Rounder', 'All Rounder'), ('Unknown', 'Unknown')], default='Unknown', max_length=255),
        ),
        migrations.AddField(
            model_name='players',
            name='teamRole',
            field=models.CharField(choices=[('Captain', 'Captain'), ('Wicket Keeper', 'Wicket Keeper'), ('None', 'None')], default='None', max_length=255),
        ),
        migrations.AddField(
            model_name='upcomingevents',
            name='MatchUrl',
            field=models.URLField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='upcomingevents',
            name='endDate',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='aggregate',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='average',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='ballsFaced',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='bowlingAverage',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='bowlingEconomyRate',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='bowlingStrikeRate',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='ducks',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='fiftys',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='fours',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='hundreds',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='innings',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='notOuts',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='overs',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='runsConceded',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='scoringRate',
            field=models.FloatField(default=-1.0),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='sixes',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='totalMatches',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='playerstats',
            name='wickets',
            field=models.IntegerField(default=-1),
        ),
        migrations.AlterField(
            model_name='teams',
            name='teamCategory',
            field=models.CharField(choices=[('ICC', 'ICC'), ('IPL', 'IPL')], default='ICC', max_length=255),
        ),
        migrations.AlterField(
            model_name='upcomingevents',
            name='eventType',
            field=models.CharField(choices=[('SERIES', 'Series'), ('MATCH', 'Match')], default='Match', max_length=255),
        ),
        migrations.AlterField(
            model_name='upcomingevents',
            name='matchNumber',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='upcomingevents',
            name='matchType',
            field=models.CharField(choices=[('ICC', 'ICC'), ('IPL', 'IPL')], default='ICC', max_length=255),
        ),
    ]