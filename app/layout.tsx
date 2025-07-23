import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from './components/Analytics'
import { AnalyticsTester } from './components/AnalyticsTester'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Data Hero - Transform Your Data Analytics with AI-Powered Insights',
  description: 'Data Hero helps businesses unlock the full potential of their data with AI-powered analytics, real-time insights, and actionable recommendations. Start your free trial today.',
  keywords: 'data analytics, AI insights, business intelligence, data visualization, predictive analytics, SaaS',
  authors: [{ name: 'Data Hero Team' }],
  creator: 'Data Hero',
  publisher: 'Data Hero',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://datahero.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Data Hero - AI-Powered Data Analytics Platform',
    description: 'Transform your business with AI-powered data insights. Get real-time analytics, predictive modeling, and actionable recommendations.',
    url: 'https://datahero.com',
    siteName: 'Data Hero',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Data Hero - AI-Powered Data Analytics',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Hero - AI-Powered Data Analytics Platform',
    description: 'Transform your business with AI-powered data insights. Get real-time analytics, predictive modeling, and actionable recommendations.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Data Hero",
              "description": "AI-powered data analytics platform that helps businesses unlock insights from their data",
              "url": "https://datahero.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Free trial available"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1247"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics config={{ debug: true, testMode: process.env.NODE_ENV === 'development' }} />
        {process.env.NODE_ENV === 'development' && <AnalyticsTester />}
      </body>
    </html>
  )
} 