'use client';

import React from 'react';
import Image from 'next/image';

interface DestinationCardProps {
  name: string;
  city: string;
  state: string;
  description: string;
  image: string;
}

export default function DestinationCard({
  name,
  city,
  state,
  description,
  image,
}: DestinationCardProps) {
  return (
    <div className="card overflow-hidden">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 hover:bg-opacity-15 transition"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-3">
          {city}, {state}
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
        <button className="btn-primary w-full mt-4">Learn More</button>
      </div>
    </div>
  );
}
