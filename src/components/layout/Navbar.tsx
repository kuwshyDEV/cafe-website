'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/locations', label: 'Locations' },
  { href: '/contact', label: 'Contact' },
  { href: '/order', label: 'Order Online' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-cream-50/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-brown-800">
          Urban Brew Café
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-brown-800 focus:outline-none"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Desktop Navigation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="hidden md:flex space-x-6"
        >
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className="text-brown-500 hover:text-brown-800 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-cream-50 shadow-lg"
          >
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-brown-500 hover:bg-brown-100/10"
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
