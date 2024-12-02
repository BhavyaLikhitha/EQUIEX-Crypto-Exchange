import Watchlist from '../models/watchlist.js'; // Import the Watchlist model

// Add a new coin to the watchlist
export const addCoinToWatchlist = async ({ symbol, name, image, price_change_percentage_24h, current_price, total_volume, market_cap }) => {
  try {
    let coin = await Watchlist.findOne({ symbol });
    if (!coin) {
      coin = new Watchlist({
        symbol,
        name,
        image,
        price_change_percentage_24h,
        current_price,
        total_volume,
        market_cap,
      });
      await coin.save();
    }
    return coin;
  } catch (error) {
    throw new Error('Failed to add coin to watchlist');
  }
};

// Remove a coin from the watchlist by symbol
export const removeCoinFromWatchlist = async (symbol) => {
  try {
    const result = await Watchlist.deleteOne({ symbol });
    if (result.deletedCount === 0) {
      throw new Error('Coin not found in watchlist');
    }
    return result;
  } catch (error) {
    throw new Error('Failed to remove coin from watchlist');
  }
};

// Retrieve all coins in the watchlist
export const getAllCoinsInWatchlist = async () => {
  try {
    const watchlist = await Watchlist.find();
    return watchlist;
  } catch (error) {
    throw new Error('Failed to retrieve watchlist');
  }
};