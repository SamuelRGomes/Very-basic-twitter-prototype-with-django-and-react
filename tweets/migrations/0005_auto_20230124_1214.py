# Generated by Django 2.2 on 2023-01-24 15:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0004_alter_tweet_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
