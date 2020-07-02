from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('inputs/', include('dynamic_input.urls', namespace='inputs'))
]
