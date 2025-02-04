from django.db import models

class Recipe(models.Model):
    meal_name = models.CharField(max_length=255)
    area = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=255, blank=True, null=True)
    ingredients = models.TextField()
    instructions = models.TextField()
    meal_image = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.meal_name


