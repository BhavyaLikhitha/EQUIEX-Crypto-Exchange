import express from 'express';
import PortfolioController from '../controllers/portfolio-controller.js';
const router = express.Router();
router.post('/connect-wallet', PortfolioController.connectWallet);
router.get('/fetch-wallet-balance', PortfolioController.fetchWalletBalance);
router.post('/deposit', PortfolioController.deposit);
router.post('/withdraw', PortfolioController.withdraw);
router.post('/update-trading-balance', PortfolioController.updateTradingBalance);
router.get('/fetch-trading-balance-usd', PortfolioController.fetchTradingBalanceUSD);
router.post('/add-transaction', PortfolioController.addTransaction);
router.get('/fetch-transaction-history', PortfolioController.fetchTransactionHistory);
router.get('/download-transaction-history', PortfolioController.downloadTransactionHistory);
router.put('/usd-balance-update', PortfolioController.updateTradingBalanceUSD);
router.get('/fetch-portfolio', PortfolioController.fetchPortfolio);

export default router;
