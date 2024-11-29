import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import userRoutes from "../routers/user-routers.js"; // Import user routes from a routes file
import coinRoutes from "../routers/coin-routers.js";
const initialize = (app) => {
    // Middleware setup
    app.use(express.json());  // To parse JSON request bodies
    app.use(cors());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONNECTION);
  
    // Define routes
    app.use("/users", userRoutes);  // Mount the user routes at '/users'
    app.use("/coins", coinRoutes);
    app.use(coinRoutes);
   
};

export default initialize;
