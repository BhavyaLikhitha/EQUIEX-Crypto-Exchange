import dotenv from "dotenv";
import express from "express";
import initialize from "./service/app.js"; // Import the initialize function that sets up routes, DB, etc.

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000; // Default to 3000 if PORT is not set in .env file

initialize(app); // Initialize routes, middleware, and MongoDB connection

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
