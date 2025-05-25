'use client';

import { motion } from 'framer-motion';
import { FaClock, FaCalendarAlt, FaPhoneAlt } from 'react-icons/fa';

const TimingsPage = () => {
  const timings = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Clinic Hours & Availability
          </h1>
          <p className="text-lg text-gray-600">
            Plan your visit to PhysiAura Physiotherapy Clinic
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-lg shadow-xl p-6 mb-8"
        >
          <div className="flex items-center mb-6">
            <FaClock className="text-red-600 text-2xl mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">
              Regular Hours
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {timings.map((timing, index) => (
              <motion.div
                key={timing.day}
                variants={itemVariants}
                className="p-4 border border-gray-200 rounded-lg"
              >
                <h3 className="font-semibold text-gray-900">{timing.day}</h3>
                <p className="text-gray-600">{timing.hours}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-xl p-6"
          >
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-red-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">
                Appointment Booking
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Book your appointment in advance to ensure availability at your
              preferred time.
            </p>
            <a
              href="/appointment"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-xl p-6"
          >
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-red-600 text-2xl mr-3" />
              <h2 className="text-xl font-semibold text-gray-900">
                Emergency Contact
              </h2>
            </div>
            <p className="text-gray-600 mb-2">
              For urgent inquiries or rescheduling:
            </p>
            <a
              href="tel: +91 92208 56473"
              className="text-lg font-semibold text-red-600 hover:text-red-700"
            >
              +1 (234) 567-890
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TimingsPage; 
