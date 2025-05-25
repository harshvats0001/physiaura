import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">PHYSIAURA</h3>
            <p className="text-sm leading-relaxed">
              Expert physiotherapy care in Uttam Nagar. We're dedicated to helping
              you achieve optimal physical well-being through personalized
              treatment plans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/services', label: 'Services' },
                { href: '/appointment', label: 'Book Appointment' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+919999999999" className="text-sm hover:text-primary">
                  +91 92208 56473
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <a
                  href="mailto:info@physiaura.com"
                  className="text-sm hover:text-primary"
                >
                  info@physiaura.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1" />
                <p className="text-sm">
                  wz-39A,ground floor, om vihar -3 ,shree shyam gali no-8 ,uttamnagar
                <br />
                  New Delhi - 110059
                </p>
              </li>
            </ul>
          </div>

          {/* Timings */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Clinic Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Clock size={18} />
                <div className="text-sm">
                  <p>Mon - Sat:</p>
                  <p>9:00 AM - 2:00 PM</p>
                  <p>4:00 PM - 8:00 PM</p>
                </div>
              </li>
              <li className="text-sm text-red-400">Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-center md:text-left">
              © {currentYear} PHYSIAURA. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/physiaura_by_drayushi?igsh=OXQ5dmw0MmZ1YTVu"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 