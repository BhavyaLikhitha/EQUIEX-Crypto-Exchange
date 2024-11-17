import mongoose from 'mongoose';

const coinSchema = new mongoose.Schema({
  name: { type: String, required: true },
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
});

const Coin = mongoose.model('Coin', coinSchema);

export default Coin;
