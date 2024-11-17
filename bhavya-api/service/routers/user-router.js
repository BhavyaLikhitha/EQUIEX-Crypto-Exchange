// routers/user-router.js
import express from 'express';
import { signup, login } from '../controllers/user-controller.js';

const router = express.Router();

// User signup
router.post('/auth/signup', signup);

// User login
router.post('/auth/login', login);

export default router;
