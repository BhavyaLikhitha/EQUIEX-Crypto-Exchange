import mongoose from 'mongoose';

// Define the schema for the watchlist
const watchlistSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  price_change_percentage_24h: { type: Number, required: true },
  current_price: { type: Number, required: true },
  total_volume: { type: Number, required: true },
  market_cap: { type: Number, required: true },
}, { timestamps: true });

// Create the Watchlist model using the schema defined above
const Watchlist = mongoose.model('Watchlist', watchlistSchema);

export default Watchlist;