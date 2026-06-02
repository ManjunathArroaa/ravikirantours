'use client';

import React from 'react';
import { FaHeart, FaUsers, FaAward, FaGlobeAmericas } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron to-orange-600 text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
          <p className="text-lg opacity-90">
            Your Trusted Partner for Divine Journeys
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded with a passion for spiritual tourism, Ravi Kiran Tours has been guiding pilgrims on their most sacred journeys across India for years. We believe that every pilgrimage is a transformative experience that deserves meticulous planning and heartfelt execution.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our team of experienced travel guides and coordinators work tirelessly to ensure that every aspect of your journey is perfect, from comfortable accommodations to meaningful spiritual experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are not just a travel company; we are custodians of your spiritual dreams.
              </p>
            </div>
            <div className="bg-gradient-to-br from-saffron to-orange-600 h-96 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <FaHeart className="text-5xl text-saffron mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-navy mb-2">Devotion</h3>
              <p className="text-gray-700">
                We approach every pilgrimage with deep devotion and respect for your spiritual goals.
              </p>
            </div>

            <div className="text-center">
              <FaUsers className="text-5xl text-saffron mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-navy mb-2">Community</h3>
              <p className="text-gray-700">
                We foster meaningful connections among pilgrims from different backgrounds.
              </p>
            </div>

            <div className="text-center">
              <FaAward className="text-5xl text-saffron mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-navy mb-2">Excellence</h3>
              <p className="text-gray-700">
                We maintain the highest standards in all our services and facilities.
              </p>
            </div>

            <div className="text-center">
              <FaGlobeAmericas className="text-5xl text-saffron mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-navy mb-2">Sustainability</h3>
              <p className="text-gray-700">
                We ensure our tours respect the environment and local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-navy mb-12">Our Experience</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <h3 className="text-5xl font-bold text-saffron mb-2">500+</h3>
              <p className="text-xl text-navy font-semibold">Successful Tours</p>
              <p className="text-gray-600 mt-2">Happy pilgrims guided to their spiritual destinations</p>
            </div>

            <div className="card p-8 text-center">
              <h3 className="text-5xl font-bold text-saffron mb-2">10K+</h3>
              <p className="text-xl text-navy font-semibold">Happy Pilgrims</p>
              <p className="text-gray-600 mt-2">Pilgrims who found meaning in their journeys with us</p>
            </div>

            <div className="card p-8 text-center">
              <h3 className="text-5xl font-bold text-saffron mb-2">25+</h3>
              <p className="text-xl text-navy font-semibold">Destinations</p>
              <p className="text-gray-600 mt-2">Sacred temples and pilgrimage sites across India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
