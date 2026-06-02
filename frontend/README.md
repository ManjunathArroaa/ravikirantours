# Frontend Setup Guide

## Prerequisites
- Node.js 18 or higher
- npm or yarn

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Create environment file:**
```bash
cp .env.example .env.local
```

3. **Update environment variables** in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WHATSAPP_NUMBER=8123139426
NEXT_PUBLIC_SITE_NAME=Ravi Kiran Tours
NEXT_PUBLIC_SITE_EMAIL=info@ravikirantours.com
NEXT_PUBLIC_PHONE_NUMBER=8123139426
```

## Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building

Build for production:
```bash
npm run build
```

## Production

Start the production server:
```bash
npm start
```

## Linting

Run ESLint:
```bash
npm run lint
```

## Project Structure

- `app/` - Next.js app router pages
- `components/` - React components
- `utils/` - Utility functions, API client, constants
- `styles/` - Global CSS and Tailwind config
- `public/` - Static assets

## Key Components

### Pages
- `page.tsx` - Home page
- `yatras/page.tsx` - Yatras listing
- `yatras/[id]/page.tsx` - Yatra details
- `gallery/page.tsx` - Photo gallery
- `about/page.tsx` - About us
- `contact/page.tsx` - Contact page
- `admin/login/page.tsx` - Admin login
- `admin/dashboard/page.tsx` - Admin dashboard

### Components
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer
- `WhatsAppFloatingButton.tsx` - Floating WhatsApp button
- `YatraCard.tsx` - Yatra listing card
- `DestinationCard.tsx` - Destination card

### Utilities
- `api.ts` - API client configuration
- `constants.ts` - Application constants
- `helpers.ts` - Helper functions

## API Integration

The frontend connects to the FastAPI backend at:
- Default: `http://localhost:8000`
- Production: Set via `NEXT_PUBLIC_API_URL`

API client is configured in `utils/api.ts` using Axios.

## Styling

- **Framework:** Tailwind CSS
- **Config:** `tailwind.config.js`
- **Global Styles:** `styles/globals.css`

### Custom Colors
- Saffron: `text-saffron`, `bg-saffron`
- Navy: `text-navy`, `bg-navy`
- Gold: `text-gold`, `bg-gold`
- Cream: `text-cream`, `bg-cream`

### Button Classes
- Primary button: `btn-primary`
- Secondary button: `btn-secondary`
- Cards: `card`

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

```bash
vercel deploy
```

### Docker
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## Performance Tips

1. Use Image component from Next.js for optimization
2. Implement dynamic imports for large components
3. Use React.memo for components that don't change often
4. Optimize CSS with Tailwind purging

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Build fails
```bash
rm -rf .next
npm run build
```

### API connection issues
- Check `NEXT_PUBLIC_API_URL` in `.env.local`
- Ensure backend is running
- Check CORS configuration in backend

## Environment Variables Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `NEXT_PUBLIC_API_URL` | `http://localhost:8000` | Backend API URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `919876543210` | WhatsApp business number |
| `NEXT_PUBLIC_SITE_NAME` | `Ravi Kiran Tours` | Website name |
| `NEXT_PUBLIC_SITE_EMAIL` | `info@ravikirantours.com` | Contact email |
| `NEXT_PUBLIC_PHONE_NUMBER` | `9876543210` | Contact phone |

## Support

For issues or questions, contact: info@ravikirantours.com
