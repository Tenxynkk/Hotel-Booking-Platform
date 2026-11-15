# Hotel Booking Platform Backend

## MongoDB Atlas setup (Sprint 13)

```bash
npm install
```

1. Create an Atlas database named `HotelBookingDB` and a `rooms` collection (or create the collection in Compass after connecting).
2. In Atlas, create a database user and allow your development IP address in Network Access.
3. Copy `server/.env.example` to `server/.env`. Replace the `MONGODB_URI` placeholders with the Atlas connection string and your credentials. URL-encode any special characters in the password.
4. Start the server from `server/`:

   ```bash
   npm run dev
   ```

The backend loads `MONGODB_URI` from `server/.env`, connects through Mongoose, and then listens on port `5000`. `.env` is ignored by Git; do not commit or screenshot its connection string. A missing or invalid connection is reported in the terminal and the server does not start.

The existing health and room API routes remain available after the database connection succeeds. Room endpoints are still test responses and do not read from or write to MongoDB yet.

## Backend folders

`src/routes` maps HTTP paths to handlers, and `src/controllers` holds request-handling logic. `src/middleware` contains request-processing functions such as the request logger. `src/models` defines database models. `src/services` is for reusable application and business operations. `src/config` contains configuration modules, including the database connection, and `src/utils` is for shared helpers. `src/public` is reserved for public static files, and `src/uploads` for user-provided files. `app.js` configures Express, middleware, and routes, while `server.js` loads environment settings and starts the HTTP listener.

## MongoDB terms

`HotelBookingDB` is the database, `rooms` is a collection in that database, and each room record stored in it is a document.

## Room API (Sprint 12)

These are test endpoints and do not read from or write to MongoDB yet:

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/rooms` | List rooms |
| GET | `/api/rooms/:id` | Get a room by ID |
| POST | `/api/rooms` | Test room creation |
| PUT | `/api/rooms/:id` | Test room update |
| DELETE | `/api/rooms/:id` | Test room deletion |

JSON request bodies are echoed in the POST and PUT responses. The request logger prints the method, URL, and timestamp in the server terminal.
