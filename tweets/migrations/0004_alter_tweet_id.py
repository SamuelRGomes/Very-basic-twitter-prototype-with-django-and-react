# Generated by Django 4.0.8 on 2023-01-24 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0003_alter_tweet_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]