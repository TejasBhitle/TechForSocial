from django.db import models

class FAQ(models.Model):
    question = models.CharField(max_length=100, blank=True)
    answer = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.question
