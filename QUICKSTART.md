# 🕉️ Ravi Kiran Tours - Quick Start Guide

Welcome! Your devotional travel business website is ready to launch.

## What's Been Built ✅

### Complete Full-Stack Application
- **Frontend**: Modern Next.js 14 React application
- **Backend**: FastAPI Python REST API
- **Database**: PostgreSQL with SQLAlchemy ORM
- **Styling**: Tailwind CSS with custom theme

## 📁 Project Structure

```
ravikirantours/
├── frontend/           # Next.js website
│   ├── app/           # Pages and routes
│   ├── components/    # React components
│   ├── utils/         # API client & helpers
│   └── styles/        # CSS & Tailwind config
│
├── backend/            # FastAPI API server
│   ├── main.py        # App entry point
│   ├── models.py      # Database models
│   ├── schemas.py     # Data validation
│   ├── routes/        # API endpoints
│   └── requirements.txt
│
└── README.md          # Full documentation
```

## 🚀 Getting Started (5 minutes)

### Start the Frontend

```bash
cd frontend
npm install
npm run dev
```
Visit: http://localhost:3000

### Start the Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python main.py
```
Visit: http://localhost:8000/docs

### Database Setup

```bash
# Option 1: Local PostgreSQL
createdb ravikirantours

# Option 2: Cloud Neon
# Sign up at neon.tech and copy connection string
```

Update `.env` files with your details.

## 📋 File Locations

### Frontend Files
- **Home Page** → [app/page.tsx](frontend/app/page.tsx)
- **Yatras List** → [app/yatras/page.tsx](frontend/app/yatras/page.tsx)
- **Gallery** → [app/gallery/page.tsx](frontend/app/gallery/page.tsx)
- **Admin Login** → [app/admin/login/page.tsx](frontend/app/admin/login/page.tsx)
- **Components** → [components/](frontend/components/)

### Backend Files
- **Events API** → [routes/events.py](backend/routes/events.py)
- **Photos API** → [routes/photos.py](backend/routes/photos.py)
- **Database Models** → [models.py](backend/models.py)

## ⚙️ Configuration

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_WHATSAPP_NUMBER=918123139426
NEXT_PUBLIC_SITE_EMAIL=info@ravikirantours.com
NEXT_PUBLIC_PHONE_NUMBER=8123139426
```

### Backend (.env)
```env
DATABASE_URL=postgresql://user:password@localhost/ravikirantours
SECRET_KEY=your-secret-key
UPLOAD_DIR=./uploads
```

## 🎯 Key Features Ready

✅ **Website**
- Home page with temple images
- Upcoming yatras showcase
- Popular destinations
- Photo gallery
- About & Contact pages
- Testimonials section

✅ **Admin Portal**
- Admin login
- Dashboard with statistics
- Event management (CRUD)
- Photo upload
- Enquiry tracking

✅ **WhatsApp Integration**
- Floating button on all pages
- Pre-filled enquiry messages
- "Book on WhatsApp" buttons
- Direct mobile links

✅ **Mobile Responsive**
- Works on all devices
- Touch-friendly buttons
- Optimized images
- Fast performance

## 🔌 API Endpoints

### Events
```
GET    /events              # List all events
POST   /events              # Create event
GET    /events/{id}         # Get event details
PUT    /events/{id}         # Update event
DELETE /events/{id}         # Delete/archive event
```

### Photos
```
POST   /events/{id}/photos  # Upload photo
GET    /events/{id}/photos  # Get photos
DELETE /photos/{id}         # Delete photo
```

### Enquiries
```
POST   /enquiries           # Create enquiry
GET    /enquiries           # List all enquiries
GET    /enquiries/event/{id}# Get event enquiries
```

### Authentication
```
POST   /auth/register       # Register user
POST   /auth/login          # Login user
```

## 🌐 Sample Data

### Destinations Included
1. Kashi Vishwanath Temple (Varanasi)
2. Tirumala Venkateswara Temple (Tirupati)
3. Kedarnath Temple (Uttarakhand)
4. Vaishno Devi Temple (Jammu)
5. Ramanathaswamy Temple (Tamil Nadu)

