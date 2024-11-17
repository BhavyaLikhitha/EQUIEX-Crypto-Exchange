import { coinService } from '../services/coin-service.js';

// List all coins
export const getCoins = async (req, res) => {
  try {
    const coins = await coinService.getAllCoins();
    res.status(200).json(coins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new coin
export const addCoin = async (req, res) => {
  try {
    const coin = await coinService.addCoin(req.body);
    res.status(201).json(coin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get coin by ID
export const getCoinById = async (req, res) => {
  try {
    const coin = await coinService.getCoinById(req.params.id);
    if (coin) {
      res.status(200).json(coin);
    } else {
      res.status(404).json({ message: 'Coin not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
