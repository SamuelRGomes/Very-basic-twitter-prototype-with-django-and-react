# Generated by Django 2.2 on 2023-01-26 15:51

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0009_tweet_parent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='likes',
            field=models.ManyToManyField(null=True, related_name='tweet_user', through='tweets.TweetLike', to=settings.AUTH_USER_MODEL),
        ),
    ]
