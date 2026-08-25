Functional requirements describe what the system must do.

For the Hotel Booking System, we can define the following.

FR-01: User Registration

The system shall allow new customers to create an account.

FR-02: User Login

The system shall allow registered users to securely log in.

FR-03: User Logout

The system shall allow authenticated users to log out.

FR-04: Role-Based Access

The system shall provide different access permissions based on the user's role.

Example:

Administrator
      ↓
Full system access

Receptionist
      ↓
Booking + Customer + Check-in/out

Customer
      ↓
Room search + Booking + Profile
FR-05: Room Management

The administrator shall be able to:

Add rooms
View rooms
Update rooms
Delete rooms
Set room price
Set room type
Update room status
FR-06: Room Search

Customers and authorized staff shall be able to search for rooms.

Search criteria may include:

Room type
Availability
Price
Capacity
FR-07: Room Availability

The system shall display whether a room is:

Available
Occupied
Reserved
Maintenance
FR-08: Customer Management

Authorized staff shall be able to:

Add customers
View customers
Update customers
Delete customers
Search customers
View customer details
FR-09: Create Booking

The system shall allow customers or authorized staff to create a room booking.

Booking information may include:

Customer
Room
Check-in Date
Check-out Date
Number of Guests
Booking Status
Payment Status
FR-10: View Bookings

Authorized users shall be able to view booking information.

FR-11: Update Booking

Authorized staff shall be able to update booking information.

FR-12: Cancel Booking

The system shall allow authorized users to cancel a booking according to the system rules.

FR-13: Booking Status

The system shall maintain booking statuses such as:

Pending
Confirmed
Checked-in
Completed
Cancelled
FR-14: Check-in

Authorized staff shall be able to record customer check-in.

FR-15: Check-out

Authorized staff shall be able to record customer check-out.

FR-16: Payment Management

Authorized staff shall be able to record and view payment information.

Payment information may include:

Booking ID
Customer
Amount
Payment Date
Payment Method
Payment Status
FR-17: Dashboard

The system shall provide dashboards showing important hotel information.

FR-18: Reports

The system shall allow authorized users to view relevant reports.

FR-19: Profile Management

Users shall be able to view and update their profile information.

FR-20: Search and Filter

The system shall provide search and filtering functionality for relevant records such as rooms, customers, and bookings.

Functional Requirements Table

You can put this table directly into your documentation.

ID	Functional Requirement
FR-01	User registration
FR-02	User login
FR-03	User logout
FR-04	Role-based access
FR-05	Room management
FR-06	Room search
FR-07	Room availability
FR-08	Customer management
FR-09	Create booking
FR-10	View bookings
FR-11	Update booking
FR-12	Cancel booking
FR-13	Booking status management
FR-14	Check-in management
FR-15	Check-out management
FR-16	Payment management
FR-17	Dashboard
FR-18	Reports
FR-19	Profile management
FR-20	Search and filtering