### Sample Yatras
1. **Kashi–Prayagraj–Ayodhya Yatra**
   - Dates: 15-Oct-2026 to 19-Oct-2026
   - Duration: 5 days
   - Price: ₹14,999
   - Seats: 25

2. **Char Dham Yatra**
   - Dates: 01-Nov-2026 to 11-Nov-2026
   - Duration: 11 days
   - Price: ₹24,999
   - Seats: 20

3. **South India Temple Tour**
   - Dates: 15-Dec-2026 to 22-Dec-2026
   - Duration: 8 days
   - Price: ₹19,999
   - Seats: 30

## 🎨 Customization

### Update Branding
- **Company Name**: [utils/constants.ts](frontend/utils/constants.ts)
- **Logo/Icon**: Component header or public folder
- **Colors**: [tailwind.config.js](frontend/tailwind.config.js)
- **Contact Info**: Change in environment variables

### Add Your Content
1. **Yatras**: Edit [SAMPLE_YATRAS](frontend/utils/constants.ts#L8)
2. **Destinations**: Edit [TEMPLE_DESTINATIONS](frontend/utils/constants.ts#L25)
3. **Testimonials**: Update in [home page](frontend/app/page.tsx)

### Update WhatsApp Number
1. Change in environment variable `NEXT_PUBLIC_WHATSAPP_NUMBER`
2. Or edit [helpers.ts](frontend/utils/helpers.ts#generateWhatsAppLink)

## 📱 Admin Demo

**URL**: http://localhost:3000/admin/login

**Demo Credentials**:
- Username: `admin`
- Password: `password`

Dashboard shows:
- Statistics (Upcoming trips, completed trips, inquiries)
- Event management interface
- Photo gallery management
- Recent activities

## 📊 Documentation

All comprehensive documentation is in:
- [README.md](README.md) - Full project overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - How to deploy
- [ROADMAP.md](ROADMAP.md) - Feature roadmap
- [CHANGELOG.md](CHANGELOG.md) - What's been done
- [frontend/README.md](frontend/README.md) - Frontend guide
- [backend/README.md](backend/README.md) - Backend guide

## 🚢 Deploy (Production)

### Quick Deploy

**Frontend to Vercel**
```bash
cd frontend
vercel deploy
```

**Backend to Railway**
```bash
cd backend
railway deploy
```

**Full guide**: See [DEPLOYMENT.md](DEPLOYMENT.md)

## 🐛 Troubleshooting

### Frontend won't start
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Backend connection error
```bash
# Check database
psql -U postgres -d ravikirantours
# Check .env DATABASE_URL
cat backend/.env
```

### Port already in use
```bash
# Frontend on different port
npm run dev -- -p 3001

# Backend on different port
python main.py  # Edit main.py to change port
```

## 📞 Support

**WhatsApp**: 918123139426
**Email**: info@ravikirantours.com

## ✨ Next Steps

1. **Test Locally** (5-10 minutes)
   - Start frontend and backend
   - Visit home page
   - Test admin login
   - Try WhatsApp button

2. **Customize Content** (30 minutes)
   - Update company info
   - Add real destinations
   - Upload your photos
   - Update contact details

3. **Set Up Database** (15 minutes)
   - Create PostgreSQL database (local or Neon)
   - Update connection string
   - Tables auto-create

4. **Deploy** (20-30 minutes)
   - Push to GitHub
   - Deploy frontend to Vercel
   - Deploy backend to Railway
   - Set environment variables

## 📈 What's Next (Phase 2)

Coming soon:
- [ ] Online payments (Razorpay/UPI)
- [ ] Booking system with seat selection
- [ ] Email & SMS notifications
- [ ] User accounts and profiles
- [ ] Advanced search and filtering
- [ ] Customer reviews
- [ ] Multi-language support

## 🎯 Success Checklist

- [ ] Frontend running on localhost:3000
- [ ] Backend running on localhost:8000
- [ ] Database connected
- [ ] Home page loads
- [ ] Admin login accessible
- [ ] WhatsApp button works
- [ ] API docs display at /docs
- [ ] Mobile view responsive

---

**Congratulations!** Your Ravi Kiran Tours MVP is complete and ready to launch! 🎉

For detailed information, check the README files in each folder.

Happy deploying! 🙏
