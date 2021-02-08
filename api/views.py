
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TaskSerializer ,UaereSerializer
from django.contrib.auth.models import User
from .models import Task
# from rest_framework_jwt.utils import 
# ad add add 
from django.contrib.auth import authenticate, login
from rest_framework_jwt.settings import api_settings
import jwt

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/tasks/',
		'Detail View':'/tasks/<str:pk>/',
		'Create':'task/new',
		'Update':'/task/<str:pk>/update',
		'Delete':'task/<str:pk>/delete',
		}

	return Response(api_urls)

@api_view(['GET'])
def taskList(request):
	tasks = Task.objects.all().order_by('completed')
	serializer = TaskSerializer(tasks, many=True)
	return Response(serializer.data)

@api_view(['GET'])
def taskDetail(request, pk):
	tasks = Task.objects.get(id=pk)
	serializer = TaskSerializer(tasks, many=False)
	return Response(serializer.data)


@api_view(['POST',"OPTIONS"] )
def taskCreate(request):
	serializer = TaskSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['POST'])
def taskUpdate(request, pk):
	print("asas")
	task = Task.objects.get(id=pk)
	serializer = TaskSerializer(instance=task, data=request.data)
	
	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)


@api_view(['DELETE'])
def taskDelete(request, pk):
	task = Task.objects.get(id=pk)
	task.delete()

	return Response('Item succsesfully delete!')
# from django.contrib.auth import authenticate
@api_view(['POST'])
def userlogin(request):
	user = authenticate(username='dodo', password='Ys11223344')
	serializer = UaereSerializer(user, many=False)
	user = jwt.encode(serializer.data, "SECRET", algorithm='HS256')
	print(serializer.data)
	return Response({"user" :serializer.data , 'token' : user} )