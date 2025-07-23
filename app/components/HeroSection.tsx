'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Zap, Shield, TrendingUp } from 'lucide-react'
import { Button } from './ui/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden bg-pattern">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 border border-green-200 rounded-full text-sm font-medium mb-6"
            >
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Analytics Platform
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight"
            >
              Transform Your Data Into
              <span className="gradient-text block pb-2">Actionable Insights</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-dark-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Stop drowning in data. Data Hero's AI-powered platform helps you uncover hidden patterns, 
              predict trends, and make confident business decisions in real-time.
            </motion.p>

            {/* Pain Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-8"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                 <div className="flex items-center text-dark-600">
                   <Shield className="w-5 h-5 mr-2 text-purple-600" />
                   <span className="text-sm">No more manual reporting</span>
                 </div>
                 <div className="flex items-center text-dark-600">
                   <TrendingUp className="w-5 h-5 mr-2 text-purple-600" />
                   <span className="text-sm">Real-time insights</span>
                 </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                dataCta="hero-primary"
                className="group"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="secondary"
                icon={Play}
                iconPosition="left"
                dataCta="hero-secondary"
                className="group"
              >
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
          <div className="relative glass-effect rounded-2xl shadow-2xl p-8">
               {/* Dashboard Mockup */}
               <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm opacity-70">Data Hero Dashboard</div>
                </div>
                
                {/* Chart Placeholder */}
                <div className="space-y-4">
                  <div className="h-4 bg-dark-700 rounded animate-pulse"></div>
                  <div className="h-4 bg-dark-700 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-dark-700 rounded w-1/2 animate-pulse"></div>
                </div>
                
                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="text-xs opacity-70">Revenue</div>
                    <div className="text-lg font-bold text-green-400">$2.4M</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="text-xs opacity-70">Growth</div>
                    <div className="text-lg font-bold text-purple-400">+23%</div>
                  </div>
                  <div className="bg-dark-700 rounded-lg p-3">
                    <div className="text-xs opacity-70">Users</div>
                    <div className="text-lg font-bold text-purple-400">12.5K</div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-effect rounded-lg shadow-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-700">Live Data</span>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass-effect rounded-lg shadow-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-slate-700">AI Insights</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 