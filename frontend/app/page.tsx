'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import YatraCard from '@/components/YatraCard';
import DestinationCard from '@/components/DestinationCard';
import { PHONE_NUMBER, TEMPLE_DESTINATIONS, SAMPLE_YATRAS } from '@/utils/constants';
import { generateWhatsAppLink } from '@/utils/helpers';

export default function Home() {
  const whatsappLink = generateWhatsAppLink('Ravi Kiran Tours', 'today');

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen text-white flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/banner.jpg"
            alt="Varanasi Temple Ghat"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Your Trusted Partner for Divine Journeys Across India
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience sacred pilgrimages and spiritual adventures
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/yatras"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Explore Yatras <FaArrowRight />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp /> Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Yatras */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">Upcoming Yatras</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Book your divine journey today and experience the spiritual essence of India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_YATRAS.map((yatra) => (
              <YatraCard key={yatra.id} {...yatra} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/yatras"
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Yatras <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-navy mb-4">Popular Destinations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Visit the most sacred and spiritually significant temples across India
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEMPLE_DESTINATIONS.map((destination) => (
              <DestinationCard key={destination.id} {...destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">What Our Pilgrims Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                location: 'Delhi',
                text: 'The Kashi Yatra was life-changing. Every detail was carefully planned and the spiritual experience was unforgettable.',
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                location: 'Bangalore',
                text: 'Professional team, excellent accommodation, and deeply meaningful spiritual experiences. Highly recommended!',
                rating: 5,
              },
              {
                name: 'Amit Patel',
                location: 'Mumbai',
                text: 'The Char Dham tour exceeded all expectations. The guides were knowledgeable and the journey was truly transformative.',
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-saffron to-orange-600 text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Ready for Your Divine Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get in touch with us today and book your pilgrimage
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-saffron px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              <FaPhone /> Call Us
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
