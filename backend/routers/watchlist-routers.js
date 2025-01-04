import express from 'express';
const router = express.Router();
import { addCoin, removeCoin, getWatchlist } from '../controllers/watchlist-controller.js'; // Import controller methods

// Define routes using imported functions
router.post('/watchlist', addCoin);
router.delete('/watchlist/:symbol', removeCoin);
router.get('/watchlist', getWatchlist);

export default router; // Export the router as default