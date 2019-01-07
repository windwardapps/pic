from rest_framework import serializers
from .models import Shoot, Student, Image, Share


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
