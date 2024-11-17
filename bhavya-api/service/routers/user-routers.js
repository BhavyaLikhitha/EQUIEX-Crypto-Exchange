import express from "express";
import { loginUser, registerUser } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", registerUser);

export default router;
