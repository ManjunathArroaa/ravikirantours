from sqlalchemy import Column, Integer, String, Text, DateTime, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base
from datetime import datetime, timedelta


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True)
    is_admin = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())

    events = relationship('Event', back_populates='created_by')


class Event(Base):
    __tablename__ = 'events'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False, index=True)
    description = Column(Text)
    start_date = Column(DateTime, nullable=False)
    end_date = Column(DateTime, nullable=False)
    starting_location = Column(String(255))
    duration = Column(Integer)  # In days
    price = Column(Float, nullable=False)
    seats_total = Column(Integer, nullable=False)
    seats_available = Column(Integer, nullable=False)
    itinerary = Column(Text)
    cover_photo_url = Column(String(500))
    created_by_id = Column(Integer, ForeignKey('users.id'))
    is_archived = Column(Boolean, default=False)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    created_by = relationship('User', back_populates='events')
    photos = relationship('Photo', back_populates='event', cascade='all, delete-orphan')
    enquiries = relationship('Enquiry', back_populates='event', cascade='all, delete-orphan')


class Photo(Base):
    __tablename__ = 'photos'

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey('events.id'), nullable=False)
    image_url = Column(String(500), nullable=False)
    caption = Column(String(255))
    created_at = Column(DateTime, server_default=func.now())

    event = relationship('Event', back_populates='photos')


class Enquiry(Base):
    __tablename__ = 'enquiries'

    id = Column(Integer, primary_key=True, index=True)
    event_id = Column(Integer, ForeignKey('events.id'), nullable=False)
    customer_name = Column(String(255), nullable=False)
    customer_phone = Column(String(20), nullable=False)
    customer_email = Column(String(255))
    message = Column(Text)
    created_at = Column(DateTime, server_default=func.now())

    event = relationship('Event', back_populates='enquiries')
