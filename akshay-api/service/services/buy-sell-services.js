// buy-sell-services.js
import User from '../models/user.js';
// import OrderHistory from '../models/orderHistory.js'; // Import the OrderHistory model

export const buyCoinService = async (email, coinName, coinSymbol, coinPrice, quantity) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return { error: "User not found" };
        }

        const totalCost = coinPrice * quantity;

        // Check if the user has enough USDT balance
        if (user.usdtBalance < totalCost) {
            return { error: "Insufficient balance" };
        }

        // Deduct USDT balance
        user.usdtBalance -= totalCost;

        // Add the coin to the user's portfolio or update the quantity if it exists
        let coin = user.coins.find(c => c.name === coinName);

        if (!coin) {
            user.coins.push({
                name: coinName,
                symbol: coinSymbol,
                price: coinPrice,
                quantity: quantity
            });
        } else {
            coin.quantity += quantity;
        }

        await user.save();
        // // Add to order history
        // const order = new OrderHistory({
        //     email,
        //     coinName,
        //     quantity,
        //     coinPrice, // Save coin price at the time of transaction
        //     value: coinPrice * quantity, // Calculate the value of the transaction
        //     transactionType: 'BUY',
        // });
        // await order.save();

        return { newBalance: user.usdtBalance };

    } catch (error) {
        console.error("Error in buyCoinService:", error);
        return { error: "Error processing the transaction" };
    }
};

// Sell Coin Service
export const sellCoinService = async (email, coinName, coinSymbol, coinPrice, quantity) => {
    try {
        const user = await User.findOne({ email });

        if (!user) {
            return { error: "User not found" };
        }

        // Find the coin in the user's portfolio
        const coin = user.coins.find(c => c.name === coinName);

        if (!coin) {
            return { error: "Coin not found in portfolio" };
        }

        // Check if the user has enough quantity of the coin to sell
        if (coin.quantity < quantity) {
            return { error: "Not enough quantity to sell" };
        }

        // Calculate the total sale value
        const totalSaleValue = coinPrice * quantity;

        // Add the sale value to the user's USDT balance
        user.usdtBalance += totalSaleValue;

        // Update the coin quantity in the user's portfolio
        coin.quantity -= quantity;

        // If the coin's quantity becomes 0, remove it from the portfolio
        if (coin.quantity === 0) {
            user.coins = user.coins.filter(c => c.name !== coinName);
        }

        await user.save();
        // // Add to order history for SELL transaction
        // const order = new OrderHistory({
        //     email,
        //     coinName,
        //     quantity,
        //     coinPrice, // Save coin price at the time of transaction
        //     value: coinPrice * quantity, // Calculate the value of the transaction
        //     transactionType: 'SELL',
        // });

        return { newBalance: user.usdtBalance };

    } catch (error) {
        console.error("Error in sellCoinService:", error);
        return { error: "Error processing the transaction" };
    }
};