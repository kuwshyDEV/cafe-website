'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center bg-cafe-hero bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-cream-50 px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Urban Brew Café
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Crafting exceptional coffee and creating memorable experiences since 2010
          </p>
          <div className="space-x-4">
            <Link href="/menu" className="btn-primary">
              View Menu
            </Link>
            <Link href="/order" className="btn-primary bg-brown-100 text-brown-800">
              Order Online
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="section-title">Our Signature Offerings</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Artisan Coffee', 
              description: 'Carefully roasted beans from around the world',
              image: '/images/coffee.jpg'
            },
            { 
              title: 'Fresh Pastries', 
              description: 'Baked fresh daily in our kitchen',
              image: '/images/pastries.jpg'
            },
            { 
              title: 'Gourmet Meals', 
              description: 'Delicious, locally-sourced ingredients',
              image: '/images/meals.jpg'
            }
          ].map((item) => (
            <motion.div 
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-cream-50 rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-brown-800">
                  {item.title}
                </h3>
                <p className="text-brown-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-brown-100/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Our Story</h2>
            <p className="max-w-2xl mx-auto text-lg text-brown-800 mb-8">
              Urban Brew Café began with a simple passion: to create a warm, welcoming space 
              where community and exceptional coffee come together. From our carefully sourced 
              beans to our handcrafted meals, every detail is designed to delight.
            </p>
            <Link href="/about" className="btn-primary">
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
