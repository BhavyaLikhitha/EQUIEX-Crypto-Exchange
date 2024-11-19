import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    usdtBalance: { type: Number, default: 100000 }, // Default balance 100,000 USDT
    coins: [{
        coinName: { type: String, required: true },
        quantity: { type: Number, default: 0 },
        value: { type: Number, required: true },
    }],
});

const Portfolio = mongoose.model('Portfolio', portfolioSchema);
export default Portfolio;