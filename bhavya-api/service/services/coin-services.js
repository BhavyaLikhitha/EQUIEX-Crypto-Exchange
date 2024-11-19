import Coin from "../models/coin.js";
import User from "../models/user.js";

// Add a new coin
export const addCoin = async (coinData) => {
    const newCoin = new Coin(coinData);
    return await newCoin.save();
};

// Get all coins
export const getAllCoins = async () => {
    return await Coin.find();
};

// Get coin details by name
export const getCoinByName = async (name) => {
    const coin = await Coin.findOne({ name });
    if (!coin) {
        throw new Error("Coin not found");
    }
    return coin;
};

// // Add coin to user's tracker
// export const addCoinToUser = async (email, coinData) => {
//     const user = await User.findOne({ email });
//     if (!user) {
//         throw new Error("User not found");
//     }
//     if (!user.coins) user.coins = [];
//     user.coins.push(coinData);
//     return await user.save();
// };
export const addCoinToUser = async (email, coinData) => {
    const user = await User.findOne({ email });
    // Add coin to user's coins array
    user.coins.push(coinData);
    
    // Save the user after adding the coin
    return await user.save();
};

// Get user's coin tracker
export const getUserCoins = async (email) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    return user.coins || [];
};

// Edit coin in user's tracker
export const editUserCoin = async (email, coinName, updateData) => {
    const user = await User.findOne({ email });
    if (!user || !user.coins) {
        throw new Error("User or coin tracker not found");
    }
    const coinIndex = user.coins.findIndex((coin) => coin.name === coinName);
    if (coinIndex === -1) {
        throw new Error("Coin not found in user's tracker");
    }
    user.coins[coinIndex] = { ...user.coins[coinIndex], ...updateData };
    return await user.save();
};

// Delete coin from user's tracker
export const deleteUserCoin = async (email, coinName) => {
    const user = await User.findOne({ email });
    if (!user || !user.coins) {
        throw new Error("User or coin tracker not found");
    }
    user.coins = user.coins.filter((coin) => coin.name !== coinName);
    return await user.save();
};
