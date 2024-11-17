import Coin from '../models/coin.js';

export const coinService = {
  getAllCoins: async () => {
    return Coin.find();
  },

  addCoin: async (coinData) => {
    const coin = new Coin(coinData);
    return coin.save();
  },

  getCoinById: async (id) => {
    return Coin.findById(id);
  },
};
