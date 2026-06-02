import { WHATSAPP_NUMBER } from './constants';

export const generateWhatsAppLink = (
  eventTitle: string,
  eventDate: string,
  message?: string
): string => {
  const defaultMessage = `Hello, I am interested in the ${eventTitle} scheduled on ${eventDate}. Please share details.`;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  }).format(price);
};

export const isEventUpcoming = (endDate: string): boolean => {
  const event = new Date(endDate);
  const today = new Date();
  return event > today;
};
