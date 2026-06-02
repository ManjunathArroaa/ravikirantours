# Backend API Setup Guide

## Prerequisites
- Python 3.10 or higher
- PostgreSQL 14 or higher
- pip and venv

## Installation

1. **Create virtual environment:**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Create environment file:**
```bash
cp .env.example .env
```

4. **Update environment variables** in `.env`:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/ravikirantours
SECRET_KEY=your-secret-key-change-in-production
UPLOAD_DIR=./uploads
```

## Database Setup

### PostgreSQL
```bash
# Create database
createdb ravikirantours

# Or using psql
psql -U postgres
CREATE DATABASE ravikirantours;
```

### Neon PostgreSQL (Cloud)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a project and database
3. Copy connection string to `DATABASE_URL` in `.env`

## Running the Application

### Development
```bash
python main.py
```

The API will be available at `http://localhost:8000`
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Production
```bash
gunicorn -w 4 -b 0.0.0.0:8000 main:app
```

## Project Structure

```
backend/
├── main.py                 # FastAPI app entry point
├── models.py              # SQLAlchemy database models
├── schemas.py             # Pydantic validation schemas
├── database.py            # Database configuration
├── config.py              # Application configuration
├── routes/                # API route handlers
│   ├── __init__.py
│   ├── events.py          # Event endpoints
│   ├── photos.py          # Photo endpoints
│   ├── enquiries.py       # Enquiry endpoints
│   └── auth.py            # Authentication
├── requirements.txt       # Python dependencies
├── .env.example          # Environment template
└── README.md             # This file
```

## API Endpoints

### Health Check
```
GET /health
GET /
```

### Events
```
GET    /events                    # List all events
GET    /events/{id}               # Get event details
POST   /events                    # Create new event
PUT    /events/{id}               # Update event
DELETE /events/{id}               # Archive event
POST   /events/{id}/complete      # Mark completed
```

### Photos
```
GET    /events/{event_id}/photos       # List event photos
POST   /events/{event_id}/photos       # Upload photo
DELETE /photos/{photo_id}              # Delete photo
```

### Enquiries
```
GET    /enquiries                      # List all enquiries
GET    /enquiries/{id}                 # Get enquiry
POST   /enquiries                      # Create enquiry
GET    /enquiries/event/{event_id}     # Get event enquiries
```

### Authentication
```
POST   /auth/register            # Register user
POST   /auth/login               # Login user
```

## Database Schema

### Users
- id (Primary Key)
- username (Unique)
- password_hash
- email (Unique)
- is_admin (Boolean)
- created_at (Timestamp)

### Events
- id (Primary Key)
- title
- description
- start_date
- end_date
- starting_location
- duration
- price
- seats_total
- seats_available
- itinerary
- cover_photo_url
- created_by_id (FK → Users)
- is_archived
- created_at, updated_at

### Photos
- id (Primary Key)
- event_id (FK → Events)
- image_url
- caption
- created_at

### Enquiries
- id (Primary Key)
- event_id (FK → Events)
- customer_name
- customer_phone
- customer_email
- message
- created_at

## API Request Examples

### Create Event
```bash
curl -X POST "http://localhost:8000/events" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Kashi Yatra",
    "description": "Sacred journey to Varanasi",
    "start_date": "2026-10-15T00:00:00",
    "end_date": "2026-10-19T23:59:59",
    "starting_location": "Varanasi",
    "price": 14999,
    "seats_total": 25
  }'
```

### Upload Photo
```bash
curl -X POST "http://localhost:8000/events/1/photos" \
  -F "file=@photo.jpg" \
  -F "caption=Temple image"
```

### Create Enquiry
```bash
curl -X POST "http://localhost:8000/enquiries" \
  -H "Content-Type: application/json" \
  -d '{
    "event_id": 1,
    "customer_name": "Rajesh Kumar",
    "customer_phone": "9876543210",
    "customer_email": "rajesh@example.com",
    "message": "Interested in Kashi Yatra"
  }'
```

## Error Handling

The API returns standard HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Server Error

Error response format:
```json
{
  "detail": "Error message"
}
```

## Deployment

### Docker
```dockerfile
FROM python:3.10-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000
CMD ["python", "main.py"]
```

### Railway
1. Connect GitHub repository
2. Set environment variables
3. Deploy

### AWS/GCP
Use any Python deployment service with:
- Python 3.10+
- PostgreSQL database
- Environment variables configuration

## Debugging

### Enable SQL logging
```python
# In database.py
engine = create_engine(..., echo=True)
```

### Access logs
```bash
tail -f logs/app.log
```

### Database connection test
```python
from database import SessionLocal
db = SessionLocal()
db.execute("SELECT 1")
print("Connected!")
db.close()
```

## Environment Variables Reference

| Variable | Default | Description |
|----------|---------|-------------|
| `DATABASE_URL` | PostgreSQL URL | Database connection string |
| `SECRET_KEY` | - | Secret for security (CHANGE IN PRODUCTION) |
| `UPLOAD_DIR` | `./uploads` | Photo upload directory |
| `CORS_ORIGINS` | Local + production | Allowed CORS origins |

## Common Issues

### Database Connection Error
- Check `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify database exists

### File Upload Fails
- Check `UPLOAD_DIR` permissions
- Ensure directory exists: `mkdir uploads`
- Check file size limits

### CORS Errors
- Update `CORS_ORIGINS` in `config.py`
- Check frontend URL is in the list

## Performance Optimization

1. Add database indexes
2. Implement caching (Redis)
3. Use async database queries
4. Add pagination to list endpoints
5. Optimize photo serving with CDN

## Security Checklist

- [ ] Change `SECRET_KEY` in production
- [ ] Use HTTPS in production
- [ ] Enable database SSL
- [ ] Set strong database passwords
- [ ] Implement rate limiting
- [ ] Add request validation
- [ ] Use environment variables for secrets
- [ ] Enable CORS only for trusted domains

## Support

For issues or questions, contact: info@ravikirantours.com
