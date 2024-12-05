// user-controller.js
import * as userService from "../services/user-service.js";
import { setSuccess, setError } from "./response-handler.js";

// // User registration
// export const postSignup = async (request, response) => {
//     try {
//         const userData = request.body;
//         console.log(userData);
//         const user = await userService.registerUser(userData);
//         setSuccess(user, response);
//     } catch (error) {
//         console.error("Error during signup:", error);
//         // Check if it's a known error and handle accordingly
//         if (error.message === "Email already exists") {
//             setError(response, { message: "Email aldready exists!!"}, 400); // Return error with 400 Bad Request status
//         } else {
//             setError(response, { message: "An internal server error occurred." }, 500); // Generic error message
//         }
//         // setError(response, error.message);
//     }
// };
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

// // User login
// export const postLogin = async (request, response) => {
//     try {
//         const { email, password } = request.body;
//         const user = await userService.loginUser(email, password);
//         setSuccess(user, response);
//     } catch (error) {
//         console.log(error);
//         setError(error, response);
//     }
// };

// // User login
// export const postLogin = async (request, response) => {
//     try {
//         const { email, password } = request.body;
//         const user = await userService.loginUser(email, password);
//         setSuccess(user, response);  // Assuming setSuccess sends a success response
//     } catch (error) {
//         if (error.message === 'Invalid credentials') {
//             // Return specific message for email duplication
//             return response.status(400).json({ message: 'Invalid credentials' });
//           }
//           response.status(500).json({ message: 'Internal server error', details: error.message });
//         // console.log('Login error:', error.message);  // Log the error message for debugging
//         // setError(error, response);  // Send the error response
//     }
// };

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

// // Get all users
// export const getAllUsers = async (request, response) => {
//     try {
//         const users = await userService.getAllUsers(); // Call service to get all users
//         setSuccess(users, response); // Send success response with users data
//     } catch (error) {
//         setError(error, response); // Send error response
//     }
// };