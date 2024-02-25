from django.urls import path
from .views import RealtorsView,TopSellerView,RealtorsListView

urlpatterns = [
    path('',RealtorsListView.as_view()),
    path('topseller/',TopSellerView.as_view()),
    path('<pk>',RealtorsView.as_view()),
]