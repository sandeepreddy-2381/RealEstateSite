from rest_framework import serializers
from .models import Listings

class ListingsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Listings
        fields = ('title','address','city','state','price','sale_type','home_type','bedrooms','bathrooms','sqft','photo_main','slug')

class ListingsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listings
        fields = '__all__'
        lookup_field = 'slug'