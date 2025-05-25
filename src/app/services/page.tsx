'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Heart,
  PersonStanding,
  Dumbbell,
  Brain,
  Bone,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: PersonStanding,
    title: 'Sports Injury Rehab',
    description: 'Specialized rehabilitation programs for athletes and sports enthusiasts. We focus on getting you back to peak performance safely.',
    features: [
      'Injury assessment and diagnosis',
      'Sport-specific rehabilitation',
      'Performance enhancement',
      'Injury prevention strategies'
    ]
  },
  {
    icon: Heart,
    title: 'Manual Therapy',
    description: 'Hands-on techniques to treat musculoskeletal pain and disability. We use skilled manipulation of soft tissues and joints.',
    features: [
      'Joint mobilization',
      'Soft tissue manipulation',
      'Therapeutic massage',
      'Myofascial release'
    ]
  },
  {
    icon: Activity,
    title: 'Pain Management',
    description: 'Comprehensive pain management solutions using evidence-based techniques and modern equipment.',
    features: [
      'Chronic pain treatment',
      'Acute pain relief',
      'Electrical stimulation',
      'Therapeutic exercises'
    ]
  },
  {
    icon: Dumbbell,
    title: 'Strength Training',
    description: 'Personalized strength training programs to improve muscle strength, endurance, and overall fitness.',
    features: [
      'Resistance training',
      'Core strengthening',
      'Postural correction',
      'Balance training'
    ]
  },
  {
    icon: Brain,
    title: 'Neurological Rehab',
    description: 'Specialized treatment for neurological conditions to improve function and quality of life.',
    features: [
      'Balance training',
      'Gait training',
      'Coordination exercises',
      'Functional training'
    ]
  },
  {
    icon: Bone,
    title: 'Orthopedic Care',
    description: 'Comprehensive care for bone, joint, and muscle conditions using advanced therapeutic techniques.',
    features: [
      'Post-surgery rehabilitation',
      'Joint replacement therapy',
      'Fracture rehabilitation',
      'Arthritis management'
    ]
  }
]

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative bg-gradient-to-b from-primary/10 to-white py-16"
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            {...fadeIn}
            className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive physiotherapy solutions tailored to your needs
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <ArrowRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Recovery Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book an appointment today and let us help you achieve optimal physical well-being.
          </p>
          <Link
            href="/appointment"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            Book Appointment
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  )
} 