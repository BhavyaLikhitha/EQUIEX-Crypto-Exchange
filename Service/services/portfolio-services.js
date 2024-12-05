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

//   static async getWalletBalance(walletAddress) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     return wallet;
//   }
// }

// export default PortfolioService;

// import Portfolio from '../models/portfolio.js';

// class PortfolioService {
//   static async saveWalletAddress(walletAddress) {
//     let wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       wallet = new Portfolio({ walletAddress, walletBalance: 0, tradingBalance: 0 });
//       await wallet.save();
//     }
//     return wallet;
//   }

//   static async getWalletBalance(walletAddress) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     return wallet;
//   }

//   static async deposit(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the main wallet balance
//     if (wallet.walletBalance < amount) {
//       throw new Error('Insufficient funds in wallet');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance -= amount;
//     wallet.tradingBalance += amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }

//   static async withdraw(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the trading balance
//     if (wallet.tradingBalance < amount) {
//       throw new Error('Insufficient funds in trading balance');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance += amount;
//     wallet.tradingBalance -= amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }
// }

// export default PortfolioService;

// import Portfolio from '../models/portfolio.js';

// class PortfolioService {
//     static async saveWalletAddress(walletAddress) {
//       let wallet = await Portfolio.findOne({ walletAddress });
//       if (!wallet) {
//         wallet = new Portfolio({ walletAddress, walletBalance: 0, tradingBalance: 0 });
//         await wallet.save();
//       }
//       return wallet;
//     }
  
//     static async getWalletBalance(walletAddress) {
//       const wallet = await Portfolio.findOne({ walletAddress });
//       if (!wallet) {
//         throw new Error('Wallet not found');
//       }
//       return wallet;
//     }
//   // Existing methods...

//   static async deposit(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the main wallet balance
//     if (wallet.walletBalance < amount) {
//       throw new Error('Insufficient funds in wallet');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance -= amount;
//     wallet.tradingBalance += amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }

//   static async withdraw(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the trading balance
//     if (wallet.tradingBalance < amount) {
//       throw new Error('Insufficient funds in trading balance');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance += amount;
//     wallet.tradingBalance -= amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }
// }

// export default PortfolioService;

// import Portfolio from '../models/portfolio.js';

// class PortfolioService {
//   static async saveWalletAddress(walletAddress) {
//     let wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       wallet = new Portfolio({ walletAddress, walletBalance: 0, tradingBalance: 0 });
//       await wallet.save();
//     }
//     return wallet;
//   }

//   static async getWalletBalance(walletAddress) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }
//     return wallet;
//   }

//   static async deposit(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the main wallet balance
//     if (wallet.walletBalance < amount) {
//       throw new Error('Insufficient funds in wallet');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance -= amount;
//     wallet.tradingBalance += amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }

//   static async withdraw(walletAddress, amount) {
//     const wallet = await Portfolio.findOne({ walletAddress });
//     if (!wallet) {
//       throw new Error('Wallet not found');
//     }

//     // Check if the wallet has sufficient funds in the trading balance
//     if (wallet.tradingBalance < amount) {
//       throw new Error('Insufficient funds in trading balance');
//     }

//     // Update wallet and trading balances
//     wallet.walletBalance += amount;
//     wallet.tradingBalance -= amount;
//     await wallet.save();

//     return { wallet, newTradingBalance: wallet.tradingBalance };
//   }
// }

// export default PortfolioService;

import Portfolio from '../models/portfolio.js';
import { Parser } from 'json2csv';


