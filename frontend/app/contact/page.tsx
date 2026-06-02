'use client';

import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { PHONE_NUMBER, SITE_EMAIL } from '@/utils/constants';
import { generateWhatsAppLink } from '@/utils/helpers';

export default function ContactPage() {
  const whatsappLink = generateWhatsAppLink('Ravi Kiran Tours', 'today');

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron to-orange-600 text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg opacity-90">
            Get in touch with our team for your pilgrimage inquiries
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold text-navy mb-8">Get in Touch</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="bg-saffron text-white p-4 rounded-lg h-16 flex items-center justify-center">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">Phone</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-lg hover:text-saffron transition">
                      {PHONE_NUMBER}
                    </a>
                    <p className="text-gray-600 text-sm">Call us during business hours</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="bg-green-500 text-white p-4 rounded-lg h-16 flex items-center justify-center">
                    <FaWhatsapp size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">WhatsApp</h3>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-green-600 transition">
                      Chat with us
                    </a>
                    <p className="text-gray-600 text-sm">Instant response on WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="bg-blue-500 text-white p-4 rounded-lg h-16 flex items-center justify-center">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">Email</h3>
                    <a href={`mailto:${SITE_EMAIL}`} className="text-lg hover:text-saffron transition">
                      {SITE_EMAIL}
                    </a>
                    <p className="text-gray-600 text-sm">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="bg-red-500 text-white p-4 rounded-lg h-16 flex items-center justify-center">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-navy mb-2">Address</h3>
                    <p className="text-lg">Ravi Kiran Tours</p>
                    <p className="text-gray-600">Devotional Travel, Across India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-navy mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-saffron"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-saffron"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-saffron"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-saffron resize-none"
                    placeholder="Tell us about your pilgrimage plans"
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-navy mb-8">Find Us on the Map</h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Google Maps integration coming soon</p>
          </div>
        </div>
      </section>
    </main>
  );
}
