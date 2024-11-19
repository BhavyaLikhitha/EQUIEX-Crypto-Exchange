// buy-sell-controller.js
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

        res.status(200).json({
            message: 'Coin sold successfully',
            balance: result.newBalance,
            transactionId: transaction._id,
        });
    } catch (error) {

        res.status(500).json({ error: 'Server error' });
    }
};

export const getOrderHistory = async (req, res) => {
    try {
        const { email } = req.params;
        const transactions = await OrderHistory.find({ email });

        if (transactions.length === 0) {
            return res.status(404).json({ error: 'No transactions found for user' });
        }

        res.status(200).json(transactions);
    } catch (error) {
        consoler.log(error)
        res.status(500).json({ error: 'Server error' });
    }
};