from rest_framework.routers import DefaultRouter

from .views import InvestementsViewSet

router = DefaultRouter()
router.register(r'api/investments', InvestementsViewSet, basename='investments')


urlpatterns = router.urls