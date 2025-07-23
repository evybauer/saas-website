'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LucideIcon } from 'lucide-react'
import CountUp from 'react-countup'

interface StatItem {
  icon: LucideIcon
  value: number | string
  suffix?: string
  label: string
  description?: string
  tag?: string
  tagColor?: 'gray' | 'green' | 'purple' | 'orange' | 'blue'
}

interface StatisticsProps {
  stats: StatItem[]
  variant?: 'simple' | 'detailed'
  columns?: 2 | 3 | 4
  className?: string
  animateNumbers?: boolean
  delay?: number
  inView?: boolean
  ref?: (node?: Element) => void
}

export function Statistics({
  stats,
  variant = 'simple',
  columns = 4,
  className = '',
  animateNumbers = false,
  delay = 0,
  inView: externalInView,
  ref: externalRef
}: StatisticsProps) {
  const [internalRef, internalInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const inView = externalInView !== undefined ? externalInView : internalInView
  const ref = externalRef || internalRef

  const gridCols = {
    2: 'grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-4'
  }

  const renderValue = (stat: StatItem) => {
    if (animateNumbers && typeof stat.value === 'number' && inView) {
      return (
        <CountUp
          start={0}
          end={stat.value}
          duration={2}
          separator=","
        />
      )
    }
    return stat.value
  }

  const renderStat = (stat: StatItem, index: number) => {
    if (variant === 'detailed') {
      return (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: delay + index * 0.2, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <stat.icon className="w-8 h-8 text-purple-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-dark-900 mb-2">
            {renderValue(stat)}{stat.suffix}
          </div>
          <div className="text-lg font-semibold text-dark-700 mb-2">{stat.label}</div>
          {stat.description && (
            <p className="text-dark-600">{stat.description}</p>
          )}
        </motion.div>
      )
    }

    return (
      <motion.div
        key={stat.label}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: delay + index * 0.1, duration: 0.5 }}
        className="glass-effect rounded-xl p-8 shadow-lg card-hover text-center"
      >
        <div className="flex justify-center mb-4">
          <stat.icon className="w-8 h-8 text-purple-600" />
        </div>
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-purple-600 mb-2 leading-tight whitespace-nowrap">
          {renderValue(stat)}{stat.suffix}
        </div>
        <div className="text-base md:text-lg font-semibold text-dark-900 mb-3">{stat.label}</div>
        {stat.tag && (
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            stat.tagColor === 'green' ? 'bg-green-100 text-green-700' :
            stat.tagColor === 'purple' ? 'bg-purple-100 text-purple-700' :
            stat.tagColor === 'orange' ? 'bg-orange-100 text-orange-700' :
            stat.tagColor === 'blue' ? 'bg-blue-100 text-blue-700' :
            'bg-gray-100 text-gray-700'
          }`}>
            {stat.tag}
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
      {stats.map((stat, index) => renderStat(stat, index))}
    </motion.div>
  )
} 