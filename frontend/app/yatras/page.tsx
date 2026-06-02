'use client';

import React from 'react';
import YatraCard from '@/components/YatraCard';
import { SAMPLE_YATRAS } from '@/utils/constants';

export default function YatrasPage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-saffron to-orange-600 text-white py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Upcoming Yatras</h1>
          <p className="text-lg opacity-90">
            Explore our sacred pilgrimage tours and book your divine journey
          </p>
        </div>
      </section>

      {/* Yatras List */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SAMPLE_YATRAS.map((yatra) => (
              <YatraCard key={yatra.id} {...yatra} />
            ))}
          </div>

          {SAMPLE_YATRAS.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No upcoming yatras at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
