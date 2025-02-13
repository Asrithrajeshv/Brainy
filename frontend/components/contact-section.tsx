"use client"
/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-24 bg-culinary-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-primary-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-primary-600 mb-8">
            Have questions, suggestions, or just want to share your culinary creations? We'd love to hear from you!
          </p>
          <Link href="/contact">
            <Button className="bg-culinary-spice hover:bg-culinary-spice/90 text-white px-8 py-3 rounded-full text-lg">
              <Mail className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

