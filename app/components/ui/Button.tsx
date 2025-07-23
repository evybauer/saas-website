'use client'

import { ReactNode } from 'react'
import { LucideIcon } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'cta' | 'pricing-popular' | 'pricing-regular'
  size?: 'sm' | 'md' | 'lg'
  icon?: LucideIcon
  iconPosition?: 'left' | 'right'
  className?: string
  onClick?: () => void
  dataCta?: string
  disabled?: boolean
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  onClick,
  dataCta,
  disabled = false,
  fullWidth = false
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 shadow-sm hover:shadow-md',
    cta: 'bg-white text-purple-600 hover:bg-gray-50 shadow-lg',
    'pricing-popular': 'purple-gradient-light hover:from-purple-600 hover:to-purple-700 text-white',
    'pricing-regular': 'bg-slate-100 hover:bg-slate-200 text-dark-900'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      data-cta={dataCta}
    >
      <div className="flex items-center justify-center">
        {Icon && iconPosition === 'left' && (
          <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} mr-2 group-hover:translate-x-1 transition-transform`} />
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <Icon className={`${size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'} ml-2 group-hover:translate-x-1 transition-transform`} />
        )}
      </div>
    </button>
  )
} 