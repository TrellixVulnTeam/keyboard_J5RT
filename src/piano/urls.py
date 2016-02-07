from django.conf.urls import include, url

from . import views

urlpatterns = [
    #url(r'^$', views.index, name='index'),
    url(r'^$', views.home, name='home') #views.[something defined in views.py]
]
