from django.urls import path, include
from blog import views

urlpatterns = [
    path('blog/', views.BlogList.as_view()),
    path('blog/<int:pk>', views.BlogDetails.as_view()),
    path('users/', views.UserList.as_view()),
    path('users/<int:pk>/', views.UserDetail.as_view()),
    path('api-auth/', include('rest_framework.urls')),
]
