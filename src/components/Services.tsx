'use client'

import { motion } from 'framer-motion'
import {
  Activity,
  Heart,
  PersonStanding,
  Dumbbell,
  Brain,
  Bone,
} from 'lucide-react'

const services = [
  {
    title: 'Sports Injury Rehab',
    description: 'Specialized rehabilitation for athletes and sports enthusiasts.',
    icon: PersonStanding,
  },
  {
    title: 'Manual Therapy',
    description: 'Hands-on techniques to reduce pain and improve mobility.',
    icon: Heart,
  },
  {
    title: 'Pain Management',
    description: 'Effective strategies for chronic and acute pain relief.',
    icon: Activity,
  },
  {
    title: 'Strength Training',
    description: 'Customized exercises to build strength and stability.',
    icon: Dumbbell,
  },
  {
    title: 'Neurological Rehab',
    description: 'Recovery support for neurological conditions.',
    icon: Brain,
  },
  {
    title: 'Orthopedic Care',
    description: 'Treatment for bone, joint, and muscle conditions.',
    icon: Bone,
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of physiotherapy services tailored to
            your specific needs and recovery goals.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
} 