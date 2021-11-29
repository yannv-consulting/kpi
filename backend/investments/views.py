from django.db import models
from django.db.models import fields, query
import django_filters
from django_filters.filters import CharFilter
from rest_framework import serializers, viewsets
from .models import Investments
from .serializers import InvestmentSerializer
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.filters import SearchFilter
from .models import Investments

import json

# Create your views here.

class InvestmentsFilter(django_filters.FilterSet):
    ville = CharFilter(field_name="ville", lookup_expr='startswith')
    etat_d_avancement = CharFilter(field_name="etat_d_avancement", lookup_expr='startswith')
    class Meta:
        model = Investments
        fields = {
            "ville",
            "etat_d_avancement",
        }

class InvestementsViewSet(viewsets.ModelViewSet):
    queryset = Investments.objects.all()
    serializer_class = InvestmentSerializer
    filter_backends = [DjangoFilterBackend]
    filter_class = InvestmentsFilter

