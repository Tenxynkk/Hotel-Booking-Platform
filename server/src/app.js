const express = require("express");
const cors = require("cors");
const testRoutes = require("./routes/testRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", testRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Hotel Booking System API is running"
  });
});

module.exports = app;
