from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('search/', views.search_recipes, name='search_recipes'),
    path('random/', views.random_recipe, name='random_recipe'),
    path('', TemplateView.as_view(template_name='brainy/search.html'), name='search_page'),
    
    
]
