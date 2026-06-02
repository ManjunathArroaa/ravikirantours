'use client';

import React from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { PHONE_NUMBER, SITE_EMAIL } from '@/utils/constants';
import { generateWhatsAppLink } from '@/utils/helpers';

export default function Header() {
  const whatsappLink = generateWhatsAppLink('Ravi Kiran Tours', 'today');

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-saffron">
          🕉️ Ravi Kiran Tours
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="text-navy hover:text-saffron transition">
            Home
          </Link>
          <Link href="/yatras" className="text-navy hover:text-saffron transition">
            Upcoming Yatras
          </Link>
          <Link href="/gallery" className="text-navy hover:text-saffron transition">
            Gallery
          </Link>
          <Link href="/about" className="text-navy hover:text-saffron transition">
            About Us
          </Link>
          <Link href="/contact" className="text-navy hover:text-saffron transition">
            Contact
          </Link>
          <Link href="/admin/login" className="text-navy hover:text-saffron transition">
            Admin
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3 items-center">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="hidden sm:flex items-center gap-2 bg-saffron text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            <FaPhone size={18} />
            <span className="hidden md:inline">Call Now</span>
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            <FaWhatsapp size={18} />
            <span className="hidden md:inline">WhatsApp</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
