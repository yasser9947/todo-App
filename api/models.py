# Create your models here.
from django.db import models
# from django.contrib.auth.models import 
# Create your models here.

from django.contrib.auth.models import User
class Task(models.Model):
  title = models.CharField(max_length=200)
  completed = models.BooleanField(default=False, blank=True, null=True)
      
  def __str__(self):
    return self.title


class UserProfile(models.Model):
   user = models.OneToOneField(User , on_delete=models.CASCADE , related_name="profile")
   phone = models.CharField(max_length=256, blank=True, null=True)
