import express from 'express';
import { buyCoin, sellCoin, getOrderHistory } from '../controllers/buy-sell-controller.js';

const router = express.Router();

// POST request to buy coins
router.post('/users/:email/coins/buy', buyCoin);

// POST request to sell coins
router.post('/users/:email/coins/sell', sellCoin);

// GET request for order history
router.get('/users/:email/order-history', getOrderHistory);

export default router;