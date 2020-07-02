from django.urls import path

from . import views


app_name = 'inputs'

urlpatterns = [
    path('dynamic/', views.dynamic_inputs, name='dynamic_inputs'),
    path('result/', views.inputs_result, name='inputs_result'),
]