'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Star, Users, TrendingUp, Award, Shield, Zap } from 'lucide-react'
import photo4 from '../../public/assets/photos/photo-4.png'
import photo5 from '../../public/assets/photos/photo-5.png'
import photo6 from '../../public/assets/photos/photo-6.png'

export function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { 
      icon: Users, 
      value: 10000, 
      suffix: '+', 
      label: 'Active Users',
      tag: '+15% this month',
      tagColor: 'gray'
    },
    { 
      icon: Zap, 
      value: 1000000000, 
      suffix: '+', 
      label: 'Data Points Processed',
      tag: 'Daily',
      tagColor: 'gray'
    },
    { 
      icon: TrendingUp, 
      value: 98, 
      suffix: '%', 
      label: 'Customer Satisfaction',
      tag: '4.9/5 stars',
      tagColor: 'gray'
    },
    { 
      icon: Award, 
      value: 500, 
      suffix: '+', 
      label: 'Enterprise Clients',
      tag: 'Fortune 500',
      tagColor: 'purple'
    }
  ]

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Marketing Director",
      company: "RetailFlow",
      image: photo4,
      content: "Data Hero's customer segmentation tools have revolutionized our marketing campaigns. We've seen a 40% increase in conversion rates and our ROI has never been better.",
      rating: 5,
      logo: "/api/placeholder/80/40"
    },
    {
      name: "David Kim",
      role: "Operations Manager",
      company: "LogiTech Solutions",
      image: photo6,
      content: "The real-time monitoring and alerting features have transformed our operations. We've reduced downtime by 60% and our customer satisfaction scores have skyrocketed.",
      rating: 5,
      logo: "/api/placeholder/80/40"
    },
    {
      name: "Amanda Foster",
      role: "Chief Financial Officer",
      company: "FinServe Pro",
      image: photo5,
      content: "As a financial services company, we need the highest level of data security and compliance. Data Hero not only meets but exceeds our requirements.",
      rating: 5,
      logo: "/api/placeholder/80/40"
    }
  ]

  const trustBadges = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "GDPR Compliant", icon: Shield },
    { name: "ISO 27001", icon: Shield },
    { name: "HIPAA Ready", icon: Shield }
  ]

  return (
    <section className="section-padding section-white relative overflow-hidden section-divider">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-100 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-float"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Statistics */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-5 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 card-hover text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-dark-900 mb-2 break-words">
                {inView && (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2}
                    separator=","
                  />
                )}
                {stat.suffix}
              </div>
              <div className="text-sm text-dark-600 mb-3 leading-tight">{stat.label}</div>
              {stat.tag && (
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                  stat.tagColor === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                }`}>
                  {stat.tag}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex flex-wrap justify-center items-center gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-20"></div>
                </div>
                <span className="text-sm font-medium text-dark-700">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-dark-600 max-w-2xl mx-auto">
              Join thousands of companies that trust Data Hero to transform their data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                className="glass-effect rounded-xl p-6 shadow-lg card-hover flex flex-col h-full"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-dark-600 mb-6 italic flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Author - Now aligned at bottom */}
                <div className="flex items-end justify-between mt-auto">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={testimonial.image.src} 
                      alt={`${testimonial.name} - ${testimonial.role}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-dark-900">{testimonial.name}</div>
                      <div className="text-sm text-dark-600">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="purple-gradient rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                Case Study
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                How TechFlow Inc Increased Revenue by 150%
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Using Data Hero's predictive analytics, TechFlow discovered untapped market opportunities 
                and optimized their pricing strategy, resulting in a 150% revenue increase in just 6 months.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">150%</div>
                  <div className="text-sm opacity-80">Revenue Increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">6</div>
                  <div className="text-sm opacity-80">Months</div>
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-5/6 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 