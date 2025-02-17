from django.urls import path
from . import views
from django.views.generic import TemplateView
from .views import save_recipe, saved_recipes  # Make sure saved_recipes is properly defined

urlpatterns = [
    # Recipe-related routes
    path('saved_recipes/', saved_recipes, name='saved_recipes'),  # Fixed the path
    path('search/', views.search_recipes, name='search_recipes'),
    path('random/', views.random_recipe, name='random_recipe'),
    path('ingredients/', TemplateView.as_view(template_name='brainy/search.html'), name='search_page'),
    
    # Authentication routes
    path("", views.login_view, name='login'),
    path('register/', views.register_view, name='register'), 
    path('login/', views.login_view, name='login'),  # Fixed duplicate
    path('register/', views.register_view, name='register'),

    # Search and recipe details
    path('gsearch/', views.search_recipes_view, name='search'),
    path('recipe-detail/<str:recipe_name>/', views.recipe_detail_view, name='recipe-detail'),

    # Home and API
    path('index/', views.index, name='index'),
    path('home/', views.home_view, name='home'), 
    path('api/', views.api_view, name='api'), 

    # Save and view recipes
    path("save_recipe/", save_recipe, name="save_recipe"),  # Saving recipe
    path('saved-recipes/', views.saved_recipes, name='saved_recipes'),
    path('recipe/<int:recipe_id>/', views.recipe_view, name='recipe-view'),  # Viewing individual recipe
    
]
