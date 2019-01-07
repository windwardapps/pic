from datetime import datetime, timedelta
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from .forms import BrandForm
from .models import Shoot, Student, Image, Brand, Share
from .serializers import StudentSerializer, ShootSerializer, ImageSerializer, ShareSerializer


class BrandingView(APIView):

    def get(self, request):
        try:
            brand = Brand.objects.get(createdBy=request.user)
        except Brand.DoesNotExist:
            return Response({})

        return Response(brand.data())

    def post(self, request):
        brand, created = Brand.objects.get_or_create(createdBy=request.user)
        form = BrandForm(request.POST, request.FILES, instance=brand)
        if form.is_valid():
            # file is saved
            form.save()

        return Response(brand.data())


class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer

    def get_queryset(self):
        return Student.objects.filter(shoot_id=self.kwargs['shoot_pk'])

    def perform_create(self, serializer):
        serializer.save(
            shoot_id=self.kwargs['shoot_pk'], createdBy=self.request.user)


class ShootViewSet(viewsets.ModelViewSet):
    serializer_class = ShootSerializer

    def get_queryset(self):
        return Shoot.objects.filter(createdBy=self.request.user)

    def perform_create(self, serializer):
        user = self.request.user
        serializer.save(createdBy=user)


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer

    def get_queryset(self):
        return Image.objects.filter(student_id=self.kwargs['student_pk'])

    def perform_create(self, serializer):
        serializer.save(
            student_id=self.kwargs['student_pk'], createdBy=self.request.user)


class ShareViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   GenericViewSet):

    serializer_class = ShareSerializer

    def get_object(self):
        try:
            share = Share.objects.get(student_id=self.kwargs['student_pk'])
        except Share.DoesNotExist:
            nextWeek = datetime.today() + timedelta(weeks=1)
            share = Share.objects.create(
                student_id=self.kwargs['student_pk'], url='abc.com/test',
                expiresAt=nextWeek,
                createdBy=self.request.user
            )

        return share

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
