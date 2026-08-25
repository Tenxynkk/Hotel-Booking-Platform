
Exercise 5: Design Application Workflow

Now we define the actual system workflow.

General Workflow
START
  │
  ▼
Open Website
  │
  ▼
Login / Register
  │
  ▼
Authenticate User
  │
  ├───────────────┐
  │               │
 Invalid          Valid
  │               │
  ▼               ▼
Error          Identify Role
Message            │
                   ├─────────────┐
                   │             │
                   ▼             ▼
                Admin       Receptionist
                   │             │
                   └──────┬──────┘
                          │
                          ▼
                     Dashboard
                          │
                          ▼
                   Select Module
                          │
                          ▼
                    Perform Action
                          │
                          ▼
                    Validate Data
                          │
                    ┌─────┴─────┐
                    │           │
                  Invalid      Valid
                    │           │
                    ▼           ▼
                  Error      Save Data
                              │
                              ▼
                         MongoDB Updated
                              │
                              ▼
                       Success Response
                              │
                              ▼
                        Update Interface
                              │
                              ▼
                             END
Customer Booking Workflow

This is especially important for your project.

Customer
   │
   ▼
Login / Register
   │
   ▼
Search Available Rooms
   │
   ▼
Select Room
   │
   ▼
View Room Details
   │
   ▼
Enter Check-in / Check-out
   │
   ▼
Check Availability
   │
   ├───────────────┐
   │               │
Unavailable      Available
   │               │
   ▼               ▼
Select Another   Enter Guest Details
Room                │
                    ▼
                Confirm Booking
                    │
                    ▼
              Calculate Amount
                    │
                    ▼
                Payment
                    │
                    ▼
             Booking Confirmed
                    │
                    ▼
             Display Confirmation
Check-in Workflow
Receptionist
     │
     ▼
Open Bookings
     │
     ▼
Search Booking
     │
     ▼
Verify Customer
     │
     ▼
Verify Room
     │
     ▼
Record Check-in
     │
     ▼
Update Booking
Status = Checked-in
     │
     ▼
Update Room
Status = Occupied
Check-out Workflow
Receptionist
     │
     ▼
Search Booking
     │
     ▼
Verify Guest
     │
     ▼
Check Payment
     │
     ▼
Record Check-out
     │
     ▼
Update Booking
Status = Completed
     │
     ▼
Update Room
Status = Available