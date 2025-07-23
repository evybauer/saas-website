'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import Image from 'next/image'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-white/20">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/assets/logo/logo.png"
              alt="Data Hero Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <a href="/" className="text-2xl font-bold text-dark-900">
              Data Hero
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-8"
          >
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </motion.nav>

          {/* Desktop CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-4"
          >
              <a
                href="#signin"
                className="text-dark-600 hover:text-purple-600 font-medium transition-colors duration-200"
              >
              Sign In
            </a>
            <Button 
              variant="primary"
              dataCta="header-trial"
            >
              Start Free Trial
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={toggleMenu}
            className="md:hidden p-2 text-dark-600 hover:text-purple-600 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4 border-t border-gray-100">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-dark-600 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a
                href="#signin"
                className="block text-dark-600 hover:text-purple-600 font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </a>
              <Button 
                variant="primary"
                dataCta="mobile-header-trial"
                fullWidth
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
} 