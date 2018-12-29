# Generated by Django 2.1.4 on 2018-12-29 14:52

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Institute', models.CharField(blank=True, max_length=500)),
                ('Email', models.CharField(blank=True, max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=500)),
                ('Publisher', models.CharField(blank=True, max_length=100)),
                ('Journal', models.CharField(blank=True, max_length=100)),
                ('Year', models.IntegerField(validators=[django.core.validators.MinValueValidator(1984), django.core.validators.MaxValueValidator(2018)])),
                ('Volume', models.IntegerField(blank=True)),
                ('Pages', models.IntegerField(blank=True)),
                ('Type', models.CharField(max_length=50)),
            ],
        ),
        migrations.AddField(
            model_name='author',
            name='publication',
            field=models.ManyToManyField(to='Publications.Publication'),
        ),
    ]
