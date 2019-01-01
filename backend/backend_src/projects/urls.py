from django.urls import path

from . import views

urlpatterns = [
    path('active/', views.ProjectList.as_view()),
    path('active/<int:pk>/', views.ProjectDetail.as_view()),
    path('active/create/', views.ProjectCreate.as_view()),
    path('active/<int:pk>/delete', views.ProjectDelete.as_view()),
    path('active/<int:pk>/update', views.ProjectUpdate.as_view()),

    path('past/', views.PastProjectList.as_view()),
    path('past/<int:pk>/', views.PastProjectDetail.as_view()),
    path('past/create/', views.PastProjectCreate.as_view()),
    path('past/<int:pk>/delete', views.PastProjectDelete.as_view()),
    path('past/<int:pk>/update', views.PastProjectUpdate.as_view()),

]