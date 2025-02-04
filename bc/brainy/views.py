from django.http import JsonResponse
import requests
from .utils import fetch_recipe_by_name, fetch_random_recipe

def search_recipes(request):
    query = request.GET.get('query', '')
    recipes = fetch_recipe_by_name(query)
    return JsonResponse(recipes, safe=False)

def random_recipe(request):
    recipe = fetch_random_recipe()
    return JsonResponse(recipe, safe=False)

