# Generated by Django 4.2.6 on 2023-11-16 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('players', '0005_alter_upcomingevents_teamid1_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='players',
            name='howstatId',
            field=models.IntegerField(default=-1, unique=True),
            preserve_default=False,
        ),
    ]
