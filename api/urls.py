from django.urls import path , include
from . import views
urlpatterns = [
# path('api/' , views.apiOverview , name = "apiOverview"), 
	path('', views.apiOverview, name="api-overview"),
	path('tasks/', views.taskList, name="task-list"),
	path('tasks/<str:pk>/', views.taskDetail, name="task-detail"),
	path('task/new', views.taskCreate, name="task-create"),

	path('task/<str:pk>/update', views.taskUpdate, name="task-update"),
	path('task/<str:pk>/delete', views.taskDelete, name="task-delete"),
path('api/login' , views.userlogin , name = "userLogin")
]