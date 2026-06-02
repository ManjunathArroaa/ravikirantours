# Ravi Kiran Tours - Devotional Travel Website

A comprehensive full-stack web application for managing pilgrimage tours, temple yatras, and spiritual events across India with WhatsApp integration.

## 🎯 Vision

**Tagline:** "Your Trusted Partner for Divine Journeys Across India"

A devotional travel business website focused on:
- Pilgrimage tours and temple yatras
- Spiritual events and religious festivals
- Direct inquiry generation through WhatsApp
- Easy administration of upcoming trips

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **HTTP Client:** Axios
- **Hosting:** Vercel

### Backend
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy
- **Hosting:** Railway
- **Database Hosting:** Neon PostgreSQL

## 📁 Project Structure

```
ravikirantours/
├── frontend/                 # Next.js React application
│   ├── app/                 # Next.js app router
│   │   ├── page.tsx         # Home page
│   │   ├── yatras/          # Yatras listing and details
│   │   ├── gallery/         # Photo gallery
│   │   ├── about/           # About page
│   │   ├── contact/         # Contact page
│   │   └── admin/           # Admin portal
│   ├── components/          # Reusable React components
│   ├── utils/              # Utility functions and API client
│   ├── styles/             # Global styles
│   ├── public/             # Static assets
│   └── package.json        # Dependencies
│
└── backend/                 # FastAPI Python application
    ├── main.py             # FastAPI app entry point
    ├── models.py           # SQLAlchemy database models
    ├── schemas.py          # Pydantic validation schemas
    ├── database.py         # Database configuration
    ├── config.py           # App configuration
    ├── routes/             # API endpoints
    │   ├── events.py       # Event management endpoints
    │   ├── photos.py       # Photo upload endpoints
    │   ├── enquiries.py    # Enquiry endpoints
    │   └── auth.py         # Authentication endpoints
    ├── requirements.txt    # Python dependencies
    └── .env.example        # Environment variables template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+
- npm or yarn

### Frontend Setup

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Visit `http://localhost:3000`

### Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
python main.py
```

API will be available at `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- Redoc: `http://localhost:8000/redoc`

## ✨ MVP Features

The MVP includes:

### Public Website
- ✅ Home page with hero banner and testimonials
- ✅ Upcoming yatras/events listing
- ✅ Popular destinations showcase
- ✅ Event details pages with itineraries
- ✅ Photo gallery with categories
- ✅ About Us page
- ✅ Contact page
- ✅ WhatsApp integration (floating button on every page)
- ✅ Mobile responsive design

### Admin Portal
- ✅ Admin login
- ✅ Dashboard with statistics
- ✅ Event management (Create, Read, Update, Delete)
- ✅ Photo upload and management
- ✅ View enquiries
- ✅ Auto-archive completed events

### Backend API
- ✅ Events CRUD operations
- ✅ Photo upload and management
- ✅ Enquiry collection
- ✅ User authentication
- ✅ REST API with auto-generated docs
- ✅ CORS support for frontend

## 📋 Main Features

### 1. Home Page
- Temple images hero banner
- Upcoming yatras section
- Popular destinations cards
- Customer testimonials
- WhatsApp enquiry button
- Call now button

### 2. Upcoming Events/Yatras
Each event card contains:
- Event name and date
- Duration and location
- Starting price per person
- Available seats
- "View Details" and "Book on WhatsApp" buttons

Example yatra:
- **Kashi–Prayagraj–Ayodhya Yatra**
- Date: 15-Oct-2026
- Duration: 5 Days
- Price: ₹14,999
- Seats: 25

### 3. Event Details Page
- Day-wise itinerary
- Photo gallery
- Pricing information
- Contact and booking options
- WhatsApp direct booking link

### 4. Gallery Page
Categories:
- Temple Tours
- Jyotirlinga Tours
- Char Dham Tours
- South India Temple Tours
- Festival Tours

### 5. About Us
- Company story
- Mission statement
- Experience highlights
- Team values

### 6. Contact Page
- Phone and WhatsApp links
- Email contact
- Contact form
- Google Maps integration

