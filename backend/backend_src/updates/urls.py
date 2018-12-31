from django.urls import path
from . import views,viewsHighlights

urlpatterns=[
    path('news/',views.NewsList.as_view()),
    path('news/create/',views.NewsCreate.as_view()),
    path('news/delete/<int:pk>',views.NewsDelete.as_view()),
    path('news/update/<int:pk>',views.NewsUpdate.as_view()),
   # path('news/',views.NewsList.as_view()),





    path('highlights/',viewsHighlights.GetHighlights.as_view()),
    path('highlights/create/',viewsHighlights.CreateHighlights.as_view()),
    path('highlights/delete/<int:pk>',viewsHighlights.DeleteHighlights.as_view()),
    path('highlights/update/<int:pk>',viewsHighlights.UpdateHighlights.as_view()),

]