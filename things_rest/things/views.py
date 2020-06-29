from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Thing, Platform_to_bought
from .serializers import ThingSerializers, UserSerializer, Platform_to_boughtSerializers
from django.contrib.auth import get_user_model


class UserView(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class ThingView(viewsets.ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializers

class Platform_to_boughtView(viewsets.ModelViewSet):
    queryset = Platform_to_bought.objects.all()
    serializer_class = Platform_to_boughtSerializers
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly,)