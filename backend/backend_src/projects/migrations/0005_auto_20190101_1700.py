# Generated by Django 2.0 on 2019-01-01 11:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0004_auto_20181219_2010'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='pastproject',
            name='past_project_paper',
        ),
        migrations.RemoveField(
            model_name='pastproject',
            name='past_project_team',
        ),
        migrations.AddField(
            model_name='activeproject',
            name='is_past',
            field=models.BooleanField(default=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activeproject',
            name='project_context',
            field=models.CharField(blank=True, max_length=1000),
        ),
        migrations.AddField(
            model_name='activeproject',
            name='project_photo',
            field=models.ImageField(blank=True, upload_to=''),
        ),
        migrations.DeleteModel(
            name='PastProject',
        ),
    ]
