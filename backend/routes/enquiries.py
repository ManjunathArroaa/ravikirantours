from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Enquiry, Event
from schemas import EnquiryCreate, EnquiryResponse

router = APIRouter(prefix='/enquiries', tags=['enquiries'])


@router.get('/', response_model=list[EnquiryResponse])
async def get_enquiries(
    skip: int = 0,
    limit: int = 100,
    db: Session = Depends(get_db)
):
    """Get all enquiries"""
    return db.query(Enquiry).offset(skip).limit(limit).all()


@router.get('/{enquiry_id}', response_model=EnquiryResponse)
async def get_enquiry(enquiry_id: int, db: Session = Depends(get_db)):
    """Get a specific enquiry"""
    enquiry = db.query(Enquiry).filter(Enquiry.id == enquiry_id).first()
    if not enquiry:
        raise HTTPException(status_code=404, detail='Enquiry not found')
    return enquiry


@router.post('/', response_model=EnquiryResponse)
async def create_enquiry(
    enquiry: EnquiryCreate,
    db: Session = Depends(get_db)
):
    """Create a new enquiry"""
    # Verify event exists if event_id is provided
    if hasattr(enquiry, 'event_id') and enquiry.event_id:
        event = db.query(Event).filter(Event.id == enquiry.event_id).first()
        if not event:
            raise HTTPException(status_code=404, detail='Event not found')
    
    db_enquiry = Enquiry(**enquiry.dict())
    db.add(db_enquiry)
    db.commit()
    db.refresh(db_enquiry)
    return db_enquiry


@router.get('/event/{event_id}', response_model=list[EnquiryResponse])
async def get_event_enquiries(
    event_id: int,
    db: Session = Depends(get_db)
):
    """Get all enquiries for a specific event"""
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    return db.query(Enquiry).filter(Enquiry.event_id == event_id).all()
