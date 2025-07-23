#!/usr/bin/env node

/**
 * Analytics Testing Script
 * 
 * This script helps test analytics functionality by:
 * 1. Checking if analytics components are properly configured
 * 2. Validating environment variables
 * 3. Testing basic functionality
 * 
 * Usage: node scripts/test-analytics.js
 */

const fs = require('fs');
const path = require('path');

console.log('🧪 Analytics Testing Script\n');

// Check if we're in the right directory
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ Error: package.json not found. Run this script from the project root.');
  process.exit(1);
}

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
console.log('📦 Project:', packageJson.name || 'Unknown');
console.log('🔧 Version:', packageJson.version || 'Unknown');

// Check for required files
const requiredFiles = [
  'app/components/Analytics.tsx',
  'app/components/AnalyticsTester.tsx',
  'app/layout.tsx'
];

console.log('\n📁 Checking required files:');
let allFilesExist = true;

requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✅' : '❌'} ${file}`);
  if (!exists) allFilesExist = false;
});

if (!allFilesExist) {
  console.error('\n❌ Some required files are missing. Please ensure all analytics components are present.');
  process.exit(1);
}

// Check environment variables
console.log('\n🔧 Checking environment variables:');
const envPath = path.join(process.cwd(), '.env.local');
const envExists = fs.existsSync(envPath);

if (envExists) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const envVars = {
    'NEXT_PUBLIC_GA_MEASUREMENT_ID': envContent.includes('NEXT_PUBLIC_GA_MEASUREMENT_ID'),
    'NEXT_PUBLIC_ANALYTICS_DEBUG': envContent.includes('NEXT_PUBLIC_ANALYTICS_DEBUG'),
    'NEXT_PUBLIC_ANALYTICS_TEST_MODE': envContent.includes('NEXT_PUBLIC_ANALYTICS_TEST_MODE')
  };

  Object.entries(envVars).forEach(([varName, exists]) => {
    console.log(`  ${exists ? '✅' : '⚠️'} ${varName}`);
  });
} else {
  console.log('  ⚠️  .env.local not found');
  console.log('  💡 Create .env.local with:');
  console.log('     NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX');
  console.log('     NEXT_PUBLIC_ANALYTICS_DEBUG=true');
  console.log('     NEXT_PUBLIC_ANALYTICS_TEST_MODE=true');
}

// Check Analytics component configuration
console.log('\n🔍 Checking Analytics component configuration:');
const analyticsPath = path.join(process.cwd(), 'app/components/Analytics.tsx');
const analyticsContent = fs.readFileSync(analyticsPath, 'utf8');

const checks = [
  {
    name: 'Google Analytics 4 setup',
    pattern: /gtag\('js', new Date\(\)\)/,
    found: analyticsContent.includes("gtag('js', new Date())")
  },
  {
    name: 'Event tracking function',
    pattern: /function gtag/,
    found: analyticsContent.includes('function gtag')
  },
  {
    name: 'Form submission tracking',
    pattern: /form_submit/,
    found: analyticsContent.includes('form_submit')
  },
  {
    name: 'CTA click tracking',
    pattern: /cta_click/,
    found: analyticsContent.includes('cta_click')
  },
  {
    name: 'Scroll depth tracking',
    pattern: /scroll_depth/,
    found: analyticsContent.includes('scroll_depth')
  },
  {
    name: 'Debug mode support',
    pattern: /debug.*mode/,
    found: analyticsContent.includes('debug') && analyticsContent.includes('mode')
  },
  {
    name: 'Test mode support',
    pattern: /testMode/,
    found: analyticsContent.includes('testMode')
  }
];

checks.forEach(check => {
  console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
});

// Check AnalyticsTester component
console.log('\n🧪 Checking AnalyticsTester component:');
const testerPath = path.join(process.cwd(), 'app/components/AnalyticsTester.tsx');
const testerContent = fs.readFileSync(testerPath, 'utf8');

const testerChecks = [
  {
    name: 'Test event definitions',
    found: testerContent.includes('TEST_EVENTS')
  },
  {
    name: 'Event categories',
    found: testerContent.includes('category')
  },
  {
    name: 'Event logging',
    found: testerContent.includes('setEvents')
  },
  {
    name: 'Export functionality',
    found: testerContent.includes('exportEvents')
  },
  {
    name: 'Test mode toggle',
    found: testerContent.includes('testMode')
  }
];

testerChecks.forEach(check => {
  console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
});

// Check layout integration
console.log('\n📱 Checking layout integration:');
const layoutPath = path.join(process.cwd(), 'app/layout.tsx');
const layoutContent = fs.readFileSync(layoutPath, 'utf8');

const layoutChecks = [
  {
    name: 'Analytics component imported',
    found: layoutContent.includes('import { Analytics }')
  },
  {
    name: 'AnalyticsTester component imported',
    found: layoutContent.includes('import { AnalyticsTester }')
  },
  {
    name: 'Analytics component rendered',
    found: layoutContent.includes('<Analytics')
  },
  {
    name: 'Development mode check',
    found: layoutContent.includes('process.env.NODE_ENV')
  }
];

layoutChecks.forEach(check => {
  console.log(`  ${check.found ? '✅' : '❌'} ${check.name}`);
});

// Summary and recommendations
console.log('\n📊 Summary:');
const totalChecks = checks.length + testerChecks.length + layoutChecks.length;
const passedChecks = checks.filter(c => c.found).length + 
                    testerChecks.filter(c => c.found).length + 
                    layoutChecks.filter(c => c.found).length;

console.log(`  Total checks: ${totalChecks}`);
console.log(`  Passed: ${passedChecks}`);
console.log(`  Failed: ${totalChecks - passedChecks}`);

if (passedChecks === totalChecks) {
  console.log('\n🎉 All checks passed! Your analytics setup looks good.');
  console.log('\n📋 Next steps:');
  console.log('  1. Run "npm run dev" to start development server');
  console.log('  2. Open browser and look for the analytics test panel');
  console.log('  3. Click the 📊 button to open the comprehensive tester');
  console.log('  4. Test various events and check console logs');
  console.log('  5. Verify events in Google Analytics Real-Time reports');
} else {
  console.log('\n⚠️  Some checks failed. Please review the issues above.');
  console.log('\n🔧 Common fixes:');
  console.log('  - Ensure all required files exist');
  console.log('  - Check environment variable configuration');
  console.log('  - Verify component imports and exports');
  console.log('  - Make sure TypeScript compilation succeeds');
}

console.log('\n📚 For detailed testing instructions, see: ANALYTICS_TESTING.md'); 