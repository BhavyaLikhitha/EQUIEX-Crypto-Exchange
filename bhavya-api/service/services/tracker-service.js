import Tracker from '../models/tracker.js';
import Coin from '../models/coin.js';

export const trackerService = {
  getUserTracker: async (userId) => {
    return Tracker.find({ userId }).populate('coinId');
  },

  addCoinToTracker: async (userId, trackerData) => {
    const { coinId, amount } = trackerData;
    const coin = await Coin.findById(coinId);
    if (!coin) throw new Error('Coin not found');
    const tracker = new Tracker({ userId, coinId, amount });
    return tracker.save();
  },

  updateCoinInTracker: async (userId, coinId, trackerData) => {
    return Tracker.findOneAndUpdate(
      { userId, coinId },
      { amount: trackerData.amount },
      { new: true }
    );
  },

  removeCoinFromTracker: async (userId, coinId) => {
    await Tracker.findOneAndDelete({ userId, coinId });
  },
};
