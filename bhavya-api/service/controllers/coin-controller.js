import * as coinService from "../services/coin-services.js";
import { setSuccess, setError } from "./response-handler.js";

// Add a new coin
export const postCoin = async (req, res) => {
    try {
        const coinData = req.body;
        const coin = await coinService.addCoin(coinData);
        setSuccess(coin, res);
    } catch (error) {
        setError(res, error);
    }
};

// Get all coins
export const getAllCoins = async (req, res) => {
    try {
        const coins = await coinService.getAllCoins();
        setSuccess(coins, res);
    } catch (error) {
        setError(res, error);
    }
};

// Get coin details by name
export const getCoinByName = async (req, res) => {
    try {
        const { name } = req.params;
        const coin = await coinService.getCoinByName(name);
        setSuccess(coin, res);
    } catch (error) {
        setError(res, error);
    }
};

// Add coin to user's tracker
export const postUserCoin = async (req, res) => {
    try {
        const { email } = req.params;
        const coinData = req.body;
        console.log(`Adding coin to user: ${email}`);
        console.log(coinData);  // Log the data to verify the structure
        const result = await coinService.addCoinToUser(email, coinData);
        setSuccess(result, res);
    } catch (error) {
        console.error(error);  // Log the error for better diagnostics
        setError(res, error);
    }
};

// Get user's coin tracker
export const getUserCoins = async (req, res) => {
    try {
        const { email } = req.params;
        const coins = await coinService.getUserCoins(email);
        setSuccess(coins, res);
    } catch (error) {
        setError(res, error);
    }
};

// Edit coin in user's tracker
export const putUserCoin = async (req, res) => {
    try {
        const { email, name } = req.params;
        const updateData = req.body;
        const result = await coinService.editUserCoin(email, name, updateData);
        setSuccess(result, res);
    } catch (error) {
        setError(res, error);
    }
};

// Delete coin from user's tracker
export const deleteUserCoin = async (req, res) => {
    try {
        const { email, name } = req.params;
        const result = await coinService.deleteUserCoin(email, name);
        setSuccess(result, res);
    } catch (error) {
        setError(res, error);
    }
};
