from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import save_recipe, saved_recipes_view

urlpatterns = [
    path('search/', views.search_recipes, name='search_recipes'),
    path('random/', views.random_recipe, name='random_recipe'),
    path('ingredients/', TemplateView.as_view(template_name='brainy/search.html'), name='search_page'),
    path("", views.login_view, name='login'),
    path('register/', views.register_view, name='register'), 
    path('gsearch/', views.search_recipes_view, name='search'),
    path('recipe-detail/<str:recipe_name>/', views.recipe_detail_view, name='recipe-detail'),
    path('index/', views.index, name='index'),
    path('recipe.html', views.recipe_view, name='recipe-view'), 
    path("home/", views.redirect_to_nextjs), 
    path('api/', views.api_view, name='api'), 
    path('login/', views.login_view, name='login'),  # <-- FIXED: Added missing comma
    path('register/', views.register_view, name='register'),
    path("save_recipe/", save_recipe, name="save_recipe"),
    path("saved_recipes/", saved_recipes_view, name="saved_recipes"),
    path("", views.home_view, name='home'),
    path('gsearch/', views.search_recipes_view, name='search'),
    path('recipe-detail/<str:recipe_name>/', views.recipe_detail_view, name='recipe-detail'),
    path('index/', views.index, name='index'),
    path('recipe/<int:recipe_id>/', views.recipe_view, name='recipe-view'),


]
