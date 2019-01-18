from django.urls import path

from . import views

urlpatterns = [
    path('', views.FAQList.as_view()),
    path('<int:pk>/', views.FAQDetail.as_view()),
    path('create/', views.FAQCreate.as_view()),
    path('delete/<int:pk>', views.FAQDelete.as_view()),
    path('update/<int:pk>', views.FAQUpdate.as_view()),
]