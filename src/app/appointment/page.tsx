'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaUser, FaCheckCircle } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';
import { toast } from 'react-hot-toast';

type AppointmentStep = 'service' | 'datetime' | 'details' | 'confirmation';

interface ServiceOption {
  id: string;
  name: string;
  duration: string;
  price: string;
}

const services: ServiceOption[] = [
  {
    id: 'physio',
    name: 'Physiotherapy Session',
    duration: '45 minutes',
    price: '₹300',
  },
  {
    id: 'sports',
    name: 'Sports Rehabilitation',
    duration: '60 minutes',
    price: '₹300',
  },
  {
    id: 'massage',
    name: 'Therapeutic Massage',
    duration: '30 minutes',
    price: '₹300',
  },
  {
    id: 'assessment',
    name: 'Initial Assessment',
    duration: '60 minutes',
    price: '₹300',
  },
];

const AppointmentPage = () => {
  const [currentStep, setCurrentStep] = useState<AppointmentStep>('service');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    preferred_date: '',
    preferred_time: '',
    full_name: '',
    email: '',
    phone_number: '',
    notes: '',
  });

  const handleServiceSelect = (serviceId: string) => {
    const selectedService = services.find(s => s.id === serviceId);
    setFormData((prev) => ({ ...prev, service: selectedService?.name || '' }));
    setCurrentStep('datetime');
  };

  const handleDateTimeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('details');
  };

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const appointmentData = {
        full_name: formData.full_name,
        phone_number: formData.phone_number,
        service: formData.service,
        preferred_date: formData.preferred_date,
        preferred_time: formData.preferred_time,
        notes: formData.notes || undefined,
      };

      const { error } = await supabase
        .from('appointments')
        .insert([appointmentData]);

      if (error) throw error;

      toast.success('Appointment booked successfully! We will contact you shortly.');
      setCurrentStep('confirmation');
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      toast.error(error.message || 'Failed to book appointment. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour < 20; hour++) {
      if (hour !== 13) { // Skip 1 PM
        slots.push(`${hour}:00 ${hour < 12 ? 'AM' : 'PM'}`);
        if (hour !== 19) slots.push(`${hour}:30 ${hour < 12 ? 'AM' : 'PM'}`);
      }
    }
    return slots;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'service':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Select a Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-left"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mt-2">Duration: {service.duration}</p>
                  <p className="text-gray-600">Price: {service.price}</p>
                </button>
              ))}
            </div>
          </motion.div>
        );

      case 'datetime':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Select Date & Time
            </h2>
            <form onSubmit={handleDateTimeSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="preferred_date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="preferred_date"
                  name="preferred_date"
                  value={formData.preferred_date}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, preferred_date: e.target.value }))
                  }
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="preferred_time"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred Time
                </label>
                <select
                  id="preferred_time"
                  name="preferred_time"
                  value={formData.preferred_time}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, preferred_time: e.target.value }))
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                >
                  <option value="">Select a time</option>
                  {generateTimeSlots().map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep('service')}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </form>
          </motion.div>
        );

      case 'details':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Your Details
            </h2>
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  value={formData.full_name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, full_name: e.target.value }))
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone_number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone_number: e.target.value }))
                  }
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-gray-700"
                >
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, notes: e.target.value }))
                  }
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setCurrentStep('datetime')}
                  className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>
              </div>
            </form>
          </motion.div>
        );

      case 'confirmation':
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <FaCheckCircle className="text-green-500 text-6xl" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Appointment Booked Successfully!
            </h2>
            <p className="text-gray-600 mb-8">
              We will contact you shortly to confirm your appointment.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-4">Appointment Details:</h3>
              <div className="space-y-2 text-left">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date:</strong> {new Date(formData.preferred_date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {formData.preferred_time}</p>
                <p><strong>Name:</strong> {formData.full_name}</p>
                <p><strong>Phone:</strong> {formData.phone_number}</p>
              </div>
            </div>
            <button
              onClick={() => {
                setFormData({
                  service: '',
                  preferred_date: '',
                  preferred_time: '',
                  full_name: '',
                  email: '',
                  phone_number: '',
                  notes: '',
                });
                setCurrentStep('service');
              }}
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition-colors"
            >
              Book Another Appointment
            </button>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-8">
              {['service', 'datetime', 'details', 'confirmation'].map((step, index) => (
                <div
                  key={step}
                  className={`flex items-center ${
                    index !== 3 ? 'space-x-4' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep === step
                        ? 'bg-red-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  {index !== 3 && (
                    <div className="w-16 h-0.5 bg-gray-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage; 
