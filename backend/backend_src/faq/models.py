from django.db import models

class FAQ(models.Model):
    question = models.CharField(maxlength=100, blank=True)
    answer = models.CharField(maxlength=100, blank=True)

    def __str__(self):
        return self.question
