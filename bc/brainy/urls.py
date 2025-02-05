from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('search/', views.search_recipes, name='search_recipes'),
    path('random/', views.random_recipe, name='random_recipe'),
    path('ingredients/', TemplateView.as_view(template_name='brainy/search.html'), name='search_page'),
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('', views.home_view, name='home'),
    path('gsearch/', views.search_recipes_view, name='search'),
    path('recipe-detail/<str:recipe_name>/', views.recipe_detail_view, name='recipe-detail'),
]





    
    

