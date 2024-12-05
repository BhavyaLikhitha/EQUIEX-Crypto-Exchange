import mongoose from 'mongoose';

// Define the schema for a single transaction
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

// Define the schema for a user's portfolio
const portfolioSchema = new mongoose.Schema({
    walletAddress: {
      type: String, // Wallet address associated with the portfolio
      unique: true,
      required: true,
    },
    tradingBalance: { 
      type: Number, // Balance available for trading
      default: 0,
    },
    tradingBalanceUSD: { 
      type: Number, // Balance in USD for trading
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
  
  // Create and export the Portfolio model
  const Portfolio = mongoose.model('Portfolio', portfolioSchema);
  
  export default Portfolio;