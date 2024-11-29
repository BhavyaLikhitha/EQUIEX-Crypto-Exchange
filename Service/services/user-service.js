import User from "../models/user.js";

// Register a new user
export const registerUser = async (userData) => {
    const { email } = userData;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new Error("Email already exists");
    }
    const newUser = new User(userData);
    return await newUser.save();
};



// Login a user
export const loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
        throw new Error("Invalid credentials");
    }
    return user;
};

// Get user by email
export const getUserByEmail = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user;
};

