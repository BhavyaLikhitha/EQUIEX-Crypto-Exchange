import { buyCoinService, sellCoinService } from '../services/buy-sell-services.js';
import OrderHistory from '../models/orderHistory.js';

export const buyCoin = async (req, res) => {
    try {
        const { email } = req.params;
        const { coinName, coinSymbol, coinPrice, quantity } = req.body;

        // Call the buyCoinService with correct params
        const result = await buyCoinService(email, coinName, coinSymbol, coinPrice, quantity);

        // Handle error if returned from service
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }

        // Create an order history entry
        const transaction = new OrderHistory({
            email,
            coinName,
            quantity,
            coinPrice, // Save coin price at the time of transaction
            value: coinPrice * quantity,
            transactionType: 'BUY',
        });

        await transaction.save();

        // Respond with success and updated balance
        res.status(200).json({
            message: 'Coin purchased successfully',
            balance: result.newBalance,
            transactionId: transaction._id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};

export const sellCoin = async (req, res) => {
    try {
        const { email } = req.params;
        const { coinName, coinSymbol, coinPrice, quantity } = req.body;
        // Call the sellCoinService with correct params
        const result = await sellCoinService(email, coinName, coinSymbol, coinPrice, quantity);
        if (result.error) {
            return res.status(400).json({ error: result.error });
        }

        const transaction = new OrderHistory({
            email,
            coinName,
            quantity,
            coinPrice, // Save coin price at the time of transaction
            value: coinPrice * quantity,
            transactionType: 'SELL',
        });

        await transaction.save();
        // Respond with success and updated balance
        res.status(200).json({
            message: 'Coin sold successfully',
            balance: result.newBalance,
            transactionId: transaction._id,
        });
    } catch (error) {

        res.status(500).json({ error: 'Server error' });
    }
};

// Function to retrieve order history for a specific user
export const getOrderHistory = async (req, res) => {
    try {
        // Extract the user's email from the request parameters
        const { email } = req.params;

        // Query the database to find all transactions associated with the email
        const transactions = await OrderHistory.find({ email });

        // If no transactions are found, return a 404 response
        if (transactions.length === 0) {
            return res.status(404).json({ error: 'No transactions found for user' });
        }

        // If transactions are found, return them in the response with a 200 status
        res.status(200).json(transactions);
    } catch (error) {
        // Log the error for debugging purposes
        console.log(error); // Fixed typo from 'consoler' to 'console'

        // Return a 500 response in case of server errors
        res.status(500).json({ error: 'Server error' });
    }
};