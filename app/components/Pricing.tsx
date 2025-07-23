'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star } from 'lucide-react'
import { Button } from './ui/Button'

export function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams getting started with data analytics",
      features: [
        "Up to 10,000 data points",
        "Basic AI insights",
        "5 team members",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses that need advanced analytics",
      features: [
        "Up to 100,000 data points",
        "Advanced AI insights",
        "Unlimited team members",
        "Priority support",
        "All integrations",
        "Custom dashboards",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with complex data needs",
      features: [
        "Unlimited data points",
        "Custom AI models",
        "Dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "SLA guarantee",
        "Training & onboarding"
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding section-gray section-divider">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-dark-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`glass-effect rounded-xl p-8 shadow-lg border-2 ${
                plan.popular 
                  ? 'border-purple-600 relative' 
                  : 'border-white/20'
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="purple-gradient text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-dark-900">{plan.price}</span>
                  <span className="text-dark-600">{plan.period}</span>
                </div>
                <p className="text-dark-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-dark-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "pricing-popular" : "pricing-regular"}
                fullWidth
                dataCta={`pricing-${plan.name.toLowerCase()}`}
              >
                {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Urgency Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-yellow-800">Limited Time Offer</span>
            </div>
            <p className="text-yellow-800">
              Get 20% off your first year when you sign up this month. 
              <span className="font-semibold"> Offer ends in 7 days.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 