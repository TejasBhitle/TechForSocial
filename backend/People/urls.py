from django.urls import path

from . import views

urlpatterns = [
    path('', views.PeopleList.as_view()),
    path('people/', views.PeopleList.as_view()),
    path('people/create/' ,views.PeopleCreate.as_view()),
    path('people/<int:pk>/delete/',views.PeopleDelete.as_view()),
    path('people/<int:pk>/update/',views.PeopleUpdate.as_view()),
    path('people/<int:pk>/', views.PeopleDetail.as_view()),
]