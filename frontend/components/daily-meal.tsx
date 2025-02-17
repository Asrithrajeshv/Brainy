"use client"
/* eslint-disable react/no-unescaped-entities */

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// Define the type for recipe state
interface Recipe {
  strMeal: string
  strMealThumb: string
  strInstructions: string
  strCategory: string
  strArea: string
  strTags: string
  strYoutube: string
  [key: string]: string | null
}

export function DailyMeal() {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Fetch Random Meal from API
  const fetchRandomRecipe = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      const data = await response.json()
      setRecipe(data.meals[0])
    } catch (error) {
      console.error("Error fetching random recipe:", error)
    }
  }

  // Update Meal Automatically Every Few Minutes
  useEffect(() => {
    fetchRandomRecipe()
    const interval = setInterval(fetchRandomRecipe, 5 * 60 * 1000) // 5 minutes interval
    return () => clearInterval(interval)
  }, [])

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
    <section className="py-24 bg-culinary-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-serif font-bold text-primary-800 mb-4">Meal of the Day</h2>
          <p className="text-lg text-primary-600">Discover today's featured culinary delight</p>
        </motion.div>

        {recipe && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-xl rounded-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-[300px] md:h-full">
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    fill
                    className="object-cover rounded-l-2xl"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-3xl font-serif font-bold text-culinary-spice mb-4">{recipe.strMeal}</h3>
                  <p className="text-primary-600 mb-4">
                    Category: <span className="font-semibold">{recipe.strCategory}</span> | Origin:{" "}
                    <span className="font-semibold">{recipe.strArea}</span>
                  </p>
                  <div className="space-y-2 text-primary-700">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Tags:</span>
                      <span>{recipe.strTags ? recipe.strTags : "None"}</span>
                    </div>
                    {recipe.strYoutube && (
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Video Tutorial:</span>
                        <a
                          href={recipe.strYoutube}
                          target="_blank"
                          className="text-culinary-spice underline"
                          rel="noopener noreferrer"
                        >
                          Watch on YouTube
                        </a>
                      </div>
                    )}
                  </div>
                  <Button
                    className="mt-6 w-full bg-culinary-spice hover:bg-culinary-spice/90 text-white"
                    onClick={() => setIsModalOpen(true)}
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        )}
      </div>

      {/* Modal for Detailed Recipe */}
      {recipe && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-white rounded-2xl shadow-xl max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-3xl font-bold text-culinary-spice">{recipe.strMeal}</DialogTitle>
            </DialogHeader>
            <div className="overflow-y-auto max-h-[70vh]">
              <h3 className="text-2xl font-semibold mt-4 mb-2 text-primary-700">Instructions:</h3>
              <ul className="list-disc list-inside text-md text-primary-600 pl-4 space-y-1">
                {formatInstructions(recipe.strInstructions)}
              </ul>
              <h3 className="text-2xl font-semibold mt-4 mb-2 text-primary-700">Nutritional Benefits:</h3>
              <p className="text-md text-primary-600">
                {/* Placeholder for Nutritional Benefits (Add relevant info from API if available) */}
                Nutritional benefits vary depending on the ingredients used. Typically includes proteins, vitamins, and
                essential minerals.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
