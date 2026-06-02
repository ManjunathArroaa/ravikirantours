'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaMapMarkerAlt, FaRupeeSign, FaUsers, FaWhatsapp } from 'react-icons/fa';
import { formatDate, formatPrice, generateWhatsAppLink } from '@/utils/helpers';

interface YatraCardProps {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  duration: number;
  startingLocation: string;
  price: number;
  seatsAvailable: number;
  coverPhoto: string;
}

export default function YatraCard({
  id,
  title,
  startDate,
  endDate,
  duration,
  startingLocation,
  price,
  seatsAvailable,
  coverPhoto,
}: YatraCardProps) {
  const whatsappLink = generateWhatsAppLink(title, formatDate(startDate));

  return (
    <div className="card overflow-hidden">
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-200">
        <Image
          src={coverPhoto}
          alt={title}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <Link href={`/yatras/${id}`}>
          <h3 className="text-xl font-semibold text-navy hover:text-saffron transition cursor-pointer mb-3">
            {title}
          </h3>
        </Link>

        {/* Details Grid */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendar className="text-saffron" />
            <span className="text-sm">
              {formatDate(startDate)} - {formatDate(endDate)} ({duration} days)
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaMapMarkerAlt className="text-saffron" />
            <span className="text-sm">Starting from {startingLocation}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaRupeeSign className="text-saffron" />
            <span className="font-semibold text-lg">{formatPrice(price)} per person</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaUsers className="text-saffron" />
            <span className="text-sm">
              {seatsAvailable} seats available
              {seatsAvailable <= 5 && (
                <span className="ml-2 text-red-500 font-semibold">Limited!</span>
              )}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <Link
            href={`/yatras/${id}`}
            className="flex-1 btn-secondary text-center"
          >
            View Details
          </Link>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            <FaWhatsapp />
            Book
          </a>
        </div>
      </div>
    </div>
  );
}
