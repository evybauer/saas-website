# Analytics Testing Guide

This guide covers how to test analytics in your SaaS website using the built-in testing tools.

## 🚀 Quick Start

### 1. Development Mode Testing
When running in development mode (`npm run dev`), you'll automatically see:
- **Analytics Test Panel**: A floating panel in the bottom-left corner with test buttons
- **Analytics Tester**: A comprehensive testing interface (📊 button in bottom-right)
- **Console Logging**: All analytics events logged to browser console

### 2. Production Testing
For production testing, you can:
- Use browser developer tools to inspect network requests
- Check Google Analytics Real-Time reports
- Use Google Analytics Debugger extension

## 🧪 Testing Methods

### Method 1: Built-in Test Panel (Development Only)
The analytics component automatically adds a test panel in development mode:

```typescript
// Automatically enabled in development
<Analytics config={{ debug: true, testMode: true }} />
```

**Features:**
- Test custom events
- Test purchase events
- Real-time event logging
- Prevents actual form submissions/CTA actions

### Method 2: Analytics Tester Component
A comprehensive testing interface with:

**Features:**
- Event categorization (Navigation, Conversion, Engagement, E-commerce)
- Real-time event log with status tracking
- Export test results as JSON
- Test mode toggle
- Visual feedback for all events

**Usage:**
1. Click the 📊 button in bottom-right corner
2. Select event categories and specific events
3. Monitor the event log for success/error status
4. Export results for analysis

### Method 3: Browser Developer Tools

#### Console Logging
All analytics events are logged to console in debug mode:
```javascript
🔍 Analytics Event: ['event', 'cta_click', {cta_type: 'hero_cta', ...}]
📊 Tracked Event: {event_name: 'cta_click', cta_type: 'hero_cta', ...}
```

#### Network Tab
Monitor Google Analytics requests:
1. Open Developer Tools → Network tab
2. Filter by "google-analytics" or "gtag"
3. Trigger events and watch for requests to:
   - `https://www.google-analytics.com/g/collect`
   - `https://www.googletagmanager.com/gtag/js`

#### Data Layer Inspection
```javascript
// In console, inspect the data layer
console.log(window.dataLayer)
```

### Method 4: Google Analytics Real-Time Reports
1. Go to Google Analytics → Reports → Realtime
2. Monitor events as they happen
3. Check for:
   - Page views
   - Custom events
   - User engagement

## 📊 Event Types to Test

### 1. Page Views
- **Event**: `page_view`
- **Trigger**: Automatic on page load
- **Test**: Navigate between pages

### 2. Form Submissions
- **Event**: `form_submit`
- **Trigger**: Form submit
- **Test**: Submit any form on the site
- **Parameters**: `form_name`, `form_action`

### 3. CTA Clicks
- **Event**: `cta_click`
- **Trigger**: Click on elements with `data-cta` attribute
- **Test**: Click any CTA button
- **Parameters**: `cta_type`, `cta_text`, `cta_href`

### 4. Scroll Depth
- **Event**: `scroll_depth`
- **Trigger**: Scrolling to 25%, 50%, 75%, 100%
- **Test**: Scroll through the page
- **Parameters**: `scroll_percentage`

### 5. Custom Events
- **Event**: Various custom events
- **Trigger**: Manual via test panel
- **Test**: Use the test panel buttons

## 🔧 Configuration Options

### Analytics Component Config
```typescript
<Analytics config={{
  measurementId: 'GA_MEASUREMENT_ID', // Your GA4 ID
  debug: true,                        // Enable console logging
  testMode: true                      // Prevent actual actions
}} />
```

### Environment Variables
```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ANALYTICS_DEBUG=true
NEXT_PUBLIC_ANALYTICS_TEST_MODE=true
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Events Not Sending
**Symptoms:** No network requests to Google Analytics
**Solutions:**
- Check if `gtag` is loaded: `console.log(window.gtag)`
- Verify measurement ID is correct
- Check browser console for errors

#### 2. Events Sending but Not Appearing in GA
**Symptoms:** Network requests successful but no data in GA
**Solutions:**
- Check GA4 property settings
- Verify measurement ID matches GA property
- Check for ad blockers
- Wait 24-48 hours for data to appear

#### 3. Test Mode Not Working
**Symptoms:** Forms still submitting, CTAs still navigating
**Solutions:**
- Ensure `testMode: true` is set
- Check if component is in development mode
- Verify event listeners are properly attached

### Debug Commands
```javascript
// Check if analytics is loaded
console.log('GTAG:', window.gtag)
console.log('Data Layer:', window.dataLayer)

// Manually trigger an event
window.gtag('event', 'test_event', {
  event_category: 'test',
  event_label: 'manual_test'
})

// Check test panel
window.testAnalytics('custom_event')
```

## 📈 Testing Checklist

### Before Testing
- [ ] Set up Google Analytics 4 property
- [ ] Configure measurement ID
- [ ] Enable debug mode
- [ ] Open browser developer tools

### During Testing
- [ ] Test page views
- [ ] Test form submissions
- [ ] Test CTA clicks
- [ ] Test scroll depth tracking
- [ ] Test custom events
- [ ] Verify event parameters
- [ ] Check console logging
- [ ] Monitor network requests

### After Testing
- [ ] Export test results
- [ ] Verify events in GA Real-Time
- [ ] Check for any errors
- [ ] Document any issues found

## 🎯 Best Practices

### 1. Test in Multiple Environments
- Development (with debug mode)
- Staging (production-like)
- Production (final verification)

### 2. Use Consistent Test Data
- Use recognizable test values
- Include timestamps in test events
- Tag test events appropriately

### 3. Monitor Performance
- Check for analytics blocking page load
- Monitor bundle size impact
- Test on different devices/browsers

### 4. Document Test Results
- Keep logs of test sessions
- Document any configuration changes
- Track event parameter accuracy

## 🔗 Useful Tools

### Browser Extensions
- **Google Analytics Debugger**: Enhanced GA debugging
- **Tag Assistant**: Google's official testing tool
- **AdBlock Plus**: Test with ad blockers disabled

### Online Tools
- **Google Analytics Real-Time**: Monitor live events
- **GTM Preview Mode**: Test Google Tag Manager setup
- **WebPageTest**: Performance impact testing

### Development Tools
- **React Developer Tools**: Component inspection
- **Network Tab**: Request monitoring
- **Console**: Event logging and debugging

## 📝 Example Test Session

```javascript
// 1. Open browser console
// 2. Navigate to homepage
// 3. Check for page_view event
console.log('Page view event:', window.dataLayer.find(e => e[0] === 'event' && e[1] === 'page_view'))

// 4. Click a CTA button
// 5. Check for cta_click event
console.log('CTA click events:', window.dataLayer.filter(e => e[0] === 'event' && e[1] === 'cta_click'))

// 6. Scroll to bottom
// 7. Check for scroll_depth events
console.log('Scroll depth events:', window.dataLayer.filter(e => e[0] === 'event' && e[1] === 'scroll_depth'))

// 8. Submit a form
// 9. Check for form_submit event
console.log('Form submit events:', window.dataLayer.filter(e => e[0] === 'event' && e[1] === 'form_submit'))
```

This testing setup ensures your analytics are working correctly and provides comprehensive debugging capabilities for development and production environments. 