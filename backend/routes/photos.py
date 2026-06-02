from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
from database import get_db
from models import Photo, Event
from schemas import PhotoResponse
import os
import shutil
from config import settings

router = APIRouter(prefix='/events', tags=['photos'])


@router.get('/{event_id}/photos', response_model=list[PhotoResponse])
async def get_event_photos(event_id: int, db: Session = Depends(get_db)):
    """Get all photos for an event"""
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    return db.query(Photo).filter(Photo.event_id == event_id).all()


@router.post('/{event_id}/photos', response_model=PhotoResponse)
async def upload_photo(
    event_id: int,
    file: UploadFile = File(...),
    caption: str = None,
    db: Session = Depends(get_db)
):
    """Upload a photo for an event"""
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    # Validate file
    if file.size > settings.MAX_UPLOAD_SIZE:
        raise HTTPException(status_code=400, detail='File too large')
    
    # Create uploads directory if it doesn't exist
    os.makedirs(settings.UPLOAD_DIR, exist_ok=True)
    
    # Save file
    file_location = f'{settings.UPLOAD_DIR}/{event_id}_{file.filename}'
    with open(file_location, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Save to database
    db_photo = Photo(
        event_id=event_id,
        image_url=f'/uploads/{event_id}_{file.filename}',
        caption=caption
    )
    db.add(db_photo)
    db.commit()
    db.refresh(db_photo)
    
    return db_photo


@router.delete('/photos/{photo_id}')
async def delete_photo(photo_id: int, db: Session = Depends(get_db)):
    """Delete a photo"""
    photo = db.query(Photo).filter(Photo.id == photo_id).first()
    if not photo:
        raise HTTPException(status_code=404, detail='Photo not found')
    
    # Delete file if exists
    file_path = f'.{photo.image_url}'
    if os.path.exists(file_path):
        os.remove(file_path)
    
    db.delete(photo)
    db.commit()
    
    return {'message': 'Photo deleted successfully'}
