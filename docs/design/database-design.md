Collection 1 — users
Field	Type	Description
_id	ObjectId	Unique user ID
name	String	User name
email	String	Login email
password	String	Hashed password
role	String	admin/receptionist/customer
phone	String	Phone number
status	String	active/inactive
createdAt	Date	Creation date
updatedAt	Date	Last update
Collection 2 — rooms
Field	Type	Description
_id	ObjectId	Unique room ID
roomNumber	String	Room number
roomType	String	Single/Double/Deluxe/Suite
description	String	Room description
price	Number	Price per night
capacity	Number	Maximum guests
status	String	Available/Reserved/Occupied/Maintenance
amenities	Array	Room facilities
createdAt	Date	Creation date
updatedAt	Date	Last update
Collection 3 — customers
Field	Type	Description
_id	ObjectId	Customer ID
userId	ObjectId	Related user
fullName	String	Customer name
email	String	Customer email
phone	String	Phone
address	String	Address
identityType	String	Passport/ID/etc.
identityNumber	String	Identity number
createdAt	Date	Creation date
updatedAt	Date	Last update
Collection 4 — bookings
Field	Type	Description
_id	ObjectId	Booking ID
customerId	ObjectId	Customer reference
roomId	ObjectId	Room reference
bookingDate	Date	Booking creation date
checkInDate	Date	Planned check-in
checkOutDate	Date	Planned check-out
numberOfGuests	Number	Number of guests
totalAmount	Number	Total booking amount
bookingStatus	String	Booking status
paymentStatus	String	Payment status
actualCheckIn	Date	Actual check-in
actualCheckOut	Date	Actual check-out
createdAt	Date	Creation date
updatedAt	Date	Last update
Collection 5 — payments
Field	Type	Description
_id	ObjectId	Payment ID
bookingId	ObjectId	Booking reference
customerId	ObjectId	Customer reference
amount	Number	Paid amount
paymentDate	Date	Payment date
paymentMethod	String	Cash/Card/Online
paymentStatus	String	Pending/Paid/Refunded
transactionReference	String	Transaction reference
createdAt	Date	Creation date
updatedAt	Date	Update date
Database Relationship Summary
USERS
  │
  │ userId
  ▼
CUSTOMERS
  │
  │ customerId
  ▼
BOOKINGS
  │
  ├── roomId ───────► ROOMS
  │
  └── bookingId ────► PAYMENTS