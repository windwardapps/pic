from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Shoot, Student, Image, Share

admin.site.register(User, UserAdmin)
admin.site.register(Shoot)
admin.site.register(Student)
admin.site.register(Image)
admin.site.register(Share)
