from django.urls import path

from . import views

urlpatterns = [
    path('', views.PublicationList.as_view()),
    path('create/' ,views.PublicationCreate.as_view()),
    path('<int:pk>/delete/',views.PublicationDelete.as_view()),
    path('<int:pk>/update/',views.PublicationUpdate.as_view()),
    path('<int:pk>/', views.PublicationDetail.as_view()),
]