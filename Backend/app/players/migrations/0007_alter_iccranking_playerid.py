# Generated by Django 4.2.6 on 2023-11-18 17:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0006_alter_players_howstatid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='iccranking',
            name='playerId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='players.players'),
        ),
    ]