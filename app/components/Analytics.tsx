'use client'

import { useEffect } from 'react'

interface AnalyticsConfig {
  measurementId?: string
  debug?: boolean
  testMode?: boolean
}

export function Analytics({ config }: { config?: AnalyticsConfig }) {
  const measurementId = config?.measurementId || 'GA_MEASUREMENT_ID'
  const isDebug = config?.debug || process.env.NODE_ENV === 'development'
  const isTestMode = config?.testMode || false

  useEffect(() => {
    // Google Analytics 4 setup
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
      if (isDebug) {
        console.log('🔍 Analytics Event:', args)
      }
    }
    gtag('js', new Date())
    gtag('config', measurementId, {
      debug_mode: isDebug,
      send_page_view: !isTestMode
    })

    // Track conversion events
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
      const eventData = {
        event_name: eventName,
        ...parameters,
        timestamp: new Date().toISOString(),
        test_mode: isTestMode
      }
      
      gtag('event', eventName, eventData)
      
      if (isDebug) {
        console.log('📊 Tracked Event:', eventData)
      }
    }

    // Track form submissions
    const forms = document.querySelectorAll('form')
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault() // Prevent actual submission in test mode
        trackEvent('form_submit', {
          form_name: form.getAttribute('data-form-name') || 'contact_form',
          form_action: form.getAttribute('action') || 'unknown'
        })
        
        if (isTestMode) {
          console.log('🧪 Test Mode: Form submission prevented')
          // Show success message in test mode
          const successMsg = document.createElement('div')
          successMsg.textContent = '✅ Form submitted (test mode)'
          successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: green; color: white; padding: 10px; border-radius: 5px; z-index: 1000;'
          document.body.appendChild(successMsg)
          setTimeout(() => successMsg.remove(), 3000)
        }
      })
    })

    // Track CTA clicks
    const ctaButtons = document.querySelectorAll('[data-cta]')
    ctaButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (isTestMode) {
          e.preventDefault()
          console.log('🧪 Test Mode: CTA click prevented')
        }
        
        trackEvent('cta_click', {
          cta_type: button.getAttribute('data-cta'),
          cta_text: button.textContent?.trim(),
          cta_href: button.getAttribute('href') || 'unknown'
        })
        
        if (isTestMode) {
          // Show success message in test mode
          const successMsg = document.createElement('div')
          successMsg.textContent = `✅ CTA clicked: ${button.getAttribute('data-cta')} (test mode)`
          successMsg.style.cssText = 'position: fixed; top: 20px; right: 20px; background: blue; color: white; padding: 10px; border-radius: 5px; z-index: 1000;'
          document.body.appendChild(successMsg)
          setTimeout(() => successMsg.remove(), 3000)
        }
      })
    })

    // Track scroll depth
    let maxScroll = 0
    const trackScroll = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent
        if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
          trackEvent('scroll_depth', {
            scroll_percentage: maxScroll
          })
        }
      }
    }

    window.addEventListener('scroll', trackScroll)

    // Track page views
    if (!isTestMode) {
      trackEvent('page_view', {
        page_title: document.title,
        page_url: window.location.href
      })
    }

    // Add global test function for manual testing (only in debug mode)
    if (isDebug) {
      window.testAnalytics = (eventName: string) => {
        trackEvent(eventName, {
          test_event: true,
          test_timestamp: new Date().toISOString()
        })
      }
    }

    return () => {
      window.removeEventListener('scroll', trackScroll)
      if (isDebug) {
        delete window.testAnalytics
      }
    }
  }, [measurementId, isDebug, isTestMode])

  return null
}

declare global {
  interface Window {
    dataLayer: any[]
    testAnalytics?: (eventName: string) => void
  }
} 