import requests

API_BASE_URL = "https://www.themealdb.com/api/json/v1/1/"

def fetch_recipe_by_name(name):
    response = requests.get(f"{API_BASE_URL}search.php?s={name}")
    return response.json().get('meals', [])

def fetch_random_recipe():
    response = requests.get(f"{API_BASE_URL}random.php")
    return response.json().get('meals', [])



