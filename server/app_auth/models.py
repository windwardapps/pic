from django.db import models
from django.contrib.auth.models import AbstractUser


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
