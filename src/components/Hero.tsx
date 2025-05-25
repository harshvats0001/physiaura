'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Health In{' '}
              <span className="text-primary">Expert Hands</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Experience personalized physiotherapy care with our expert team.
              We're dedicated to helping you achieve optimal physical well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/appointment"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors"
              >
                Book Appointment
              </Link>
              <Link
                href="/services"
                className="bg-white text-primary border-2 border-primary px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Our Services
              </Link>
              <a
                href="https://wa.me/919220856473?text=Hello%20Dr.%20Ayushi%2C%20I%20would%20like%20to%20request%20a%20callback%20regarding%20physiotherapy%20consultation.%20Please%20let%20me%20know%20a%20convenient%20time%20to%20discuss.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                Ask for Callback
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full max-w-[600px]">
                <div 
                  className="absolute inset-0"
                  dangerouslySetInnerHTML={{
                    __html: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
                      <style>
                        .treatment-table { fill: #A0D8EF; }
                        .patient { fill: #4DB6AC; }
                        .therapist { fill: #4FC3F7; }
                        .skin { fill: #FFB74D; }
                        .cabinet { fill: #90CAF9; }
                        .plant { fill: #66BB6A; }
                        .bg-circle { fill: #E5F3FF; opacity: 0.3; }
                      </style>
                      
                      <!-- Background -->
                      <circle class="bg-circle" cx="400" cy="300" r="280"/>
                      
                      <!-- Treatment Table -->
                      <path class="treatment-table" d="M200 350h400v80H200zM220 430h20v60h-20zM560 430h20v60h-20z"/>
                      
                      <!-- Patient -->
                      <path class="patient" d="M250 320h300v50H250z" rx="25"/>
                      <circle class="skin" cx="280" cy="345" r="20"/>
                      
                      <!-- Physiotherapist -->
                      <g transform="translate(500,300)">
                        <rect class="therapist" x="-40" y="0" width="80" height="120" rx="20"/>
                        <circle class="skin" cx="0" cy="-20" r="25"/>
                        <path class="therapist" d="M-30 40q-30 20-10 60M30 40q30 20 10 60" stroke-width="20" stroke-linecap="round"/>
                      </g>
                      
                      <!-- Medical Cabinet -->
                      <g transform="translate(650,150)">
                        <rect class="cabinet" width="80" height="120" rx="10"/>
                        <rect fill="#64B5F6" x="5" y="30" width="70" height="2"/>
                        <rect fill="#64B5F6" x="5" y="60" width="70" height="2"/>
                        <rect fill="#64B5F6" x="5" y="90" width="70" height="2"/>
                        <circle fill="#EF5350" cx="20" cy="15" r="8"/>
                        <circle fill="#66BB6A" cx="40" cy="15" r="8"/>
                        <circle fill="#42A5F5" cx="60" cy="15" r="8"/>
                      </g>
                      
                      <!-- Plant -->
                      <g transform="translate(100,400)">
                        <rect class="plant" x="10" y="30" width="40" height="40" rx="5"/>
                        <path class="plant" d="M30 0q-20 30 0 50M30 0q20 30 0 50M30 10q-20 30 0 50" stroke-width="8" stroke-linecap="round"/>
                      </g>
                    </svg>
                    `
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 