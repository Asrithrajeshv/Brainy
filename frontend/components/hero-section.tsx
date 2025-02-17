"use client"
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

// Define the type for recipe state
interface Recipe {
  strMeal: string
  strMealThumb: string
  strInstructions: string
  strCategory: string
  strArea: string
}

export function HeroSection() {
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await response.json()
      setRecipe(data.meals[0]) // Get the first (and only) recipe from the response
    } catch (error) {
      console.error("Error fetching random recipe:", error)
    }
  }

  // Function to format instructions as bullet points
  const formatInstructions = (instructions: string) => {
    return instructions
      .split(". ")
      .filter((line) => line.trim() !== "")
      .map((line, index) => (
        <li key={index} className="mb-2">
          {line.trim()}.
        </li>
      ))
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-culinary-cream">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('/pattern.png')" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-primary-800 mb-6">Brainy Cook</h1>
          <p className="text-xl md:text-2xl text-primary-600 mb-12 max-w-3xl mx-auto">
            Elevate your culinary skills with smart recipes and intelligent cooking assistance
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-6">
          <button
            onClick={fetchRandomRecipe}
            className="px-8 py-4 bg-culinary-spice text-white rounded-full font-semibold 
                           transform hover:scale-105 transition-all duration-300 
                           shadow-lg hover:shadow-culinary-spice/50"
          >
            Explore Smart Recipes
          </button>
        </motion.div>

        {/* Display Random Recipe */}
        {recipe && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-left bg-white rounded-lg p-6 shadow-lg max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-2 text-culinary-spice">{recipe.strMeal}</h2>
            <p className="text-sm text-gray-500 mb-4">
              Category: {recipe.strCategory} | Origin: {recipe.strArea}
            </p>
            <Image
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              width={800}
              height={600}
              className="rounded-lg w-full mb-4 shadow-md"
              priority
            />
            <h3 className="text-2xl font-semibold mb-2 text-primary-700">Instructions:</h3>
            <ul className="list-disc list-inside text-md text-primary-600 pl-4 space-y-1">
              {formatInstructions(recipe.strInstructions)}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </div>
  )
}
