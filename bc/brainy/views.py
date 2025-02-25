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

from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, authenticate
from django.contrib import messages
from .models import SavedRecipe, Recipe



def register_view(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save() 
            messages.success(request, 'Registration complete! You can now login.')
            return redirect('login')  
        else:
            messages.error(request, 'Error: Unable to register. Please check the form.')
    else:
        form = UserCreationForm()

    return render(request, 'register.html', {'form': form})




def login_view(request):
    print("🚀 login_view function triggered")  # Debugging
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        print(f"🔍 Attempting login with: {username}, {password}")  # Debugging

        user = authenticate(request, username="keerthi", password="keer12")
        print(user)
        if user is not None:
            print("✅ Authentication successful!")  # Debugging
            login(request, user)
            return redirect('http://localhost:3000/')
        else:
            print("❌ Authentication failed!")  # Debugging
            messages.error(request, 'Invalid credentials. Please try again.')

    return render(request, 'login.html')



def home_view(request):
    return render(request, 'home.html')  
from django.shortcuts import render

import google.generativeai as genai
from django.shortcuts import render
from django.conf import settings

# Configure Gemini API with your API key
genai.configure(api_key=settings.GEMINI_API_KEY)

# Function to call Gemini AI and generate recipes
import google.generativeai as genai
from django.shortcuts import render
from django.conf import settings

# Configure Gemini API with your API key
genai.configure(api_key=settings.GEMINI_API_KEY)

# Function to get recipes from ingredients
def get_recipes_from_ingredients(ingredients):
    try:
        model = genai.GenerativeModel("gemini-pro")  # Use the correct Gemini model
        response = model.generate_content(f"""
        You are a professional chef AI. Suggest **at least 50 unique recipes** based on these ingredients: {ingredients}.
        
        For each recipe, provide:
        - Name
        - Image URL (if possible)
        - List of ingredients
        - Cooking instructions
        - Nutritional info (calories, protein, carbs, fat)
        - Diet type (Vegan, Keto, etc.)

        Format the response in structured JSON.
        """)

        return response.text  # Convert AI response to text (or JSON if possible)

    except Exception as e:
        return {"error": str(e)}

# Recipe search view
def search_recipes_view(request):
    recipes = None
    if request.method == "POST":
        ingredients = request.POST.get("ingredients")  # Get user input
        recipes = get_recipes_from_ingredients(ingredients)  # Call Gemini API
    return render(request, "gsearch.html", {"recipes": recipes})


def recipe_detail_view(request, recipe_name):
    # Fetch detailed information for the selected recipe
    prompt = f"Provide a detailed recipe for {recipe_name}, including ingredients, steps, and nutrition."
    response = genai.generate_text(prompt=prompt)

    recipe_details = response.text  # Adjust this based on the Gemini response

    return render(request, "recipe_detail.html", {"recipe": recipe_details})

def save_recipe(request):
    if request.method == "POST":
        recipe_id = request.POST.get("recipe_id")
        recipe = Recipe.objects.get(id=recipe_id)  # Adjust based on your model

        saved_recipe, created = SavedRecipe.objects.get_or_create(user=request.user, recipe=recipe)
        if created:
            saved_recipe.save()
    
    return redirect("saved_recipes")

def index(request):
    return render(request, 'brainy/search.html')# TLS secrets log file, generated by OpenSSL / Python

def saved_recipes_view(request):
    saved_recipes = SavedRecipe.objects.filter(user=request.user)
    return render(request, "saved_recipes.html", {"saved_recipes": saved_recipes})

def recipe_view(request):
    meal_id = request.GET.get('mealID')
    if not meal_id:
        return render(request, '404.html')  # Handle missing mealID
    return render(request, 'recipe.html', {'meal_id': meal_id})



def redirect_to_nextjs(request):
    return redirect("http://localhost:3000/")

from django.http import JsonResponse

def api_view(request):
    return JsonResponse({"message": "Django API is working!"})
def recipe_view(request, recipe_id):
    API_KEY = "4d67beffe37b44e2ab6a5ce542a7dc17"
    api_url = f"https://api.spoonacular.com/recipes/{recipe_id}/information"
    params = {
        "apiKey": API_KEY,
        "includeNutrition": True
    }
    
    response = requests.get(api_url, params=params)
    if response.status_code == 200:
        recipe_data = response.json()
        context = {
            'recipe': recipe_data,
        }
        return render(request, 'recipe.html', context)
    else:
        return render(request, '404.html') 
    
def redirect_to_nextjs(request):
    return redirect("http://localhost:3000/")

from django.http import JsonResponse

def api_view(request):
    return JsonResponse({"message": "Django API is working!"})


# views.py
import os
import google.generativeai as genai
from django.shortcuts import render
from django.conf import settings
from django.core.files.storage import default_storage
import markdown
import re

# Configure the Gemini API
genai.configure(api_key="AIzaSyDZNQnwqLn0E4CGr24bVJYEbCqgKfbov4Y")

def format_recipe_text(text):
    # Convert markdown-style formatting to HTML
    # First, handle the bold text
    text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', text)
    
    # Handle lists
    text = text.replace('*   ', '• ')
    
    # Add proper spacing for sections
    text = text.replace('\n\n', '<br><br>')
    
    return text
genai.configure(api_key=settings.GEMINI_API_KEY)

def upload_to_gemini(file):
    """Uploads the given file to Gemini."""
    file_path = default_storage.save('temp_image.jpg', file)
    full_path = os.path.join(settings.MEDIA_ROOT, file_path)
    gemini_file = genai.upload_file(full_path, mime_type="image/jpeg")
    os.remove(full_path)
    return gemini_file

def recipe_suggestion(request):
    if request.method == 'POST' and request.FILES.get('image'):
        image = request.FILES['image']
        
        # Save the image temporarily and get its URL
        file_path = default_storage.save(f'temp_images/{image.name}', image)
        image_url = settings.MEDIA_URL + file_path
        
        gemini_file = upload_to_gemini(image)

        generation_config = {
            "temperature": 1,
            "top_p": 0.95,
            "top_k": 40,
            "max_output_tokens": 8192,
            "response_mime_type": "text/plain",
        }

        model = genai.GenerativeModel(
            model_name="gemini-2.0-flash",
            generation_config=generation_config,
        )

        chat_session = model.start_chat(
            history=[
                {
                    "role": "user",
                    "parts": [
                        gemini_file,
                        "I have the ingredients above. Not sure what to cook for lunch. Show me a list of foods with the recipes.",
                    ],
                },
            ]
        )

        response = chat_session.send_message("Give me recipe suggestions based on the image.")
        
        # Format the response for better display
        formatted_text = format_recipe_text(response.text)
        
        return render(request, 'recipe_suggestion.html', {'recipes': formatted_text, 'image_url': image_url})

    return render(request, 'recipe_suggestion.html')