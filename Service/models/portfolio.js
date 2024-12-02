import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  orderType: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  coinDetails: {
    coinId: {
      type: String,
      required: true,
    },
    coinName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
    },
  },
  transactionDate: {
    type: Date,
    default: Date.now,
  },
});

const portfolioSchema = new mongoose.Schema({
    walletAddress: {
      type: String,
      unique: true,
      required: true,
    },
    tradingBalance: { // The field for trading-specific balance
      type: Number,
      default: 0,
    },
    tradingBalanceUSD: { // New field for trading balance in USD 
      type: Number,
       default: 0,
    },
    transactions: [transactionSchema],
    portfolio: [
      {
        coinId: {
          type: String,
          required: true,
        },
        coinName: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        value: {
          type: Number,
          required: true,
        },
        imageUrl: {
          type: String,
        },
      },
    ],
  });
  
  const Portfolio = mongoose.model('Portfolio', portfolioSchema);
  
  export default Portfolio;