"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-secondary py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            CulinaryDelight
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

