from django.urls import path

from . import views

urlpatterns = [
    path('api1/', views.ProjectList.as_view()),
    path('api1/<int:pk>/', views.ProjectDetail.as_view()),
    path('api2/', views.PastProjectList.as_view()),
    path('api2/<int:pk>/', views.PastProjectDetail.as_view()),
]