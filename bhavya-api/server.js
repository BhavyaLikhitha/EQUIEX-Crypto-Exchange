import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRouter from './service/routers/user-router.js';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(userRouter);
mongoose.connect(process.env.MONGO_CONNECTION)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });
