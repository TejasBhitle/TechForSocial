from django.urls import path

from . import views

urlpatterns = [
    path('', views.PeopleList.as_view()),
    path('create/' ,views.PeopleCreate.as_view()),
    path('<int:pk>/delete/',views.PeopleDelete.as_view()),
    path('<int:pk>/update/',views.PeopleUpdate.as_view()),
    path('<int:pk>/', views.PeopleDetail.as_view()),
]