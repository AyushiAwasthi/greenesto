from django.conf.urls import url
from solarDesign import views

app_name = 'greeNesto'

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^design/$', views.pv_calculator, name='pv_calculator'),
]