### 7. Admin Portal
- **Admin Login** with role-based access
- **Dashboard** showing:
  - Upcoming trips count
  - Completed trips count
  - Total inquiries
  - Gallery photos count
  - Recent activities

#### Admin Capabilities:
- **Event Management:**
  - Create new events with all details
  - Edit event information
  - Delete/archive events
  - Mark events as completed
  - Auto-archive after trip date passes

- **Gallery Management:**
  - Upload photos
  - Delete photos
  - Create albums by category

- **Enquiry Management:**
  - View all enquiries
  - Filter by event
  - Export enquiry data

## 🔗 WhatsApp Integration

The most important feature. Implementation includes:

- **Floating WhatsApp button** on every page
- **Pre-filled messages** with:
  - Event name
  - Event date
  - Custom inquiry details
- **Direct WhatsApp Business API** integration
- **One-click booking** from event cards
- **Mobile-optimized** experience

Example message format:
```
Hello, I am interested in the Kashi Yatra scheduled on 15-Oct-2026. Please share details.
```

## 🗄️ Database Schema

### Users Table
- id (Primary Key)
- username (Unique)
- password_hash
- email (Unique)
- is_admin (Boolean)
- created_at (Timestamp)

### Events Table
- id (Primary Key)
- title
- start_date
- end_date
- description
- itinerary
- price
- seats_total
- seats_available
- cost
- cover_photo_url
- created_by_id (Foreign Key → Users)
- is_archived (Boolean)
- created_at, updated_at (Timestamps)

### Photos Table
- id (Primary Key)
- event_id (Foreign Key → Events)
- image_url
- caption
- created_at (Timestamp)

### Enquiries Table
- id (Primary Key)
- event_id (Foreign Key → Events)
- customer_name
- customer_phone
- customer_email
- message
- created_at (Timestamp)

## 📱 API Endpoints

### Events
- `GET /events` - List all events
- `GET /events/{id}` - Get event details
- `POST /events` - Create new event
- `PUT /events/{id}` - Update event
- `DELETE /events/{id}` - Delete/archive event
- `POST /events/{id}/complete` - Mark as completed

### Photos
- `GET /events/{event_id}/photos` - Get event photos
- `POST /events/{event_id}/photos` - Upload photo
- `DELETE /photos/{photo_id}` - Delete photo

### Enquiries
- `GET /enquiries` - List all enquiries
- `GET /enquiries/{id}` - Get enquiry details
- `POST /enquiries` - Create enquiry
- `GET /enquiries/event/{event_id}` - Get event enquiries

### Authentication
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user

### Health
- `GET /health` - Health check endpoint

## 🎨 Design System

### Color Palette
- **Saffron:** #FF9933 (Primary)
- **Navy:** #1a1a2e (Dark)
- **Gold:** #FFD700 (Accent)
- **Cream:** #FAF9F6 (Light Background)
- **Sacred Brown:** #8B4513

### Typography
- **Sans Serif:** Inter
- **Display:** Playfair Display (600, 700, 800)

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
vercel deploy
```

### Backend (Railway)
```bash
cd backend
railway connect
railway deploy
```

### Database (Neon PostgreSQL)
- Connect via `DATABASE_URL` in `.env`

## 🔮 Future Features (Phase 2)

- Online payments (UPI/Razorpay)
- Seat-based booking system
- E-Tickets generation
- SMS notifications
- AI Travel Assistant
- Multi-language support (Kannada, Hindi, Tamil, Telugu, English)
- Customer reviews and ratings
- Advanced tour package search
- Itinerary customization
- Group booking discounts

## 📝 Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_SITE_NAME=Ravi Kiran Tours
NEXT_PUBLIC_SITE_EMAIL=info@ravikirantours.com
NEXT_PUBLIC_PHONE_NUMBER=9876543210
```

### Backend (.env)
```
DATABASE_URL=postgresql://user:password@localhost:5432/ravikirantours
SECRET_KEY=your-secret-key
UPLOAD_DIR=./uploads
```

## 📞 Support

For inquiries about deployment or features:
- WhatsApp: 9876543210
- Email: info@ravikirantours.com

## 📄 License

This project is licensed under the MIT License.

---

**Built with 🙏 for Sacred Journeys**
