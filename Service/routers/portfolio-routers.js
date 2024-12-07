import express from 'express';
import PortfolioController from '../controllers/portfolio-controller.js';


const router = express.Router();

// Route to connect the user's wallet
router.post('/connect-wallet', PortfolioController.connectWallet);

// Route to fetch the user's wallet balance
router.get('/fetch-wallet-balance', PortfolioController.fetchWalletBalance);

// Route to deposit funds into the trading account
router.post('/deposit', PortfolioController.deposit);

// Route to withdraw funds from the trading account
router.post('/withdraw', PortfolioController.withdraw);

// Route to update the trading balance
router.post('/update-trading-balance', PortfolioController.updateTradingBalance);

// Route to fetch the trading balance in USD
router.get('/fetch-trading-balance-usd', PortfolioController.fetchTradingBalanceUSD);

// Route to add a new transaction record
router.post('/add-transaction', PortfolioController.addTransaction);

// Route to fetch the transaction history
router.get('/fetch-transaction-history', PortfolioController.fetchTransactionHistory);

// Route to download the transaction history
router.get('/download-transaction-history', PortfolioController.downloadTransactionHistory);

// Route to update the USD trading balance
router.put('/usd-balance-update', PortfolioController.updateTradingBalanceUSD);

// Route to fetch the entire portfolio details
router.get('/fetch-portfolio', PortfolioController.fetchPortfolio);

export default router;
