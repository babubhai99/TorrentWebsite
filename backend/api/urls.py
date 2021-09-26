from django.urls import path, include
from . import views

urlpatterns = [
    path('categories', views.categories, name='categories'),
    path('<str:movie>', views.index, name='main-info'),
    path('<str:movie>/<str:link>', views.information, name='information'),
    path('trending', views.trending, name='trending'),
]
