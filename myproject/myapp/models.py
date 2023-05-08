from django.db import models

class JobListing(models.Model):
    title = models.CharField(max_length=500)
    company = models.CharField(max_length=500)
    location = models.CharField(max_length=500)
    url = models.URLField()

    def __str__(self):
        return self.title
