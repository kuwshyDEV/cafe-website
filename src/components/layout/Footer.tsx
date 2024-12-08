'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brown-800 text-cream-50 py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Urban Brew Café</h3>
          <p className="text-sm text-cream-100">
            Crafting exceptional coffee experiences since 2010. 
            Committed to quality, sustainability, and community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <nav className="space-y-2">
            <Link href="/" className="hover:text-cream-100 transition-colors">Home</Link>
            <Link href="/menu" className="hover:text-cream-100 transition-colors">Menu</Link>
            <Link href="/about" className="hover:text-cream-100 transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-cream-100 transition-colors">Contact</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <address className="not-italic space-y-2">
            <p>123 Brew Street</p>
            <p>Urban City, UC 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@urbanbrew.cafe</p>
          </address>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            {[
              { name: 'Facebook', href: 'https://facebook.com', icon: '🔗' },
              { name: 'Instagram', href: 'https://instagram.com', icon: '🔗' },
              { name: 'Twitter', href: 'https://twitter.com', icon: '🔗' }
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-2xl hover:text-cream-100"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-brown-500">
        <p className="text-sm">
          &copy; {currentYear} Urban Brew Café. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
