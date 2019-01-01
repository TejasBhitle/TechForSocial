from django.db import models

# Create your models here.


class Papers(models.Model):

    paper_title = models.CharField(max_length=200)
    paper_abstract = models.CharField(max_length=1000)

    def __str__(self):

        return self.paper_title


class DummyPeopleModel(models.Model):

    person_name = models.CharField(max_length=45)

    def __str__(self):

        return self.person_name


class ActiveProject(models.Model):

    project_name = models.CharField(max_length=30)
    project_abstract = models.CharField(max_length=1000)
    project_paper = models.ManyToManyField(Papers, related_name='project_paper', blank= True)
    project_team = models.ManyToManyField(DummyPeopleModel, related_name='project_team')
    project_join_us = models.CharField(max_length=1000)
    project_photo = models.ImageField(blank=True)
    project_context = models.CharField(max_length=1000, blank=True)
    is_past = models.BooleanField()

    def __str__(self):
        return self.project_name