class PortfolioService {
  // Save or create a wallet for a given wallet address
  static async saveWalletAddress(walletAddress) {
    let wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      wallet = new Portfolio({ walletAddress, walletBalance: 0, tradingBalance: 0 });
      await wallet.save();
    }
    return wallet;
  }

  // Retrieve the wallet balance for a given wallet address
  static async getWalletBalance(walletAddress) {
    const wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      throw new Error('Wallet not found');
    }
    return wallet;
  }

  // Deposit funds into the trading balance from the wallet balance
  static async deposit(walletAddress, amount) {
    const wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      throw new Error('Wallet not found');
    }

    if (wallet.walletBalance < amount) {
      throw new Error('Insufficient funds in wallet'); // Error if there are insufficient funds
    }

    wallet.walletBalance -= amount;
    wallet.tradingBalance += amount;
    await wallet.save();

    return { wallet, newTradingBalance: wallet.tradingBalance }; // Return updated wallet and trading balance
  }

  // Withdraw funds from the trading balance to the wallet balance
  static async withdraw(walletAddress, amount) {
    const wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      throw new Error('Wallet not found');
    }

    if (wallet.tradingBalance < amount) {
      throw new Error('Insufficient funds in trading balance');
    }

    wallet.walletBalance += amount;
    wallet.tradingBalance -= amount;
    await wallet.save();

    return { wallet, newTradingBalance: wallet.tradingBalance };
  }


  // Update the trading balance and USD equivalent balance for a wallet
  static async updateTradingBalance(walletAddress, newBalance, newBalanceUSD) {
    const wallet = await Portfolio.findOne({ walletAddress });
    if (!wallet) {
      throw new Error('Wallet not found');
    }
  
    wallet.tradingBalance = newBalance;
    wallet.tradingBalanceUSD = newBalanceUSD; // Update the trading balance in USD
    await wallet.save();
  
    return wallet;
  }  

    // Retrieve the USD trading balance for a given wallet address
    static async getTradingBalanceUSD(walletAddress) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
      return wallet.tradingBalanceUSD;
    }

    // static async addTransaction(walletAddress, orderType, coinDetails) {
    //   const wallet = await Portfolio.findOne({ walletAddress });
    //   if (!wallet) {
    //     throw new Error('Wallet not found');
    //   }
  
    //   const transaction = {
    //     orderType,
    //     coinDetails,
    //     transactionDate: new Date(),
    //   };
  
    //   wallet.transactions.push(transaction);
    //   await wallet.save();
    //   return transaction;
    // }

    // Add a transaction (buy/sell) to the wallet's transaction history
    static async addTransaction(walletAddress, orderType, coinDetails) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
    
      const { coinId, coinName, price, quantity, imageUrl } = coinDetails;
    
      // Update the portfolio based on buy/sell action
      const existingCoin = wallet.portfolio.find((coin) => coin.coinId === coinId);
      if (orderType === 'buy') {
        if (existingCoin) {
          existingCoin.quantity += quantity; // Increase quantity for existing coin
          existingCoin.value = existingCoin.quantity * price; // Recalculate the value
        } else {
          wallet.portfolio.push({
            coinId,
            coinName,
            quantity,
            price,
            value: quantity * price,
            imageUrl,
          }); // Add new coin to portfolio if not already present
        }
      } else if (orderType === 'sell') {
        if (existingCoin && existingCoin.quantity >= quantity) {
          existingCoin.quantity -= quantity;
          if (existingCoin.quantity === 0) {
            wallet.portfolio = wallet.portfolio.filter((coin) => coin.coinId !== coinId); // Remove coin if quantity is 0
          } else {
            existingCoin.value = existingCoin.quantity * price;
          }
        } else {
          throw new Error('Not enough coins to sell');
        }
      }
    
      // Add the transaction to the wallet's transaction history
      wallet.transactions.push({
        orderType,
        coinDetails,
        transactionDate: new Date(),
      });
    
      await wallet.save();
      return wallet;
    }
    
    // Retrieve the transaction history for a given wallet address
    static async getTransactionHistory(walletAddress) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
      return wallet.transactions;
    }
  
     // Get the transaction history as a CSV string
    static async getTransactionHistoryCSV(walletAddress) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
  
      // Map transaction history to a format suitable for CSV
      const transactions = wallet.transactions.map((txn) => ({
        orderType: txn.orderType,
        coinName: txn.coinDetails.coinName,
        price: txn.coinDetails.price,
        quantity: txn.coinDetails.quantity,
        value: txn.coinDetails.value,
        transactionDate: txn.transactionDate.toISOString(),
      }));
  
      const parser = new Parser();
      return parser.parse(transactions);
    }
    
    // Update the USD trading balance for a wallet
    static async updateTradingBalanceUSD(walletAddress, newBalance) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
    
      wallet.tradingBalanceUSD = newBalance;
      await wallet.save();
    
      return wallet;
    }

    // Retrieve the portfolio of a wallet, including total value
    static async getPortfolio(walletAddress) {
      const wallet = await Portfolio.findOne({ walletAddress });
      if (!wallet) {
        throw new Error('Wallet not found');
      }
    
      // Map portfolio coins to a user-friendly format
      const portfolio = wallet.portfolio.map((coin) => ({
        coinId: coin.coinId,
        coinName: coin.coinName,
        imageUrl: coin.imageUrl,
        quantity: coin.quantity,
        price: coin.price,
        value: coin.quantity * coin.price,
      }));
    
      // Calculate total portfolio value
      const totalValue = portfolio.reduce((sum, coin) => sum + coin.value, 0);
    
      return { portfolio, totalValue };
    }
    
}


export default PortfolioService;
