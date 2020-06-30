from django.db import models
from django.contrib.auth import get_user_model


class Platform_to_bought(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
       return self.name #coment 

class Thing(models.Model):
    name = models.CharField(max_length=200)
    cost = models.IntegerField()
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE, null=True, blank=True)
    note = models.CharField(max_length=256)
    bought_at = models.DateTimeField(auto_now=False, auto_now_add=False)
    bought_on = models.ForeignKey(Platform_to_bought, on_delete=models.CASCADE)
    def __str__(self):
       return self.name

