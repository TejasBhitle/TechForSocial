from django.db import models

# Create your models here.

class News(models.Model):
    text = models.CharField(max_length=1000)


class Highlights(models.Model):
    text = models.CharField(max_length=1000)
    image = models.FileField()
    def __str__(self):
        return self.text


