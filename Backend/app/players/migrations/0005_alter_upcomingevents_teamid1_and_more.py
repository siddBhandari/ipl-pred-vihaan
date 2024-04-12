# Generated by Django 4.2.6 on 2023-11-14 19:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0004_rename_matchtype_playerstats_matchformat_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='upcomingevents',
            name='teamId1',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team1', to='players.teams'),
        ),
        migrations.AlterField(
            model_name='upcomingevents',
            name='teamId2',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='team2', to='players.teams'),
        ),
    ]
