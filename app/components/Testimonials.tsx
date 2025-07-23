'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Quote } from 'lucide-react'
import photo1 from '../../public/assets/photos/photo-1.png'
import photo2 from '../../public/assets/photos/photo-2.png'
import photo3 from '../../public/assets/photos/photo-3.png'

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Analytics",
      company: "TechCorp",
      content: "Data Hero transformed how we approach business intelligence. What used to take our team days now happens in minutes. The AI insights have helped us identify revenue opportunities we never would have found manually.",
      rating: 5,
      avatar: photo1,
      impact: "300% faster analysis",
      impactColor: "green",
      companyType: "Enterprise"
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder & CEO",
      company: "GrowthLabs",
      content: "As a startup, we needed enterprise-level analytics without the enterprise price tag. Data Hero delivered exactly that. The real-time dashboards have become essential for our daily operations and investor presentations.",
      rating: 5,
      avatar: photo2,
      impact: "$2M+ revenue impact",
      impactColor: "green",
      companyType: "Startup"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data Science",
      company: "InnovateMed",
      content: "The predictive analytics capabilities are incredible. We've reduced patient readmission rates by 25% using Data Hero's AI recommendations. The security and compliance features give us complete peace of mind.",
      rating: 5,
      avatar: photo3,
      impact: "25% improved outcomes",
      impactColor: "green",
      companyType: "Healthcare"
    },
  ]

  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "10,000+", label: "Happy Customers" },
    { value: "99.9%", label: "Uptime SLA" }
  ]

  return (
    <section id="testimonials" className="section-padding section-white section-divider">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-medium text-purple-600 mb-2">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Loved by businesses{' '}
            <span className="text-purple-600">worldwide</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            See how companies of all sizes are using Data Hero to make smarter, faster decisions and drive real business results.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-dark-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              
              {/* Star Rating */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-red-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-dark-600 mb-6 text-center leading-relaxed flex-grow">
                "{testimonial.content}"
              </p>

              {/* Impact Tag */}
              {testimonial.impact && (
                <div className="flex justify-center mb-6">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    testimonial.impactColor === 'green' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {testimonial.impact}
                  </div>
                </div>
              )}

              {/* Customer Info - Now aligned at bottom */}
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar.src} 
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-dark-900">{testimonial.name}</div>
                    <div className="text-sm text-dark-600">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                {testimonial.companyType && (
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                    {testimonial.companyType}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 