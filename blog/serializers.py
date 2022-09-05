from dataclasses import field
from operator import mod
from rest_framework import serializers
from blog.models import Blog
from django.contrib.auth.models import User

class BlogSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Blog
        fields = ['owner', 'title', 'content', 'created_at', 'published_at']

class UserSerializer(serializers.ModelSerializer):
    blog = serializers.PrimaryKeyRelatedField(many=True, queryset=Blog.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'blog']

