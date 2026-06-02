'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { generateWhatsAppLink } from '@/utils/helpers';

interface WhatsAppFloatingButtonProps {
  eventTitle?: string;
  eventDate?: string;
  customMessage?: string;
}

export default function WhatsAppFloatingButton({
  eventTitle = 'Ravi Kiran Tours',
  eventDate = 'today',
  customMessage,
}: WhatsAppFloatingButtonProps) {
  const whatsappLink = generateWhatsAppLink(eventTitle, eventDate, customMessage);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      title="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
