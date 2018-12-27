from django.db import models


class People(models.Model):
    Name = models.CharField(max_length=20)
    Picture = models.CharField(max_length=100, null='true')
    Bio = models.TextField()
    Resume = models.CharField(max_length=100, null='true')
    Github = models.CharField(max_length=100, null='true')
    Gmail = models.CharField(max_length=100, null='true')
    LinkedIn = models.CharField(max_length=100, null='true')
    Website = models.CharField(max_length=100, null='true')
    Category = models.CharField(max_length=50)

    def __str__(self):
    	return self.Name
