import mongoose from 'mongoose';

// Define the schema for a user's portfolio
const portfolioSchema = new mongoose.Schema({
    // User's email, acts as a unique identifier for the portfolio
    email: { type: String, required: true, unique: true },
    
    // USDT balance in the user's portfolio, defaulting to 100,000 USDT
    usdtBalance: { type: Number, default: 100000 }, 
    
    // Array to store the user's coins and their respective details
    coins: [{
        // Name of the cryptocurrency (e.g., Bitcoin, Ethereum)
        coinName: { type: String, required: true },
        
        // Quantity of the cryptocurrency owned by the user, defaults to 0
        quantity: { type: Number, default: 0 },
        
        // Current value of the cryptocurrency
        value: { type: Number, required: true },
    }],
});

// Create a Mongoose model for the portfolio schema
const Portfolio = mongoose.model('Portfolio', portfolioSchema);

// Export the model for use in other parts of the application
export default Portfolio;