import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    # Database
    # For local development, use SQLite. For production, use PostgreSQL
    DATABASE_URL = os.getenv(
        'DATABASE_URL',
        'sqlite:///./test.db'  # Local SQLite database
    )
    
    # API
    API_TITLE = 'Ravi Kiran Tours API'
    API_VERSION = '1.0.0'
    
    # Security
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key-change-in-production')
    ALGORITHM = 'HS256'
    ACCESS_TOKEN_EXPIRE_MINUTES = 30
    
    # CORS
    CORS_ORIGINS = ['http://localhost:3000', 'https://ravikirantours.com']
    
    # File Upload
    UPLOAD_DIR = os.getenv('UPLOAD_DIR', './uploads')
    MAX_UPLOAD_SIZE = 10 * 1024 * 1024  # 10MB

settings = Settings()
