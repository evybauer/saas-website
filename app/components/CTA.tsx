'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from './ui/Button'

export function CTA() {
  return (
    <section className="section-padding bg-white section-divider">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to see Data Hero in action?
            </h2>
            <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Data Hero to make better decisions with their data.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="primary"
                icon={ArrowRight}
                iconPosition="right"
                dataCta="cta-primary"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="secondary"
                icon={Play}
                iconPosition="left"
                dataCta="cta-secondary"
                size="lg"
                className="bg-white border-2 border-white text-slate-800 hover:bg-slate-100 hover:border-slate-200 shadow-lg hover:shadow-xl font-semibold"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 