from django.db import models
from django.contrib.auth.models import AbstractUser

_createdBy = models.CharField(max_length=50, null=True, blank=True)
_createdAt = models.DateTimeField(auto_now_add=True)
_updatedBy = models.CharField(max_length=50, null=True, blank=True)
_updatedAt = models.DateTimeField(auto_now=True)


class User(AbstractUser):

    def data(self):
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'firstName': self.first_name,
            'lastName': self.last_name,
        }


class Shoot(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    createdBy = _createdBy
    createdAt = _createdAt
    updatedBy = _updatedBy
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return self.name


class Student(models.Model):
    shoot = models.ForeignKey(Shoot, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    createdBy = _createdBy
    createdAt = _createdAt
    updatedBy = _updatedBy
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return '{} {}'.format(self.firstName, self.lastName)


class Image(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    path = models.CharField(max_length=500)
    createdBy = _createdBy
    createdAt = _createdAt
    updatedBy = _updatedBy
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return self.path
