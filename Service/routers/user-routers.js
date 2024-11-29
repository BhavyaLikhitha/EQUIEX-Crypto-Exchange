import express from "express";
import * as userController from "../controllers/user-controller.js";

const router = express.Router();

// POST /users/signup - Register a new user
router.post("/signup", userController.postSignup);

// POST /users/login - Login a user
router.post("/login", userController.postLogin);

// GET /users/:email - Get user details by email
router.get("/:email", userController.getUser);

// PUT /users/:email - Update user details
router.put("/:email", userController.putUser);

// DELETE /users/:email - Delete user
router.delete("/:email", userController.deleteUser);
// GET /users - Get all users
router.get("/", userController.getAllUsers); // New route to get all users

export default router;
