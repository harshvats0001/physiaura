'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock } from 'lucide-react'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function AboutPage() {
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
            About Us | PhysiAura Physiotherapy Clinic
          </motion.h1>
          <motion.p 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="text-xl text-center text-gray-600 max-w-3xl mx-auto"
          >
            Your Health in Expert Hands
          </motion.p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold">PhysiAura Physiotherapy Clinic</span>, we believe that healing is more than just treatment—it's about trust, care, and expertise. Founded by <span className="font-semibold">Dr. Ayushi</span>, a highly qualified physiotherapist with a Master's in Sports Physiotherapy (MPT), DCPT, and MIAP certifications, our clinic is committed to providing comprehensive, compassionate, and evidence-based care.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                With a deep passion for recovery and rehabilitation, Dr. Ayushi has helped hundreds of patients regain strength, mobility, and confidence. Whether you're an athlete recovering from injury or someone managing chronic pain, PhysiAura offers personalized physiotherapy solutions tailored to your unique needs.
              </p>
            </div>

            {/* Meet Dr. Ayushi Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-2/5 relative min-h-[300px]">
                  <Image
                    src="/images/dr-ayushi.jpg"
                    alt="Dr. Ayushi - PhysiAura Physiotherapy Clinic"
                    width={800}
                    height={1000}
                    className="rounded-lg shadow-md w-full h-full object-cover hover:shadow-xl transition-shadow"
                    priority
                    onError={(e) => {
                      const imgElement = e.target as HTMLImageElement;
                      imgElement.style.backgroundColor = '#f3f4f6';
                      imgElement.style.display = 'flex';
                      imgElement.style.alignItems = 'center';
                      imgElement.style.justifyContent = 'center';
                      imgElement.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yNCAyNGgtMjR2LTI0aDI0djI0em0tMi0yMmgtMjB2MjBoMjB2LTIwem0tNC41IDExYy44MjkgMCAxLjUuNjcxIDEuNSAxLjVzLS42NzEgMS41LTEuNSAxLjUtMS41LS42NzEtMS41LTEuNS42NzEtMS41IDEuNS0xLjV6bS00LjUgMy41YzAgMS45MzMgNC4xNjcgMS45MzMgNi42NjcgMS45MzN2LTJjLTIuNSAwLTQuNjY3IDAtNC42NjctLjkzMyAwLS45MzUgMi4xNjctLjkzMyA0LjY2Ny0uOTMzdi0yYy0yLjUgMC02LjY2NyAwLTYuNjY3IDEuOTMzeiIvPjwvc3ZnPg==';
                    }}
                  />
                </div>
                <div className="w-full md:w-3/5">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Meet Dr. Ayushi</h2>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="font-semibold min-w-32">Qualifications:</span>
                      <span>MPT (Sports), DCPT, MIAP</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold min-w-32">Specialization:</span>
                      <span>Sports Injuries, Pain Management, Musculoskeletal Disorders, Rehabilitation Therapy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold min-w-32">Approach:</span>
                      <span>A perfect blend of manual therapy, electrotherapy, and patient education, ensuring long-term results and wellness.</span>
                    </li>
                  </ul>
                  <blockquote className="mt-4 pl-4 border-l-4 border-primary italic text-gray-600">
                    "At PhysiAura, every treatment plan is built with empathy, expertise, and your recovery in mind."
                  </blockquote>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Why Choose Us & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Why Choose Us Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                {[
                  'Personalized treatment plans',
                  'Expert in sports and orthopaedic physiotherapy',
                  'Modern equipment and latest techniques',
                  'One-on-one care in a clean and safe environment',
                  'Focus on pain relief, strength recovery & long-term wellness'
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-primary" />
                  Our Location
                </h3>
                <p className="text-gray-600">
                  H. No-WZ-39A, G/F, Om Vihar-3,<br />
                  Shree Shyam Gali No - 8,<br />
                  Uttam Nagar, New Delhi - 59
                </p>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <Clock className="w-5 h-5 mr-2 text-primary" />
                  Clinic Hours
                </h3>
                <ul className="space-y-1 text-gray-600">
                  <li>Morning: 9:00 AM – 2:00 PM</li>
                  <li>Evening: 4:00 PM – 8:00 PM</li>
                  <li className="text-red-500">Sunday: Closed</li>
                </ul>
              </div>

              <div>
                <h3 className="flex items-center text-xl font-semibold mb-2">
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  Get in Touch
                </h3>
                <p className="text-gray-600">
                  Feel free to call or message us to schedule your consultation.
                </p>
                <a
                  href="tel:+919220856473"
                  className="inline-block mt-2 text-primary hover:text-red-600 font-semibold"
                >
                  +91 92208 56473
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
} 