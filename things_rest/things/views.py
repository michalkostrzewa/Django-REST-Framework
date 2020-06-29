from django.shortcuts import render
from rest_framework import viewsets
from .models import Thing
from .serializers import ThingSerializers, UserSerializer
from django.contrib.auth import get_user_model


class UserView(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class ThingView(viewsets.ModelViewSet):
    queryset = Thing.objects.all()
    serializer_class = ThingSerializers