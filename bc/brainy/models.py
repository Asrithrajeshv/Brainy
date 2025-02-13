from django.db import models
from django.contrib.auth.models import User  

class Recipe(models.Model):
    meal_name = models.CharField(max_length=255)
    area = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    ingredients = models.TextField()
    instructions = models.TextField()
    meal_image = models.URLField(max_length=500, blank=True, null=True)
    recipe_id = models.CharField(max_length=255, unique=True)  

    def __str__(self):
        return self.meal_name

class SavedRecipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe_id = models.CharField(max_length=255)  # Store recipe ID for saving
    saved_at = models.DateTimeField(auto_now_add=True)  # Stores when the recipe was saved

    def __str__(self):
        return f"{self.user.username} saved {self.recipe_id}"
