"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import { Brain, Utensils, Zap, Clock } from "lucide-react"

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Smart Recommendations",
    description: "AI-powered recipe suggestions based on your preferences and dietary needs.",
  },
  {
    icon: <Utensils className="w-8 h-8" />,
    title: "Step-by-Step Guidance",
    description: "Interactive cooking instructions with voice commands for hands-free cooking.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Ingredient Substitutions",
    description: "Intelligent suggestions for ingredient replacements based on what you have.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Time Management",
    description: "Smart timers and reminders to help you multitask efficiently in the kitchen.",
  },
]

export function ProjectInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-6">Cook Smarter, Not Harder</h2>
          <p className="text-lg text-primary-600">
            Brainy Cook combines cutting-edge AI technology with culinary expertise to revolutionize your cooking
            experience. Here's how we make your time in the kitchen more efficient and enjoyable:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-culinary-cream rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow 
                         duration-300 transform hover:-translate-y-1"
            >
              <div
                className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center 
                            mb-6 mx-auto text-primary-600"
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif text-primary-800 mb-3 text-center">{feature.title}</h3>
              <p className="text-primary-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

