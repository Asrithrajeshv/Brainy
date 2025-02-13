"use client"
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function DailyMeal() {
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-xl">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-[300px] md:h-full">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Daily Special Meal"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary-800 mb-4">Grilled Salmon with Herbs</h3>
                <p className="text-primary-600 mb-6">
                  Fresh Atlantic salmon, seasoned with herbs and lemon, grilled to perfection. Served with roasted
                  vegetables and quinoa.
                </p>
                <div className="space-y-2 text-primary-700">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Prep Time:</span>
                    <span>20 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Cook Time:</span>
                    <span>25 mins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Servings:</span>
                    <span>4 people</span>
                  </div>
                </div>
                <Button className="mt-6 w-full bg-culinary-spice hover:bg-culinary-spice/90 text-white">
                  View Recipe
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

