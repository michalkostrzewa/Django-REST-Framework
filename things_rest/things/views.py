from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Thing, PlatformToBought
from .serializers import ThingSerializers, UserSerializer, PlatformToBoughtSerializers
from django.contrib.auth import get_user_model


class UserView(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class ThingView(viewsets.ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializers

class PlatformToBoughtView(viewsets.ModelViewSet):
    queryset = PlatformToBought.objects.all()
    serializer_class = PlatformToBoughtSerializers
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)