# Hotel Booking Platform Backend

## Run locally

```bash
npm install
npm run dev
```

The server listens on port `5000` by default. Check `http://localhost:5000/api/health` in a browser to receive a JSON health response. The root URL also confirms that the API is running.

## Backend folders

`src/routes` maps HTTP paths to handlers; the health-check route is in `testRoutes.js`. `src/controllers` will hold request-handling logic, while `src/services` will contain reusable application and business operations. `src/models` defines database models. `src/middleware` holds Express functions that process requests before route handlers, such as authentication or error handling. `src/config` contains configuration modules, including the database connection. `src/utils` is for shared helper functions. `src/public` is reserved for public static files, and `src/uploads` for user-provided files. `app.js` configures Express and middleware, while `server.js` loads environment settings and starts the HTTP listener. Keeping these responsibilities separate makes the backend easier to extend and maintain.
