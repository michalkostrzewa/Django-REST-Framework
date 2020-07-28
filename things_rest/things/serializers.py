from rest_framework import serializers
from .models import Thing, PlatformToBought
from django.contrib.auth import get_user_model


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id','password','url','username','first_name','last_name','email')


class PlatformToBoughtSerializers(serializers.ModelSerializer):
    class Meta:
        model = PlatformToBought()
        fields = ('id','name','url')


class ThingSerializers(serializers.ModelSerializer):
    bought_on_details = PlatformToBoughtSerializers(read_only=True, source='bought_on')
    user_details = UserSerializer(read_only=True, source='user')
    class Meta:
        model = Thing
        fields = ('id','url','name', 'cost','user','user_details','note','bought_at','bought_on','bought_on_details')


