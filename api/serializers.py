from rest_framework import serializers
from .models import Task ,UserProfile
from django.contrib.auth.models import User

# Create your views here.


class TaskSerializer(serializers.ModelSerializer):
	class Meta:
		model = Task
		fields ='__all__'




class UaerPrifileSerializer(serializers.ModelSerializer):


	class Meta:
		model = UserProfile
		fields =(  'phone',)


class UaereSerializer(serializers.ModelSerializer):
	profile = UaerPrifileSerializer(required=False)

	class Meta:
		model = User
		fields =("email" ,'profile' , "username")
	
	def token():

		return "ss"
		

