"use client"

import { motion } from "framer-motion"
import { Book } from "lucide-react"
import "boxicons"

export function SearchSection() {
  const handleRedirectIngredients = () => {
    window.location.href = "http://127.0.0.1:8000/ingredients/"; // Redirects to Django for ingredient search
  };
  
  const handleRedirectImages = () => {
    window.location.href = "http://127.0.0.1:8000/image/"; // Redirects to Django for image search
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
            Enter your available ingredients or upload an image, and we’ll suggest amazing dishes you can prepare. 
            Minimize waste and maximize flavors!
          </p>
        </motion.div>

        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 flex flex-col md:flex-row gap-10"
        >
          {/* Search by Ingredients Button */}
          <motion.button
            onClick={handleRedirectIngredients}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-600 
                      p-px shadow-lg hover:shadow-2xl transition-shadow duration-300 w-72 h-28 flex flex-col items-center justify-center"
          >
            <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
              <Book className="w-12 h-12 text-yellow-600 mb-3" />
              <h3 className="text-xl font-semibold text-primary-800">Search by Ingredients</h3>
            </div>
          </motion.button>

          {/* Search by Images Button */}
          <motion.button
  onClick={handleRedirectImages}
  whileHover={{ scale: 1.08 }}
  transition={{ duration: 0.3 }}
  className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-400 to-green-600 
            p-px shadow-lg hover:shadow-2xl transition-shadow duration-300 w-72 h-28 flex flex-col items-center justify-center"
>
  <div className="relative bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
    {/* Boxicon for Image Search with Animation */}
    <div
      dangerouslySetInnerHTML={{
        __html: '<box-icon name="camera" type="solid" animation="tada" rotate="90" color="#29a407" class="mb-3 text-5xl"></box-icon>',
      }}
    />
    <h3 className="text-xl font-semibold text-primary-800">Search by Images</h3>
  </div>
</motion.button>
</motion.div>      
      </div>
    </section>
  )
}
