from django.conf import settings
from django.conf.urls.static import static

from django.contrib import admin
from django.urls import path, re_path, include
from tweets.views import (home_view,tweet_detail_view,tweet_list_view,tweet_create_view,tweet_delete_view, tweet_action_view)
from django.views.generic import TemplateView
urlpatterns = [
     path('', home_view),
    path('admin/', admin.site.urls),    
    path('tweets', tweet_list_view),
    path('create-tweet', tweet_create_view),
   
    path('tweets/<int:tweet_id>', tweet_detail_view),
    # path('api/tweets/action', tweet_action_view),
    # path('api/tweets/<int:tweet_id>/delete', tweet_delete_view),
    path('api/tweets/', include('tweets.urls')),
   
    path('react', TemplateView.as_view(template_name='react_via_dj.html'))
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)