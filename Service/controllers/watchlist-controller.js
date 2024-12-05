import { addCoinToWatchlist, removeCoinFromWatchlist, getAllCoinsInWatchlist } from '../services/watchlist-services.js'; // Import service functions

// Add a coin to the watchlist
export const addCoin = async (req, res) => {
  try {
    const { symbol, name, image, price_change_percentage_24h, current_price, total_volume, market_cap } = req.body;

    // Add the coin to the watchlist with the provided details
    const coin = await addCoinToWatchlist({
      symbol,
      name,
      image,
      price_change_percentage_24h,
      current_price,
      total_volume,
      market_cap,
    });

    // Respond with the added coin details
    res.status(201).json(coin);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Remove a coin from the watchlist
export const removeCoin = async (req, res) => {
  try {
    const { symbol } = req.params;
    // Remove the coin with the given symbol from the watchlist
    await removeCoinFromWatchlist(symbol);
    res.status(200).json({ message: 'Coin removed from watchlist' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all coins in the watchlist
export const getWatchlist = async (req, res) => {
  try {
    // Fetch all coins currently in the watchlist
    const watchlist = await getAllCoinsInWatchlist();
    res.status(200).json(watchlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};