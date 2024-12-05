import Watchlist from '../models/watchlist.js'; // Import the Watchlist model

// Add a new coin to the watchlist
export const addCoinToWatchlist = async ({ symbol, name, image, price_change_percentage_24h, current_price, total_volume, market_cap }) => {
  try {
    // Check if the coin already exists in the watchlist by its symbol
    let coin = await Watchlist.findOne({ symbol });

    // If the coin does not exist, create a new coin entry
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
      await coin.save(); // Save the new coin to the database
    }
    return coin;
  } catch (error) {
    throw new Error('Failed to add coin to watchlist'); // Handle errors and throw appropriate message
  }
};

// Remove a coin from the watchlist by symbol
export const removeCoinFromWatchlist = async (symbol) => {
  try {
    // Delete the coin from the watchlist using the symbol
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
    // Fetch all coins in the watchlist
    const watchlist = await Watchlist.find();
    return watchlist; // Return the list of all coins in the watchlist
  } catch (error) {
    throw new Error('Failed to retrieve watchlist');
  }
};