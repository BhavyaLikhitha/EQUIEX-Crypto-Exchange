// import express from 'express';
// import PortfolioController from '../controllers/portfolio-controller.js';

// const router = express.Router();

// router.post('/connect-wallet', PortfolioController.connectWallet);
// router.post('/deposit', PortfolioController.deposit);
// router.post('/withdraw', PortfolioController.withdraw);
// router.get('/fetch-wallet-balance', PortfolioController.fetchWalletBalance);
// router.post('/add-transaction', PortfolioController.addTransaction);
// router.get('/get-portfolio', PortfolioController.getPortfolio);
// router.post('/buy-coin', PortfolioController.buyCoin);
// router.post('/sell-coin', PortfolioController.sellCoin);

// export default router;
import express from 'express';
import PortfolioController from '../controllers/portfolio-controller.js';
const router = express.Router();
router.post('/connect-wallet', PortfolioController.connectWallet);
router.get('/fetch-wallet-balance', PortfolioController.fetchWalletBalance);
router.post('/deposit', PortfolioController.deposit);
router.post('/withdraw', PortfolioController.withdraw);
router.post('/update-trading-balance', PortfolioController.updateTradingBalance);
router.get('/fetch-trading-balance-usd', PortfolioController.fetchTradingBalanceUSD);
export default router;
