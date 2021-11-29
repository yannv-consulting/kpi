from rest_framework import serializers, viewsets
from .models import Investments
from .serializers import InvestmentSerializer

import json

# Create your views here.

class InvestementsViewSet(viewsets.ModelViewSet):
    queryset = Investments.objects.all()
    serializer_class = InvestmentSerializer
