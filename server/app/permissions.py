from rest_framework import permissions
from rest_framework.permissions import SAFE_METHODS

USER_GROUP_NAME = 'USER'
PARENT_GROUP_NAME = 'PARENT'

class OwnerWriteParentRead(permissions.BasePermission):
  
    def has_permission(self, request, view):
        user = request.user
        if PARENT_GROUP_NAME in user.groups:
            return request.method in SAFE_METHODS

        if USER_GROUP_NAME in user.groups:
            return user.is_staff or obj.createdBy == user
        
        return False

    def has_object_permission(self, request, view, obj):
        user = request.user
        return user.is_staff or obj.createdBy == user
