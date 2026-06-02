# Changelog

All notable changes to Ravi Kiran Tours project are documented in this file.

## [1.0.0] - 2026-05-30 - MVP Release

### Added

#### Frontend
- Initial Next.js 14 project setup
- Home page with hero banner, hero section with CTA buttons
- Popular destinations grid with destination cards
- Upcoming yatras section with detailed event cards
- Yatras listing page with filtering
- Individual yatra detail pages with day-wise itinerary
- Photo gallery page with categories
- About Us page with company story and values
- Contact page with form and contact information
- Admin login page
- Admin dashboard with statistics and management features
- Reusable components (Header, Footer, YatraCard, DestinationCard, WhatsAppFloatingButton)
- Tailwind CSS styling with custom color palette
- Responsive mobile design
- WhatsApp integration with dynamic links
- Environment-based configuration
- Axios API client setup

#### Backend
- FastAPI application setup
- SQLAlchemy ORM with database models
- PostgreSQL database schema
  - Users table with authentication
  - Events table for yatra management
  - Photos table for gallery
  - Enquiries table for lead capture
- Pydantic schemas for validation
- REST API endpoints
  - Events CRUD operations (GET, POST, PUT, DELETE)
  - Event completion marking
  - Photo upload and management
  - Enquiry creation and retrieval
  - User authentication (register, login)
  - Health check endpoint
- CORS middleware configuration
- Static file serving for uploads
- Auto-generated API documentation (Swagger UI, ReDoc)
- Environment configuration with defaults

#### Documentation
- Main README with project overview
- Frontend setup guide
- Backend setup guide
- Deployment guide with cloud provider options
- Project roadmap with phases
- This changelog

#### Configuration Files
- .gitignore for common patterns
- Frontend .env.example
- Backend .env.example
- Database configuration
- Tailwind CSS config
- Next.js config

### Initial Features
- Temple destination showcase with 5 major temples
- 3 sample yatras with full details
- Customer testimonials
- Event statistics dashboard
- Photo gallery categories
- WhatsApp booking integration
- Contact form (frontend only)
- Admin login (demo mode)
- Event management UI mock
- Photo upload UI mock

### Technical Stack
- Frontend: Next.js 14, React 18, Tailwind CSS, TypeScript, Axios
- Backend: FastAPI, Python 3.10, SQLAlchemy, Pydantic
- Database: PostgreSQL
- Deployment: Vercel (frontend), Railway (backend), Neon (database)

### Known Limitations
- Authentication is basic (to be enhanced in Phase 2)
- Admin dashboard is UI mockup (backend integration needed)
- Contact form doesn't submit (needs backend integration)
- Payment system not implemented
- Email/SMS notifications not implemented
- Only English language support
- No user booking system yet

### To-Do (Phase 2)
- [ ] Complete admin dashboard backend integration
- [ ] Implement JWT authentication
- [ ] Add payment gateway (Razorpay/UPI)
- [ ] Create booking system
- [ ] Add email notifications
- [ ] Add SMS notifications
- [ ] User registration and profiles
- [ ] Advanced filtering and search
- [ ] Review and rating system

---

## How to Use This Changelog

1. **For Users**: Check what's new in each release
2. **For Developers**: Track feature implementations and bug fixes
3. **For Planning**: Reference completed and pending features

## Version Numbering

- MAJOR: Significant releases with many new features
- MINOR: New features or improvements
- PATCH: Bug fixes and small improvements

## Contribution Notes

When adding features, update this changelog with:
- What was added
- Why it was added
- Any breaking changes
- Known issues
- Related PR/issue numbers

---

**Last Updated**: May 30, 2026
**Next Review**: 2 weeks after Phase 2 launch
