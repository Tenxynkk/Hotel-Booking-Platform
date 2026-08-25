Non-functional requirements describe how well the system should work, rather than what functions it provides.

NFR-01: Security

The system should protect user accounts and sensitive information.

Passwords should not be stored as plain text.

Authentication should use secure mechanisms such as:

JWT Authentication
Password Hashing
Role-Based Authorization
NFR-02: Performance

The system should respond to normal user requests quickly under expected project usage.

For example:

Normal page and API requests should generally respond within a few seconds under normal conditions.

NFR-03: Usability

The interface should be:

Simple
Clear
User-friendly
Responsive
Easy to navigate
NFR-04: Reliability

The system should operate consistently and prevent invalid or incomplete data from being stored.

NFR-05: Scalability

The application should be structured so that additional features can be added in the future.

For example:

Current
   ↓
Single Hotel

Future
   ↓
Multiple Hotels
NFR-06: Maintainability

The code should be organized into appropriate components and modules.

Example:

client/
server/
docs/

The backend should also separate:

Routes
Controllers
Models
Middleware
Configuration
NFR-07: Availability

The web application should be accessible whenever the server and database services are available.

NFR-08: Compatibility

The system should work with modern browsers such as:

Google Chrome
Microsoft Edge
Mozilla Firefox
NFR-09: Responsiveness

The interface should adapt to different screen sizes, including:

Desktop
Laptop
Tablet
Mobile browser
NFR-10: Data Integrity

The system should prevent invalid booking information and maintain consistent room, customer, booking, and payment records.

Non-Functional Requirements Table
ID	Category	Requirement
NFR-01	Security	Protect user accounts and sensitive information
NFR-02	Performance	Provide reasonable response time under normal usage
NFR-03	Usability	Provide a simple and user-friendly interface
NFR-04	Reliability	Maintain consistent system operation
NFR-05	Scalability	Allow future features and expansion
NFR-06	Maintainability	Use organized and modular code
NFR-07	Availability	System should be accessible when services are running
NFR-08	Compatibility	Support modern web browsers
NFR-09	Responsiveness	Support different screen sizes
NFR-10	Data Integrity	Maintain accurate and consistent records