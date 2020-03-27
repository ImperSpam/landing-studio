from django.db import models


class Request(models.Model):
    name = models.CharField(null=False, max_length=40)
    mail = models.EmailField(null=True)
    telegram = models.CharField(null=True, blank=True, max_length=40)
    vk = models.CharField(null=True, blank=True, max_length=40)

    def __str__(self):
        return self.name
