import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv"; // Load environment variables
import initializeRoutes from "./routers/index.js"; // Import the route initializer

dotenv.config(); // Ensure environment variables are loaded from a .env file

const initialize = (app) => {
  app.use(cors()); // Enable CORS for all routes
  app.use(express.json()); // Enable JSON body parsing
  app.use(express.urlencoded({ extended: true })); // Enable URL encoding for form data
  
  // Initialize routes
  initializeRoutes(app); 

  // Connect to MongoDB using the connection string from environment variables
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("Connected to MongoDB successfully.");
  }).catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });
};

export default initialize;
