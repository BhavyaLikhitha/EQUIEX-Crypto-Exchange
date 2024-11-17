// controllers/user-controller.js
import { User } from '../models/user.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        errorCode: 'EMAIL_ALREADY_EXISTS',
        message: 'The email address is already registered.',
      });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({
      id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    });
  } catch (error) {
    res.status(500).json({
      errorCode: 'INTERNAL_SERVER_ERROR',
      message: error.message,
    });
  }
};


export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) { // Replace with hashed password comparison in production
      return res.status(400).json({
        errorCode: 'INVALID_CREDENTIALS',
        message: 'The provided email or password is incorrect.',
      });
    }

    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({
      errorCode: 'INTERNAL_SERVER_ERROR',
      message: error.message,
    });
  }
};
