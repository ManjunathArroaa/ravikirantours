'use client';

import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope } from 'react-icons/fa';
import { PHONE_NUMBER, SITE_EMAIL } from '@/utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-saffron mb-4">🕉️ Ravi Kiran Tours</h3>
            <p className="text-gray-300 mb-4">Your Trusted Partner for Divine Journeys Across India</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-saffron transition"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-saffron transition"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-saffron transition"><FaInstagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-saffron mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-saffron transition">Home</Link></li>
              <li><Link href="/yatras" className="hover:text-saffron transition">Upcoming Yatras</Link></li>
              <li><Link href="/gallery" className="hover:text-saffron transition">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-saffron transition">About Us</Link></li>
            </ul>
          </div>

          {/* Tour Categories */}
          <div>
            <h4 className="text-lg font-semibold text-saffron mb-4">Tour Categories</h4>
            <ul className="space-y-2">
              <li className="hover:text-saffron transition cursor-pointer">Temple Tours</li>
              <li className="hover:text-saffron transition cursor-pointer">Jyotirlinga Tours</li>
              <li className="hover:text-saffron transition cursor-pointer">Char Dham Tours</li>
              <li className="hover:text-saffron transition cursor-pointer">Festival Tours</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-saffron mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-saffron" />
                <a href={`tel:${PHONE_NUMBER}`} className="hover:text-saffron transition">
                  {PHONE_NUMBER}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-saffron" />
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-saffron transition">
                  {SITE_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Ravi Kiran Tours. All rights reserved.</p>
          <p className="mt-2">Designed with 🙏 for Sacred Journeys</p>
        </div>
      </div>
    </footer>
  );
}
