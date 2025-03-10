# Generated by Django 5.1.2 on 2025-02-03 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('meal_name', models.CharField(max_length=255)),
                ('area', models.CharField(blank=True, max_length=255, null=True)),
                ('category', models.CharField(blank=True, max_length=255, null=True)),
                ('ingredients', models.TextField()),
                ('instructions', models.TextField()),
                ('meal_image', models.URLField(blank=True, max_length=500, null=True)),
            ],
        ),
    ]
