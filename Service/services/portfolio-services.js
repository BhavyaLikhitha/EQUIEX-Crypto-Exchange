// import Portfolio from '../models/portfolio.js';

// class PortfolioService {
//   static async saveWalletAddress(walletAddress) {
//     let wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       wallet = new Portfolio({ walletAddress });
//       await wallet.save();
//     }
//     return wallet;
//   }

//   static async deposit(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     wallet.tradingBalance += amount;
//     await wallet.save();
//     return wallet;
//   }

//   static async withdraw(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     if (wallet.tradingBalance < amount) {
//       throw new Error('Insufficient trading balance');
//     }
//     wallet.tradingBalance -= amount;
//     await wallet.save();
//     return wallet;
//   }

//   static async getWalletBalance(walletAddress) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     return wallet;
//   }

//   static async addTransaction(walletAddress, orderType, coinDetails) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     wallet.transactions.push({ orderType, coinDetails });
//     await wallet.save();
//     return wallet;
//   }

//   static async getPortfolio(walletAddress) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     return wallet;
//   }

//   static async buyCoin(walletAddress, coinDetails) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     const { price, quantity } = coinDetails;
//     const value = price * quantity;

//     if (wallet.tradingBalance < value) {
//       throw new Error('Insufficient trading balance for purchase');
//     }

//     wallet.tradingBalance -= value;
//     wallet.transactions.push({ orderType: 'buy', coinDetails });
//     await wallet.save();
//     return wallet;
//   }

//   static async sellCoin(walletAddress, coinDetails) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     const { price, quantity } = coinDetails;
//     const value = price * quantity;

//     wallet.tradingBalance += value;
//     wallet.transactions.push({ orderType: 'sell', coinDetails });
//     await wallet.save();
//     return wallet;
//   }
// }

// export default PortfolioService;
import Portfolio from '../models/portfolio.js';

class PortfolioService {
  static async saveWalletAddress(walletAddress) {
    let wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      wallet = new Portfolio({ walletAddress });
      await wallet.save();
    }
    return wallet;
  }

  static async getWalletBalance(walletAddress) {
    const wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      throw new Error('Wallet not found');
    }
    return wallet;
  }
}

export default PortfolioService;


