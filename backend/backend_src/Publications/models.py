from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
# Create your models here.

class Author(models.Model):
    Name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.Name

class Publication(models.Model):
    Title = models.CharField(max_length=500)
    Authors = models.ManyToManyField(Author, related_name="Authors")
    Publisher = models.CharField(max_length=100,blank=True)
    Journal = models.CharField(max_length=100,blank=True)
    Year = models.IntegerField(validators=[MinValueValidator(1984),MaxValueValidator(2018)])
    Volume = models.IntegerField(blank=True)
    Pages = models.IntegerField(blank=True)
    Type = models.CharField(max_length=50)

    def __str__(self):
        return self.Title



