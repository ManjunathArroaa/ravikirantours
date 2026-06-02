from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os

from config import settings
from database import Base, engine
from routes import events, photos, enquiries, auth

# Create database tables
Base.metadata.create_all(bind=engine)

# Initialize FastAPI app
app = FastAPI(
    title=settings.API_TITLE,
    version=settings.API_VERSION,
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

# Static files for uploads
if not os.path.exists(settings.UPLOAD_DIR):
    os.makedirs(settings.UPLOAD_DIR)
app.mount('/uploads', StaticFiles(directory=settings.UPLOAD_DIR), name='uploads')

# Include routes
app.include_router(auth.router)
app.include_router(events.router)
app.include_router(photos.router)
app.include_router(enquiries.router)


# Health check endpoint
@app.get('/health')
async def health_check():
    return {'status': 'ok', 'message': 'Ravi Kiran Tours API is running'}


@app.get('/')
async def root():
    return {
        'name': 'Ravi Kiran Tours API',
        'version': settings.API_VERSION,
        'docs': '/docs'
    }


if __name__ == '__main__':
    import uvicorn
    uvicorn.run(
        'main:app',
        host='0.0.0.0',
        port=8000,
        reload=True
    )
