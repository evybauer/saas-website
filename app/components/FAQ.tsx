'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees. Start your free trial today and only pay when you're ready to continue."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not completely satisfied."
    }
  ]

  return (
    <section className="section-padding section-white section-divider">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="text-sm font-medium text-purple-600 mb-2">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-lg font-bold text-dark-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-dark-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 