import json
import time
from django.contrib.auth import authenticate, login
from django.core.exceptions import ObjectDoesNotExist
from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.http import Http404, HttpResponseBadRequest

from app.models import User, Share, Student, Shoot
from app.serializers import ShareSerializer, StudentSerializer, ShootSerializer, ImageSerializer


def index(request, shareUrl=None):
    print('***** begin')
    if shareUrl is None:
        print('***** no shareUrl')
        raise Http404

    share = get_object_or_404(Share, url=shareUrl)
    if share.expiresAt < timezone.now():
        return HttpResponseBadRequest('This link has expired. Please contact {} at {}'.format(share.createdBy.first_name, share.createdBy.email))

    student = share.student
    images = student.images
    user = request.user

    print('***** got objects')

    if not user.is_authenticated:
        print('***** not user.is_authenticated')
        now = str(time.time())
        email = '{}@__placeholder__.com'.format(now)
        user = User.objects.create_user(now, email, now, isParent=True)
        user = authenticate(request, username=email, password=now)
        if not user:
            raise ObjectDoesNotExist('no user')
        login(request, user)
        print('***** created user')

    print('***** logged in')
    data = json.dumps({'share': ShareSerializer(share, context={'request': request}).data, 'student': StudentSerializer(student, context={'request': request}).data,
                       'images': ImageSerializer(images, many=True, context={'request': request}).data, 'user': user.data()})
    return render(request, 'parent_app/index.html', {'data': data})
