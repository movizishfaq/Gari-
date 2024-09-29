const express = require("express");
const errorhandler = require("./middleware/errormiddleware.js");
const connectDB = require("./config/connect.js");

const app = express();

// Load environment variables from the .env file
require("dotenv").config();
require("colors");
const cors = require("cors");
app.use(cors());
connectDB();
// Convert the data into JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API for users
app.use("/api/users", require("./routes/userRoutes.js"));

app.use("/api/cars", require("./routes/CarRoutes.js"));
// Use the errorhandler middleware
app.use(errorhandler);

// Start the server
app.listen(process.env.PORT, () =>
  console.log(`SERVER STARTED SUCCESSFULLY ON: ${process.env.PORT.blue}`)
);
