from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static
import landing.views


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r"^$", landing.views.index),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
