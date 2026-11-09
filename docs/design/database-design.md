# MongoDB Database Collection Design
## Hotel Booking System

The Hotel Booking System uses MongoDB to store user, room, customer, booking, check-in and payment information.

### Collection 1 — Users

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Unique user ID |
| name | String | User name |
| email | String | Login email |
| password | String | Hashed password |
| role | String | Admin/Receptionist/Customer |
| phone | String | Phone number |
| status | String | Active/Inactive |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 2 — RoomCategories

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Category ID |
| categoryName | String | Single/Double/Deluxe/Suite |
| description | String | Category description |
| pricePerNight | Number | Price per night |
| amenities | Array | Room facilities |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 3 — Rooms

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Unique room ID |
| roomNumber | String | Room number |
| categoryId | ObjectId | Room category reference |
| roomType | String | Room type |
| description | String | Room description |
| price | Number | Price per night |
| capacity | Number | Maximum guests |
| status | String | Available/Reserved/Occupied/Maintenance |
| amenities | Array | Room facilities |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 4 — Customers

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Customer ID |
| userId | ObjectId | Related user |
| fullName | String | Customer name |
| email | String | Customer email |
| phone | String | Phone number |
| address | String | Customer address |
| identityType | String | Passport/ID |
| identityNumber | String | Identity number |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 5 — Bookings

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Booking ID |
| customerId | ObjectId | Customer reference |
| roomId | ObjectId | Room reference |
| bookingDate | Date | Booking creation date |
| checkInDate | Date | Planned check-in |
| checkOutDate | Date | Planned check-out |
| numberOfGuests | Number | Number of guests |
| totalAmount | Number | Total booking amount |
| bookingStatus | String | Pending/Confirmed/Cancelled/Completed |
| paymentStatus | String | Pending/Paid/Refunded |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 6 — CheckIns

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Check-in ID |
| bookingId | ObjectId | Booking reference |
| customerId | ObjectId | Customer reference |
| roomId | ObjectId | Room reference |
| actualCheckIn | Date | Actual check-in time |
| actualCheckOut | Date | Actual check-out time |
| status | String | Checked-in/Checked-out |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

### Collection 7 — Payments

| Field | Type | Description |
|---|---|---|
| _id | ObjectId | Payment ID |
| bookingId | ObjectId | Booking reference |
| customerId | ObjectId | Customer reference |
| amount | Number | Paid amount |
| paymentDate | Date | Payment date |
| paymentMethod | String | Cash/Card/Online |
| paymentStatus | String | Pending/Paid/Refunded |
| transactionReference | String | Transaction reference |
| createdAt | Date | Creation date |
| updatedAt | Date | Last update |

## Database Relationship Summary

```text
USERS
  |
  | userId
  v
CUSTOMERS
  |
  | customerId
  v
BOOKINGS
  |
  | roomId
  v
ROOMS
  |
  | categoryId
  v
ROOMCATEGORIES

BOOKINGS
  |
  | bookingId
  v
CHECKINS

BOOKINGS
  |
  | bookingId
  v
PAYMENTS