// app.js
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import userRoutes from "../routers/user-routers.js"; // Import user routes from a routes file
import router from "../routers/portfolio-routers.js";

const initialize = (app) => {
    // Middleware setup
    app.use(express.json());  // To parse JSON request bodies
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    mongoose.connect(process.env.MONGO_CONNECTION)
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.error("MongoDB connection error:", err));
    app.use("/users", userRoutes);  // Mount the user routes at '/users'
    app.use("/portfolio",router);
};

export default initialize;
