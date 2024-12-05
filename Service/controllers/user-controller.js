// user-controller.js
import * as userService from "../services/user-service.js";
import { setSuccess, setError } from "./response-handler.js";
import { registerUser } from '../services/user-service.js';

export const postSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }
    const newUser = await registerUser({ username, email, password });
    // If the user is successfully created
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    if (error.message === 'Email already exists') {
      // Return specific message for email duplication
      return res.status(400).json({ message: 'Email already exists' });
    }
    // For other errors, return 500 with a generic message
    res.status(500).json({ message: 'Internal server error', details: error.message });
  }
};
// User login
export const postLogin = async (request, response) => {
  try {
      const { email, password } = request.body;
      const result = await userService.loginUser(email, password);// Authenticate the user and retrieve the token 

      // Respond with a success message and the token
      return response.status(200).json({
          message: 'Login successful',
          token: result.token,  
      });
  } catch (error) {
    // Handle invalid credentials error
      if (error.message === 'Invalid credentials') {
          return response.status(400).json({ message: 'Invalid credentials' });
      }
      response.status(500).json({ message: 'Internal server error', details: error.message });
  }
};