import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import nftRouter from "../routers/nft-routers.js";
import buySellRouter from '../routers/buy-sell-routers.js';
const initialize = (app) => {
    // Middleware setup
    app.use(express.json());  // To parse JSON request bodies
    app.use(cors());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));
    // Define routes
    app.use("/nfts", nftRouter); 
    app.use("/orders", buySellRouter);
   
};

export default initialize;