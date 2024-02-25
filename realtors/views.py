from rest_framework.generics import ListAPIView , RetrieveAPIView
from rest_framework import permissions
from .models import Realtors
from .serializers import RealtorsSerializers

class RealtorsListView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Realtors.objects.all()
    serializer_class = RealtorsSerializers
    pagintion_class = None

class RealtorsView(RetrieveAPIView):
    queryset = Realtors.objects.all()
    serializer_class = RealtorsSerializers

class TopSellerView(ListAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Realtors.objects.filter(top_seller=True)
    serializer_class = RealtorsSerializers
    pagintion_class = None