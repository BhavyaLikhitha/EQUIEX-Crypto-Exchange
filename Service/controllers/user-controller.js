// user-controller.js
import * as userService from "../services/user-service.js";
import { setSuccess, setError } from "./response-handler.js";

// User registration
export const postSignup = async (request, response) => {
    try {
        const userData = request.body;
        console.log(userData);
        const user = await userService.registerUser(userData);
        setSuccess(user, response);
    } catch (error) {
        console.error("Error during signup:", error);
        setError(response, error);
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
// // Get all users
// export const getAllUsers = async (request, response) => {
//     try {
//         const users = await userService.getAllUsers(); // Call service to get all users
//         setSuccess(users, response); // Send success response with users data
//     } catch (error) {
//         setError(error, response); // Send error response
//     }
// };