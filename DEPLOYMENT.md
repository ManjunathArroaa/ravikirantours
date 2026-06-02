# Installation & Deployment Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js 18+
- Python 3.10+
- PostgreSQL 14+

### Step 1: Clone and Setup Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Frontend will be at `http://localhost:3000`

### Step 2: Setup Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

Update `.env` with your database credentials:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/ravikirantours
```

Then start the backend:
```bash
python main.py
```

Backend will be at `http://localhost:8000`

## Database Setup

### Local PostgreSQL

1. **Create database:**
```bash
# Using psql
psql -U postgres
CREATE DATABASE ravikirantours;
-- Tables will be created automatically by SQLAlchemy on first run
```

2. **Update .env:**
```env
DATABASE_URL=postgresql://postgres:password@localhost:5432/ravikirantours
```

### Cloud Database (Neon)

1. Sign up at [neon.tech](https://neon.tech)
2. Create a project
3. Copy the connection string
4. Update `.env`:
```env
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]
```

## Production Deployment

### Frontend on Vercel

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Set environment variables from `.env.example`
   - Deploy

3. **Environment Variables on Vercel:**
```
NEXT_PUBLIC_API_URL=https://your-api.railway.app
NEXT_PUBLIC_WHATSAPP_NUMBER=918123139426
NEXT_PUBLIC_SITE_EMAIL=info@ravikirantours.com
NEXT_PUBLIC_PHONE_NUMBER=8123139426
```

### Backend on Railway

1. **Prepare for deployment**
```bash
# Add Procfile
echo "web: python main.py" > Procfile
```

2. **Push to GitHub**
```bash
git push
```

3. **Deploy on Railway**
   - Go to [railway.app](https://railway.app)
   - Create new project
   - Connect GitHub repository
   - Set up PostgreSQL database
   - Deploy

4. **Railway Environment Variables:**
```
DATABASE_URL=[from Railway PostgreSQL]
SECRET_KEY=[generate strong key]
UPLOAD_DIR=/var/uploads
CORS_ORIGINS=["https://your-domain.vercel.app"]
```

### Database on Neon

1. Sign up at [neon.tech](https://neon.tech)
2. Create PostgreSQL project
3. Copy connection string
4. Set in Railway environment as `DATABASE_URL`

## Manual Deployment

### Using Docker

**Frontend Dockerfile:**
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

**Backend Dockerfile:**
```dockerfile
FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["python", "main.py"]
```

**Build and run:**
```bash
# Frontend
docker build -t ravikirantours-frontend ./frontend
docker run -p 3000:3000 ravikirantours-frontend

# Backend  
docker build -t ravikirantours-backend ./backend
docker run -p 8000:8000 ravikirantours-backend
```

## Environment Checklist

### Frontend (.env.local / Vercel)
- [ ] `NEXT_PUBLIC_API_URL` - Backend API URL
- [ ] `NEXT_PUBLIC_WHATSAPP_NUMBER` - Business WhatsApp number
- [ ] `NEXT_PUBLIC_SITE_EMAIL` - Contact email
- [ ] `NEXT_PUBLIC_PHONE_NUMBER` - Contact phone

### Backend (.env / Railway)
- [ ] `DATABASE_URL` - PostgreSQL connection string
- [ ] `SECRET_KEY` - Strong secret key (change from default)
- [ ] `UPLOAD_DIR` - Upload directory path
- [ ] `CORS_ORIGINS` - Allowed frontend URL

## Testing Deployment

1. **Test Frontend**
   - Visit your Vercel URL
   - Check header and navigation
   - Verify WhatsApp button works

2. **Test Backend**
   - Visit `/docs` endpoint
   - Try health check: `GET /health`
   - Try creating an event

3. **Test Integration**
   - Create event from admin dashboard
   - Upload photo
   - View on homepage
   - Test WhatsApp link

## Monitoring

### Frontend (Vercel)
- Dashboard shows build status
- Performance metrics available
- Real-time logs

### Backend (Railway)
- Logs viewable in dashboard
- Monitor database connection
- Check memory usage

## SSL/HTTPS

- **Vercel** - Automatically provides HTTPS with free SSL
- **Railway** - Automatically provides HTTPS
- Update `NEXT_PUBLIC_API_URL` to use `https://`

## Backup & Maintenance

### Database Backup
```bash
# Backup PostgreSQL
pg_dump dbname > backup.sql

# Restore
psql dbname < backup.sql
```

### Update Dependencies
```bash
# Frontend
npm update
npm audit fix

# Backend
pip install --upgrade -r requirements.txt
```

## Troubleshooting Deployment

### Frontend won't load
- Check Vercel build logs
- Verify environment variables
- Check API URL is correct

### Backend API errors
- Check Railway logs
- Verify database connection
- Check CORS_ORIGINS setting

### Database connection fails
- Verify DATABASE_URL format
- Check database exists
- Verify network access allowed

## Cost Estimates (Free Tier Eligible)

- **Vercel Frontend** - Free tier included
- **Railway Backend** - $5/month starter
- **Neon PostgreSQL** - Free tier included
- **Total** - ~$5/month or less

## Support

For deployment issues:
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Neon Docs: https://neon.tech/docs
- FastAPI Docs: https://fastapi.tiangolo.com
- Next.js Docs: https://nextjs.org/docs

Email: info@ravikirantours.com
