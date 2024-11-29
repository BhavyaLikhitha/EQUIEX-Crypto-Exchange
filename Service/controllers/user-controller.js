import * as userService from "../services/user-service.js";
import { setSuccess, setError } from "./response-handler.js";

// User registration
export const postSignup = async (request, response) => {
    try {
        const userData = request.body;
        const user = await userService.registerUser(userData);
        setSuccess(user, response);
    } catch (error) {
        setError(error, response);
    }
};

// User login
export const postLogin = async (request, response) => {
    try {
        const { email, password } = request.body;
        const user = await userService.loginUser(email, password);
        setSuccess(user, response);
    } catch (error) {
        setError(error, response);
    }
};

// Get user details by email
export const getUser = async (request, response) => {
    try {
        const { email } = request.params;
        const user = await userService.getUserByEmail(email);
        setSuccess(user, response);
    } catch (error) {
        setError(error, response);
    }
};

// Update user details
export const putUser = async (request, response) => {
    try {
        const { email } = request.params;
        const updateData = request.body;
        const updatedUser = await userService.updateUser(email, updateData);
        setSuccess(updatedUser, response);
    } catch (error) {
        setError(error, response);
    }
};

// Delete user
export const deleteUser = async (request, response) => {
    try {
        const { email } = request.params;
        const result = await userService.deleteUser(email);
        setSuccess(result, response);
    } catch (error) {
        setError(error, response);
    }
};
// Get all users
export const getAllUsers = async (request, response) => {
    try {
        const users = await userService.getAllUsers(); // Call service to get all users
        setSuccess(users, response); // Send success response with users data
    } catch (error) {
        setError(error, response); // Send error response
    }
};