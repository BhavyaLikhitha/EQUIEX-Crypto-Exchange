import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import nftRouter from "../routers/nft-routers.js";
const initialize = (app) => {
    // Middleware setup
    app.use(express.json());  // To parse JSON request bodies
    app.use(cors());
    app.use(express.urlencoded());
    mongoose.connect(process.env.MONGO_CONNECTION);
  
    // Define routes
    app.use("/nfts", nftRouter); 
   
};

export default initialize;