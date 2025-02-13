"use client"

import { motion } from "framer-motion"
import { Book } from "lucide-react"

export function SearchSection() {
  const handleRedirect = () => {
    window.location.href = "http://127.0.0.1:8000/ingredients/"; // Redirects to Django
  };

  return (
    <section className="py-24 bg-culinary-cream flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Title & Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl space-y-6"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-800 leading-tight">
            Find the Best Recipes <br className="hidden md:block" /> With What You Have
          </h2>
          <p className="text-lg text-primary-600">
            Enter your available ingredients, and we’ll suggest amazing dishes you can prepare. 
            Minimize waste and maximize flavors!
          </p>
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <motion.button
            onClick={handleRedirect} // Redirect function
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 
                       p-px shadow-xl hover:shadow-2xl transition-shadow duration-300 w-64 h-20"
          >
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
              <Book className="w-8 h-8 text-yellow-600 mb-2" />
              <h3 className="text-lg font-semibold text-primary-800">Search by Ingredients</h3>
            </div>
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}
