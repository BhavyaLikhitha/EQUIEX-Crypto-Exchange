import mongoose from 'mongoose';

const trackerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  coinId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Coin' },
  amount: { type: Number, required: true },
});

const Tracker = mongoose.model('Tracker', trackerSchema);

export default Tracker;
