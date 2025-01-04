import User from "../models/user.js";

// Register a new user
export const registerUser = async (userData) => {
    const { email } = userData;
    const existingUser = await User.findOne({ email }); // Check if the email already exists in the database
    if (existingUser) {
        throw new Error("Email already exists");
    }

    // Create a new user and save to the database
    const newUser = new User(userData);
    return await newUser.save();
};

import jwt from 'jsonwebtoken';  // Import jsonwebtoken

// Login a user
export const loginUser = async (email, password) => {
     // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    // Compare the entered password with the stored one
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign({ id: user._id, email: user.email }, 'akshay', {
        expiresIn: '1m', // Token expiration time
    });
    console.log('Generated Token:', token);

    // Return the token
    return { token };
};

// Get user by email
export const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

