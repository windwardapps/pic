from django.db import models
from django.contrib.auth.models import AbstractUser

_createdBy = models.CharField(max_length=50, null=True, blank=True)
_createdAt = models.DateTimeField(auto_now_add=True)
_updatedBy = models.CharField(max_length=50, null=True, blank=True)
_updatedAt = models.DateTimeField(auto_now=True)


def logo_path(instance, filename):
    return 'user_{0}/logo/{1}'.format(instance.user.id, filename)


def watermark_path(instance, filename):
    return 'user_{0}/watermark/{1}'.format(instance.user.id, filename)


class User(AbstractUser):

    def data(self):
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'firstName': self.first_name,
            'lastName': self.last_name,
        }


class Brand(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    companyName = models.CharField(max_length=200)
    logoFile = models.FileField(upload_to=logo_path, null=True, blank=True)
    watermarkFile = models.FileField(
        upload_to=watermark_path, null=True, blank=True)
    createdBy = _createdBy
    createdAt = _createdAt
    updatedBy = _updatedBy
    updatedAt = _updatedAt

    def data(self):
        logoFile = ''
        watermarkFile = ''
        try:
            logoFile = self.logoFile.url
        except ValueError:
            pass
        try:
            watermarkFile = self.watermarkFile.url
        except ValueError:
            pass
        return {
            'id': self.id,
            'companyName': self.companyName,
            'logoFile': logoFile,
            'watermarkFile': watermarkFile
        }

    def __str__(self):
        return self.companyName


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
