// app.js
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "../routers/user-routers.js"; // Import user routes from a routes file
import router from "../routers/portfolio-routers.js";
import watchlistRouter from "../routers/watchlist-routers.js";

const initialize = (app) => {
    // Middleware setup
    app.use(express.json()); // Parse incoming JSON request bodies
    app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // Connect to MongoDB using the connection string from environment variables
    mongoose.connect(process.env.MONGO_CONNECTION)
        .then(() => console.log("MongoDB connected"))  // Log success message on successful connection
        .catch(err => console.error("MongoDB connection error:", err));

    // Route setups    
    app.use("/users", userRoutes); // Mount user-related routes at the '/users' endpoint
    app.use("/portfolio",router);
    app.use("/tracker",watchlistRouter);
};

export default initialize;
