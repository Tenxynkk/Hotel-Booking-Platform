const express = require("express");
const cors = require("cors");
const requestLogger = require("./middleware/requestLogger");
const roomRoutes = require("./routes/roomRoutes");
const testRoutes = require("./routes/testRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(requestLogger);
app.use("/api", testRoutes);
app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Booking System API is running"
  });
});

module.exports = app;
