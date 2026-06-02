from pydantic import BaseModel
from datetime import datetime
from typing import Optional, List


# User Schemas
class UserCreate(BaseModel):
    username: str
    email: str
    password: str


class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    is_admin: bool

    class Config:
        from_attributes = True


# Event Schemas
class EventCreate(BaseModel):
    title: str
    description: Optional[str] = None
    start_date: datetime
    end_date: datetime
    starting_location: Optional[str] = None
    duration: Optional[int] = None
    price: float
    seats_total: int
    itinerary: Optional[str] = None


class EventUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    start_date: Optional[datetime] = None
    end_date: Optional[datetime] = None
    starting_location: Optional[str] = None
    price: Optional[float] = None
    seats_total: Optional[int] = None
    itinerary: Optional[str] = None


class EventResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    start_date: datetime
    end_date: datetime
    starting_location: Optional[str]
    duration: Optional[int]
    price: float
    seats_total: int
    seats_available: int
    itinerary: Optional[str]
    cover_photo_url: Optional[str]
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True


# Photo Schemas
class PhotoCreate(BaseModel):
    image_url: str
    caption: Optional[str] = None


class PhotoResponse(BaseModel):
    id: int
    event_id: int
    image_url: str
    caption: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True


# Enquiry Schemas
class EnquiryCreate(BaseModel):
    customer_name: str
    customer_phone: str
    customer_email: Optional[str] = None
    message: Optional[str] = None


class EnquiryResponse(BaseModel):
    id: int
    event_id: int
    customer_name: str
    customer_phone: str
    customer_email: Optional[str]
    message: Optional[str]
    created_at: datetime

    class Config:
        from_attributes = True
