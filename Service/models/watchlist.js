import mongoose from 'mongoose';

const watchlistSchema = new mongoose.Schema({
  symbol: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image: { type: String },
  price_change_percentage_24h: { type: Number, required: true },
  current_price: { type: Number, required: true },
  total_volume: { type: Number, required: true },
  market_cap: { type: Number, required: true },
}, { timestamps: true });

const Watchlist = mongoose.model('Watchlist', watchlistSchema);

export default Watchlist;