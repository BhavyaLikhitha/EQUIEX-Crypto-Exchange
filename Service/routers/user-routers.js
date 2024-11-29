import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

// POST /users/signup - Register a new user
router.post("/signup", userController.postSignup);



export default router;
