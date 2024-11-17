import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import personRouter from "./service/routers/person-router.js";
import userRouter from "./service/routers/user-routers.js";
import { coinRouter } from './service/routers/coin-router.js';
import { trackerRouter } from './service/routers/tracker-router.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/persons", personRouter);
app.use("/auth", userRouter);
app.use('/coins', coinRouter);
app.use('/user/:userId/coin-tracker', trackerRouter);
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

