from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import get_db
from models import Event
from schemas import EventCreate, EventUpdate, EventResponse
from datetime import datetime

router = APIRouter(prefix='/events', tags=['events'])


@router.get('/', response_model=list[EventResponse])
async def get_events(
    skip: int = 0,
    limit: int = 100,
    archived: bool = False,
    db: Session = Depends(get_db)
):
    """Get all events with pagination"""
    query = db.query(Event).filter(Event.is_archived == archived)
    return query.offset(skip).limit(limit).all()


@router.get('/{event_id}', response_model=EventResponse)
async def get_event(event_id: int, db: Session = Depends(get_db)):
    """Get a specific event by ID"""
    event = db.query(Event).filter(Event.id == event_id).first()
    if not event:
        raise HTTPException(status_code=404, detail='Event not found')
    return event


@router.post('/', response_model=EventResponse)
async def create_event(
    event: EventCreate,
    db: Session = Depends(get_db)
):
    """Create a new event"""
    # Calculate duration
    duration = (event.end_date - event.start_date).days + 1
    
    db_event = Event(
        **event.dict(),
        duration=duration,
        seats_available=event.seats_total,
        created_by_id=1  # TODO: Get from auth context
    )
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    return db_event


@router.put('/{event_id}', response_model=EventResponse)
async def update_event(
    event_id: int,
    event_data: EventUpdate,
    db: Session = Depends(get_db)
):
    """Update an existing event"""
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    # Update only provided fields
    update_data = event_data.dict(exclude_unset=True)
    
    # Recalculate duration if dates changed
    if 'start_date' in update_data or 'end_date' in update_data:
        start = update_data.get('start_date', db_event.start_date)
        end = update_data.get('end_date', db_event.end_date)
        update_data['duration'] = (end - start).days + 1
    
    for key, value in update_data.items():
        setattr(db_event, key, value)
    
    db.commit()
    db.refresh(db_event)
    return db_event


@router.delete('/{event_id}')
async def delete_event(event_id: int, db: Session = Depends(get_db)):
    """Delete an event (soft delete by archiving)"""
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    # Soft delete - archive the event
    db_event.is_archived = True
    db.commit()
    
    return {'message': 'Event archived successfully'}


@router.post('/{event_id}/complete')
async def mark_event_completed(event_id: int, db: Session = Depends(get_db)):
    """Mark an event as completed"""
    db_event = db.query(Event).filter(Event.id == event_id).first()
    if not db_event:
        raise HTTPException(status_code=404, detail='Event not found')
    
    # Archive completed events
    db_event.is_archived = True
    db.commit()
    
    return {'message': 'Event marked as completed'}
