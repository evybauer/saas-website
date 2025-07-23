'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, Shield, BarChart3, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react'

export function FeatureShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Get instant insights with our advanced machine learning algorithms that automatically detect patterns and anomalies in your data.",
      benefits: ["Automated pattern detection", "Predictive insights", "Anomaly alerts"],
      tag: "Most Popular",
      tagColor: "purple",
      actionText: "Learn More"
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process millions of data points in real-time with our high-performance infrastructure built for scale.",
      benefits: ["Sub-second query times", "Live data streaming", "Instant notifications"],
      tag: "Performance",
      tagColor: "gray",
      actionText: "Learn More"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption, SSO integration, and comprehensive audit trails.",
      benefits: ["SOC 2 certified", "GDPR compliant", "Advanced encryption"],
      tag: "Enterprise",
      tagColor: "gray",
      actionText: "Learn More"
    }
  ]

  const comparisonData = [
    {
      feature: "Setup Time",
      dataHero: "5 minutes",
      competitor1: "2-3 hours",
      competitor2: "1-2 days"
    },
    {
      feature: "Real-time Processing",
      dataHero: "✓ Sub-second",
      competitor1: "5-10 minutes",
      competitor2: "Hourly batches"
    },
    {
      feature: "AI Insights",
      dataHero: "✓ Built-in",
      competitor1: "Add-on ($500/month)",
      competitor2: "Not available"
    },
    {
      feature: "API Rate Limits",
      dataHero: "Unlimited",
      competitor1: "10,000/hour",
      competitor2: "1,000/hour"
    },
    {
      feature: "Support",
      dataHero: "24/7 Live Chat",
      competitor1: "Email only",
      competitor2: "Community forum"
    }
  ]

  return (
    <section id="features" className="section-padding section-gray relative overflow-hidden section-divider">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-50 rounded-full mix-blend-multiply filter blur-lg opacity-30 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-blue-50 rounded-full mix-blend-multiply filter blur-md opacity-30 animate-float"></div>
      </div>
      
      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="text-sm font-medium text-purple-600 mb-2">Features</div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
            Everything you need to{' '}
            <span className="text-purple-600">unlock your data</span>
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto">
            From AI-powered insights to enterprise-grade security, Data Hero provides all the tools you need to transform your business intelligence.
          </p>
        </motion.div>

        {/* Three-Column Feature Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-effect rounded-xl p-8 shadow-lg card-hover"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-dark-900 mb-4 text-center">
                {feature.title}
              </h3>
              
              <p className="text-dark-600 mb-6 text-center">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-dark-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-24"
        >
          <div className="glass-effect rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-dark-800 p-4 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-white text-sm ml-4">Data Hero Dashboard</div>
            </div>
            
            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Chart Area */}
                <div className="space-y-6">
                  <div className="h-64 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                      <p className="text-dark-600">Interactive Analytics Dashboard</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">$2.4M</div>
                      <div className="text-sm text-dark-600">Revenue</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">+23%</div>
                      <div className="text-sm text-dark-600">Growth</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">12.5K</div>
                      <div className="text-sm text-dark-600">Users</div>
                    </div>
                  </div>
                </div>
                
                {/* AI Insights Panel */}
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-dark-900">AI Insights</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-medium text-dark-900">Revenue Trend Detected</div>
                          <div className="text-sm text-dark-600">Strong upward trend in Q4 sales</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium text-dark-900">User Engagement Spike</div>
                          <div className="text-sm text-dark-600">40% increase in daily active users</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-yellow-600 mr-3" />
                        <div>
                          <div className="font-medium text-dark-900">Performance Alert</div>
                          <div className="text-sm text-dark-600">Response time increased by 15%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-dark-900 mb-4">
              Why Choose Data Hero?
            </h3>
            <p className="text-dark-600">
              See how we stack up against the competition
            </p>
          </div>
          
          <div className="glass-effect rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-dark-900">Feature</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-primary-600">Data Hero</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-dark-600">Competitor A</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-dark-600">Competitor B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-dark-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-primary-600 font-semibold">{row.dataHero}</td>
                      <td className="px-6 py-4 text-sm text-center text-dark-600">{row.competitor1}</td>
                      <td className="px-6 py-4 text-sm text-center text-dark-600">{row.competitor2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Feature Deep-Dive */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="purple-gradient rounded-2xl p-8 md:p-12 text-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Advanced AI Capabilities
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Our proprietary AI engine processes millions of data points to deliver 
                insights that would take human analysts weeks to discover.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Natural language query processing</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Predictive modeling with 95% accuracy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Automated anomaly detection</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Real-time recommendation engine</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-4 bg-white/20 rounded animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-1/2 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-white/20 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 