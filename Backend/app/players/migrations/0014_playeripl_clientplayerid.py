# Generated by Django 4.1.13 on 2024-04-05 17:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0013_playeripl'),
    ]

    operations = [
        migrations.AddField(
            model_name='playeripl',
            name='clientPlayerId',
            field=models.IntegerField(default=-1),
            preserve_default=False,
        ),
    ]