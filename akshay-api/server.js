import dotenv from "dotenv";  // Import dotenv to manage environment variables
import express from "express"; // Import express framework for building the server
import initialize from "./service/services/app.js"; // Import the initialize function for setting up routes and services

// Load environment variables from a .env file into process.env
dotenv.config();

// Create an Express application instance
const app = express();

// Get the port number from the environment variable (PORT)
const port = process.env.PORT;

// Initialize the application (setup routes, middleware, etc.)
initialize(app);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});