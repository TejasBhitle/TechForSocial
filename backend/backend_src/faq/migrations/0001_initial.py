# Generated by Django 2.1.4 on 2019-01-04 03:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FAQ',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(blank=True, max_length=100)),
                ('answer', models.CharField(blank=True, max_length=100)),
            ],
        ),
    ]