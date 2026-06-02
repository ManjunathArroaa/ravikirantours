export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
export const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '8123139426';
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Ravi Kiran Tours';
export const SITE_EMAIL = process.env.NEXT_PUBLIC_SITE_EMAIL || 'info@ravikirantours.com';
export const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER || '8123139426';

export const TEMPLE_DESTINATIONS = [
  {
    id: 1,
    name: 'Kashi Vishwanath Temple',
    city: 'Varanasi',
    state: 'Uttar Pradesh',
    description: 'Ancient Hindu temple dedicated to Lord Shiva',
    image: '/temples/kashi-vishwanath.jpg',
  },
  {
    id: 2,
    name: 'Tirumala Venkateswara Temple',
    city: 'Tirupati',
    state: 'Andhra Pradesh',
    description: 'Most visited Hindu temple in the world',
    image: '/temples/tirumala-venkateswara.jpg',
  },
  {
    id: 3,
    name: 'Kedarnath Temple',
    city: 'Rudraprayag',
    state: 'Uttarakhand',
    description: 'One of the four sacred Dhams in the Himalayas',
    image: '/temples/kedarnath.jpg',
  },
  {
    id: 4,
    name: 'Vaishno Devi Temple',
    city: 'Katra',
    state: 'Jammu & Kashmir',
    description: 'Sacred pilgrimage destination for Goddess Vaishno Devi',
    image: '/temples/vaishno-devi.jpg',
  },
  {
    id: 5,
    name: 'Ramanathaswamy Temple',
    city: 'Rameswaram',
    state: 'Tamil Nadu',
    description: 'One of the most sacred pilgrimage sites in South India',
    image: '/temples/ramanathaswamy.jpg',
  },
];

export const SAMPLE_YATRAS = [
  {
    id: 1,
    title: 'Kashi–Prayagraj–Ayodhya Yatra',
    startDate: '2026-10-15',
    endDate: '2026-10-19',
    duration: 5,
    startingLocation: 'Varanasi',
    price: 14999,
    seatsAvailable: 25,
    coverPhoto: '/temples/kashi-vishwanath.jpg',
    description: 'A sacred journey through the holiest cities of North India',
  },
  {
    id: 2,
    title: 'Char Dham Yatra',
    startDate: '2026-11-01',
    endDate: '2026-11-11',
    duration: 11,
    startingLocation: 'Dehradun',
    price: 24999,
    seatsAvailable: 20,
    coverPhoto: '/temples/kedarnath.jpg',
    description: 'Complete pilgrimage to all four sacred Dhams',
  },
  {
    id: 3,
    title: 'South India Temple Tour',
    startDate: '2026-12-15',
    endDate: '2026-12-22',
    duration: 8,
    startingLocation: 'Chennai',
    price: 19999,
    seatsAvailable: 30,
    coverPhoto: '/temples/ramanathaswamy.jpg',
    description: 'Explore the magnificent temples of Tamil Nadu and Andhra Pradesh',
  },
];
