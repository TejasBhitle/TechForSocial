# Generated by Django 2.0 on 2018-12-18 18:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_auto_20181217_0009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activeproject',
            name='project_team',
            field=models.ManyToManyField(related_name='project_team', to='projects.DummyPeopleModel'),
        ),
    ]
