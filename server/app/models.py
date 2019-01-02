from django.db import models
from django.contrib.auth.models import AbstractUser

_createdAt = models.DateTimeField(auto_now_add=True)
_updatedAt = models.DateTimeField(auto_now=True)


class User(AbstractUser):
    isParent = models.BooleanField(default=False)

    def data(self):
        return {
            'id': self.id,
            'email': self.email,
            'username': self.username,
            'firstName': self.first_name,
            'lastName': self.last_name,
        }


def logo_path(instance, filename):
    return 'user_{0}/logo/{1}'.format(instance.createdBy.id, filename)


def watermark_path(instance, filename):
    return 'user_{0}/watermark/{1}'.format(instance.createdBy.id, filename)


class Brand(models.Model):
    companyName = models.CharField(max_length=200)
    logoFile = models.FileField(upload_to=logo_path, null=True, blank=True)
    watermarkFile = models.FileField(
        upload_to=watermark_path, null=True, blank=True)
    createdBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='brandCreatedBy')
    createdAt = _createdAt
    updatedBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='brandUpdatedBy')
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
    name = models.CharField(max_length=200)
    createdBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='shootCreatedBy')
    createdAt = _createdAt
    updatedBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='shootUpdatedBy')
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return self.name


class Student(models.Model):
    shoot = models.ForeignKey(Shoot, on_delete=models.CASCADE)
    firstName = models.CharField(max_length=200)
    lastName = models.CharField(max_length=200)
    email = models.EmailField(null=True, blank=True)
    phone = models.CharField(max_length=20, null=True, blank=True)
    createdBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='studentCreatedBy')
    createdAt = _createdAt
    updatedBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='studentUpdatedBy')
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return '{} {}'.format(self.firstName, self.lastName)


def shoot_path(instance, filename):
    return 'user_{}/shoot_{}/student_{}/{}'.format(instance.student.shoot.createdBy.id, instance.student.shoot.id, instance.student.id, filename)


class Image(models.Model):
    student = models.ForeignKey(
        Student, on_delete=models.CASCADE, related_name='images')
    file = models.FileField(upload_to=shoot_path, null=True, blank=True)
    createdBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='imageCreatedBy')
    createdAt = _createdAt
    updatedBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='imageUpdatedBy')
    updatedAt = _updatedAt

    class Meta:
        ordering = ('updatedAt',)

    def __str__(self):
        try:
            return self.file.url
        except ValueError:
            return 'Image for {}'.format(self.student)


class Share(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    url = models.CharField(max_length=50, null=True, blank=True)
    expiresAt = models.DateTimeField(null=True, blank=True)
    createdBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='shareCreatedBy')
    createdAt = _createdAt
    updatedBy = models.ForeignKey(
        'User', null=True, blank=True, on_delete=models.CASCADE, related_name='shareUpdatedBy')
    updatedAt = _updatedAt

    class Meta:
        ordering = ('-updatedAt',)

    def __str__(self):
        return 'Student {} url share'.format(self.student)
