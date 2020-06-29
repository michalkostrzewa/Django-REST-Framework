from rest_framework import serializers
from .models import Thing
from django.contrib.auth import get_user_model


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','url')


class ThingSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Thing
        fields = ('id','url','name', 'cost','user','note','bought_at')