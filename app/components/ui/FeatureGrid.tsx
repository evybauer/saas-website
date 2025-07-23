'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LucideIcon } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
  benefits?: string[]
  actionText?: string
  actionOnClick?: () => void
  tag?: string
  tagColor?: 'purple' | 'gray' | 'green' | 'blue' | 'orange'
}

interface FeatureGridProps {
  features: FeatureItem[]
  variant?: 'detailed' | 'simple'
  columns?: 2 | 3 | 4
  className?: string
  delay?: number
  showBenefits?: boolean
  cardStyle?: 'glass' | 'solid' | 'transparent'
}

export function FeatureGrid({
  features,
  variant = 'detailed',
  columns = 3,
  className = '',
  delay = 0,
  showBenefits = true,
  cardStyle = 'glass'
}: FeatureGridProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const gridCols = {
    2: 'grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }

  const cardStyles = {
    glass: 'glass-effect',
    solid: 'bg-white shadow-lg',
    transparent: 'bg-white/10 backdrop-blur-sm'
  }

  const renderFeature = (feature: FeatureItem, index: number) => {
    if (variant === 'simple') {
      return (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + index * 0.1, duration: 0.6 }}
          className={`${cardStyles[cardStyle]} rounded-lg p-6`}
        >
          <feature.icon className="w-8 h-8 text-white mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-white/80 text-sm mb-4">
            {feature.description}
          </p>
          {feature.actionText && (
            <button 
              className="text-white underline hover:no-underline text-sm"
              onClick={feature.actionOnClick}
            >
              {feature.actionText} →
            </button>
          )}
        </motion.div>
      )
    }

    return (
      <motion.div
        key={feature.title}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: delay + index * 0.2, duration: 0.6 }}
        className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 relative overflow-hidden"
      >
        {/* Tag */}
        {feature.tag && (
          <div className={`absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            feature.tagColor === 'purple' ? 'bg-purple-100 text-purple-700' :
            feature.tagColor === 'green' ? 'bg-green-100 text-green-700' :
            feature.tagColor === 'blue' ? 'bg-blue-100 text-blue-700' :
            feature.tagColor === 'orange' ? 'bg-orange-100 text-orange-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {feature.tag}
          </div>
        )}
        
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center">
            <feature.icon className="w-8 h-8 text-purple-600" />
          </div>
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-dark-900 mb-4 text-center">
          {feature.title}
        </h3>
        
        {/* Description */}
        <p className="text-dark-600 mb-6 text-center leading-relaxed">
          {feature.description}
        </p>
        
        {/* Benefits */}
        {showBenefits && feature.benefits && (
          <ul className="space-y-3 mb-6">
            {feature.benefits.map((benefit, i) => (
              <li key={i} className="flex items-center text-sm text-dark-600">
                <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        )}
        
        {/* Action Button */}
        {feature.actionText && (
          <div className="text-center">
            <button 
              className="inline-flex items-center text-dark-900 font-medium hover:text-purple-600 transition-colors duration-200"
              onClick={feature.actionOnClick}
            >
              {feature.actionText}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid ${gridCols[columns]} gap-8 ${className}`}
    >
      {features.map((feature, index) => renderFeature(feature, index))}
    </motion.div>
  )
} 