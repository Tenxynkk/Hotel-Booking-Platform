# Hotel Booking Platform Backend

## Run locally

```bash
npm install
npm run dev
```

The server listens on port `5000` by default. Check `http://localhost:5000/api/health` in a browser to receive a JSON health response. The root URL also confirms that the API is running.

## Backend folders

`src/routes` maps HTTP paths to handlers, and `src/controllers` holds request-handling logic. `src/middleware` contains request-processing functions such as the request logger. `src/models` defines database models. `src/services` is for reusable application and business operations. `src/config` contains configuration modules, including the database connection, and `src/utils` is for shared helpers. `src/public` is reserved for public static files, and `src/uploads` for user-provided files. `app.js` configures Express, middleware, and routes, while `server.js` loads environment settings and starts the HTTP listener.

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
