"use client"

import Link from "next/link"

export function NavBar() {
  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            Brainy Cook
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors">
              Contact
            </Link>
            <a
              href="http://127.0.0.1:8000/ingredients/"
              target="_blank"
              className="text-white hover:text-accent transition-colors"
            >
              Recipes
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}






























































































































































