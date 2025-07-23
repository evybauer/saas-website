'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Target, Award } from 'lucide-react'
import { Button } from './ui/Button'
import { Statistics } from './ui/Statistics'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Team Members",
      description: "Experts in data science, engineering, and design"
    },
    {
      icon: Target,
      value: "5+",
      label: "Years Experience",
      description: "Building AI-powered analytics solutions"
    },
    {
      icon: Award,
      value: "15+",
      label: "Industry Awards",
      description: "Recognized for innovation and excellence"
    }
  ]

  return (
    <section id="about" className="section-padding section-gray section-divider">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-medium text-purple-600 mb-2">About</div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            About <span className="text-purple-600">Data Hero</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            We're on a mission to democratize data analytics and make AI-powered insights 
            accessible to every business, regardless of size or technical expertise.
          </p>
        </motion.div>

        <Statistics 
          stats={stats}
          variant="detailed"
          columns={3}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-dark-600 max-w-2xl mx-auto mb-8">
            Founded in 2019, Data Hero has helped thousands of companies transform their 
            data into actionable insights. Our platform combines cutting-edge AI technology 
            with intuitive design to make data analytics accessible to everyone.
          </p>
          <Button variant="primary">
            Learn More About Us
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 