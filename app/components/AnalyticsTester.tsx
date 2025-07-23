'use client'

import { useState, useEffect } from 'react'

interface TestEvent {
  id: string
  name: string
  category: string
  parameters?: Record<string, any>
}

const TEST_EVENTS: TestEvent[] = [
  {
    id: 'page_view',
    name: 'Page View',
    category: 'Navigation'
  },
  {
    id: 'form_submit',
    name: 'Form Submit',
    category: 'Conversion',
    parameters: {
      form_name: 'contact_form',
      form_action: '/api/contact'
    }
  },
  {
    id: 'cta_click',
    name: 'CTA Click',
    category: 'Conversion',
    parameters: {
      cta_type: 'hero_cta',
      cta_text: 'Start Free Trial',
      cta_href: '/signup'
    }
  },
  {
    id: 'scroll_depth',
    name: 'Scroll Depth',
    category: 'Engagement',
    parameters: {
      scroll_percentage: 50
    }
  },
  {
    id: 'purchase',
    name: 'Purchase',
    category: 'E-commerce',
    parameters: {
      value: 99.99,
      currency: 'USD',
      items: [{ id: 'premium_plan', name: 'Premium Plan', price: 99.99 }]
    }
  },
  {
    id: 'sign_up',
    name: 'Sign Up',
    category: 'Conversion',
    parameters: {
      method: 'email',
      plan: 'free_trial'
    }
  },
  {
    id: 'video_play',
    name: 'Video Play',
    category: 'Engagement',
    parameters: {
      video_title: 'Product Demo',
      video_duration: 120
    }
  }
]

export function AnalyticsTester() {
  const [events, setEvents] = useState<Array<TestEvent & { timestamp: string; status: 'pending' | 'sent' | 'error' }>>([])
  const [isVisible, setIsVisible] = useState(false)
  const [testMode, setTestMode] = useState(true)

  const triggerTestEvent = (testEvent: TestEvent) => {
    const eventWithMeta = {
      ...testEvent,
      timestamp: new Date().toISOString(),
      status: 'pending' as const
    }
    
    setEvents(prev => [eventWithMeta, ...prev.slice(0, 9)]) // Keep last 10 events

    try {
      if (window.gtag) {
        window.gtag('event', testEvent.id, {
          ...testEvent.parameters,
          test_event: true,
          test_timestamp: new Date().toISOString()
        })
        setEvents(prev => prev.map(e => 
          e.id === testEvent.id && e.timestamp === eventWithMeta.timestamp 
            ? { ...e, status: 'sent' }
            : e
        ))
      } else {
        throw new Error('Google Analytics not loaded')
      }
    } catch (error) {
      setEvents(prev => prev.map(e => 
        e.id === testEvent.id && e.timestamp === eventWithMeta.timestamp 
          ? { ...e, status: 'error' }
          : e
      ))
      console.error('Failed to send analytics event:', error)
    }
  }

  const clearEvents = () => {
    setEvents([])
  }

  const exportEvents = () => {
    const dataStr = JSON.stringify(events, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `analytics-test-${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const categories = Array.from(new Set(TEST_EVENTS.map(e => e.category)))

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
        title="Open Analytics Tester"
      >
        📊
      </button>
    )
  }

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      width: '400px',
      maxHeight: '80vh',
      background: '#1a1a1a',
      color: 'white',
      borderRadius: '12px',
      padding: '20px',
      zIndex: 1001,
      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      fontFamily: 'monospace',
      fontSize: '14px',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ margin: 0, color: '#00ff88' }}>🧪 Analytics Tester</h3>
        <button
          onClick={() => setIsVisible(false)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ff6b6b',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
      </div>

      {/* Test Mode Toggle */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <input
            type="checkbox"
            checked={testMode}
            onChange={(e) => setTestMode(e.target.checked)}
            style={{ width: '16px', height: '16px' }}
          />
          Test Mode (prevents actual actions)
        </label>
      </div>

      {/* Event Categories */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#ffd93d' }}>Test Events</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {categories.map(category => (
            <div key={category}>
              <div style={{ 
                color: '#888', 
                fontSize: '12px', 
                textTransform: 'uppercase',
                marginBottom: '5px'
              }}>
                {category}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {TEST_EVENTS
                  .filter(e => e.category === category)
                  .map(event => (
                    <button
                      key={event.id}
                      onClick={() => triggerTestEvent(event)}
                      style={{
                        background: '#333',
                        color: 'white',
                        border: '1px solid #555',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = '#444'
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = '#333'
                      }}
                    >
                      {event.name}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Log */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <h4 style={{ margin: 0, color: '#ffd93d' }}>Event Log</h4>
          <div style={{ display: 'flex', gap: '5px' }}>
            <button
              onClick={clearEvents}
              style={{
                background: '#ff6b6b',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                padding: '3px 8px',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              Clear
            </button>
            <button
              onClick={exportEvents}
              style={{
                background: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                padding: '3px 8px',
                fontSize: '11px',
                cursor: 'pointer'
              }}
            >
              Export
            </button>
          </div>
        </div>
        
        <div style={{ 
          flex: 1, 
          overflow: 'auto', 
          background: '#000', 
          borderRadius: '4px',
          padding: '10px',
          fontSize: '11px'
        }}>
          {events.length === 0 ? (
            <div style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
              No events triggered yet
            </div>
          ) : (
            events.map((event, index) => (
              <div key={`${event.id}-${event.timestamp}`} style={{ marginBottom: '10px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '5px'
                }}>
                  <span style={{ color: '#00ff88', fontWeight: 'bold' }}>
                    {event.name}
                  </span>
                  <span style={{ 
                    color: event.status === 'sent' ? '#00ff88' : 
                           event.status === 'error' ? '#ff6b6b' : '#ffd93d',
                    fontSize: '10px'
                  }}>
                    {event.status.toUpperCase()}
                  </span>
                </div>
                <div style={{ color: '#888', fontSize: '10px' }}>
                  {new Date(event.timestamp).toLocaleTimeString()}
                </div>
                {event.parameters && (
                  <div style={{ 
                    background: '#111', 
                    padding: '5px', 
                    borderRadius: '3px',
                    marginTop: '5px',
                    fontSize: '10px',
                    color: '#ccc'
                  }}>
                    {JSON.stringify(event.parameters, null, 2)}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Status */}
      <div style={{ 
        marginTop: '15px', 
        padding: '10px', 
        background: '#333', 
        borderRadius: '4px',
        fontSize: '11px'
      }}>
        <div>Mode: <span style={{ color: testMode ? '#ffd93d' : '#00ff88' }}>
          {testMode ? 'TEST' : 'PRODUCTION'}
        </span></div>
        <div>Events: <span style={{ color: '#00ff88' }}>{events.length}</span></div>
        <div>GA Loaded: <span style={{ color: window.gtag ? '#00ff88' : '#ff6b6b' }}>
          {window.gtag ? 'YES' : 'NO'}
        </span></div>
      </div>
    </div>
  )
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
} 