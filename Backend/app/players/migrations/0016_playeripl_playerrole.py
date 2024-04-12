# Generated by Django 4.1.13 on 2024-04-07 12:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0015_alter_playeripl_playerteamcode_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='playeripl',
            name='playerRole',
            field=models.TextField(choices=[('BOWLER', 'BOWLER'), ('BATSMAN', 'BATSMAN'), ('ALLROUNDER', 'ALLROUNDER')], default='ALLROUNDER'),
        ),
    ]
