from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group
from rest_framework import serializers
from .models import User, Shoot, Student, Image, Share


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ShootSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Shoot
        fields = ('id', 'url', 'name', 'updatedAt')


class StudentSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ('id', 'url', 'firstName', 'lastName', 'updatedAt')


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'file', 'updatedAt')


class ShareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Share
        fields = ('id', 'url', 'expiresAt')
