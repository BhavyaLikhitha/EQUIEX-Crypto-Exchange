// import PortfolioService from '../services/portfolio-services.js';

import { compileFunction } from "vm";

// class PortfolioController {
//   static async connectWallet(req, res) {
//     try {
//       const { walletAddress } = req.body;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const walletData = await PortfolioService.saveWalletAddress(walletAddress);
//       res.status(201).json({ message: 'Wallet connected', data: walletData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async deposit(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or amount' });
//       }

//       const updatedWallet = await PortfolioService.deposit(walletAddress, amount);
//       res.status(200).json({ message: 'Deposit successful', data: updatedWallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async withdraw(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or amount' });
//       }

//       const updatedWallet = await PortfolioService.withdraw(walletAddress, amount);
//       res.status(200).json({ message: 'Withdrawal successful', data: updatedWallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async fetchWalletBalance(req, res) {
//     try {
//       const { walletAddress } = req.query;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const wallet = await PortfolioService.getWalletBalance(walletAddress);
//       res.status(200).json({ message: 'Wallet balance fetched', data: wallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async addTransaction(req, res) {
//     try {
//       const { walletAddress, orderType, coinDetails } = req.body;
//       if (!walletAddress || !orderType || !coinDetails) {
//         return res.status(400).json({ message: 'Invalid data' });
//       }

//       const transaction = await PortfolioService.addTransaction(walletAddress, orderType, coinDetails);
//       res.status(201).json({ message: 'Transaction added', data: transaction });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async getPortfolio(req, res) {
//     try {
//       const { walletAddress } = req.query;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const portfolio = await PortfolioService.getPortfolio(walletAddress);
//       res.status(200).json({ message: 'Portfolio fetched', data: portfolio });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async buyCoin(req, res) {
//     try {
//       const { walletAddress, coinDetails } = req.body;
//       if (!walletAddress || !coinDetails) {
//         return res.status(400).json({ message: 'Invalid data' });
//       }

//       const updatedWallet = await PortfolioService.buyCoin(walletAddress, coinDetails);
//       res.status(200).json({ message: 'Buy successful', data: updatedWallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async sellCoin(req, res) {
//     try {
//       const { walletAddress, coinDetails } = req.body;
//       if (!walletAddress || !coinDetails) {
//         return res.status(400).json({ message: 'Invalid data' });
//       }

//       const updatedWallet = await PortfolioService.sellCoin(walletAddress, coinDetails);
//       res.status(200).json({ message: 'Sell successful', data: updatedWallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// }

// export default PortfolioController;
// import PortfolioService from '../services/portfolio-services.js';

// class PortfolioController {
//   static async connectWallet(req, res) {
//     try {
//       const { walletAddress } = req.body;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const walletData = await PortfolioService.saveWalletAddress(walletAddress);
//       res.status(201).json({ message: 'Wallet connected successfully', data: walletData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async fetchWalletBalance(req, res) {
//     try {
//       const { walletAddress } = req.query;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const wallet = await PortfolioService.getWalletBalance(walletAddress);
//       res.status(200).json({ message: 'Wallet balance fetched successfully', data: wallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// }



// export default PortfolioController;

// import PortfolioService from '../services/portfolio-services.js';

// class PortfolioController {
//   static async connectWallet(req, res) {
//     try {
//       const { walletAddress } = req.body;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const walletData = await PortfolioService.saveWalletAddress(walletAddress);
//       res.status(201).json({ message: 'Wallet connected successfully', data: walletData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async fetchWalletBalance(req, res) {
//     try {
//       const { walletAddress } = req.query;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const wallet = await PortfolioService.getWalletBalance(walletAddress);
//       res.status(200).json({ message: 'Wallet balance fetched successfully', data: wallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async deposit(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or deposit amount' });
//       }

//       const { wallet, newTradingBalance } = await PortfolioService.deposit(walletAddress, amount);
//       res.status(200).json({
//         message: 'Deposit successful',
//         data: {
//           wallet,
//           newTradingBalance,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async withdraw(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or withdraw amount' });
//       }

//       const { wallet, newTradingBalance } = await PortfolioService.withdraw(walletAddress, amount);
//       res.status(200).json({
//         message: 'Withdraw successful',
//         data: {
//           wallet,
//           newTradingBalance,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// }

// export default PortfolioController;

// import PortfolioService from '../services/portfolio-services.js';

// class PortfolioController {
//   static async connectWallet(req, res) {
//     try {
//       const { walletAddress } = req.body;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const walletData = await PortfolioService.saveWalletAddress(walletAddress);
//       res.status(201).json({ message: 'Wallet connected successfully', data: walletData });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async fetchWalletBalance(req, res) {
//     try {
//       const { walletAddress } = req.query;
//       if (!walletAddress) {
//         return res.status(400).json({ message: 'Wallet address is required' });
//       }

//       const wallet = await PortfolioService.getWalletBalance(walletAddress);
//       res.status(200).json({ message: 'Wallet balance fetched successfully', data: wallet });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async deposit(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or deposit amount' });
//       }

//       const { wallet, newTradingBalance } = await PortfolioService.deposit(walletAddress, amount);
//       res.status(200).json({
//         message: 'Deposit successful',
//         data: {
//           wallet,
//           newTradingBalance,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }

//   static async withdraw(req, res) {
//     try {
//       const { walletAddress, amount } = req.body;
//       if (!walletAddress || amount <= 0) {
//         return res.status(400).json({ message: 'Invalid wallet address or withdraw amount' });
//       }

//       const { wallet, newTradingBalance } = await PortfolioService.withdraw(walletAddress, amount);
//       res.status(200).json({
//         message: 'Withdraw successful',
//         data: {
//           wallet,
//           newTradingBalance,
//         },
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
//   }
// }

// export default PortfolioController;


import PortfolioService from '../services/portfolio-services.js';

class PortfolioController {
  // Connect a wallet by saving the wallet address
  static async connectWallet(req, res) {
    try {
      const { walletAddress } = req.body;

      // Check if wallet address is provided
      if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
      }

       // Save the wallet address and respond with success
      const walletData = await PortfolioService.saveWalletAddress(walletAddress);
      res.status(201).json({ message: 'Wallet connected successfully', data: walletData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

   // Fetch the balance of a specific wallet
  static async fetchWalletBalance(req, res) {
    try {
      const { walletAddress } = req.query;
      if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
      }

      // Get the wallet balance and respond
      const wallet = await PortfolioService.getWalletBalance(walletAddress);
      res.status(200).json({ message: 'Wallet balance fetched successfully', data: wallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }


  // Deposit an amount into a wallet
  static async deposit(req, res) {
    try {
      const { walletAddress, amount } = req.body;
      if (!walletAddress || amount <= 0) {
        return res.status(400).json({ message: 'Invalid wallet address or deposit amount' });
      }

      // Perform the deposit and respond with the updated balance
      const { wallet, newTradingBalance } = await PortfolioService.deposit(walletAddress, amount);
      res.status(200).json({
        message: 'Deposit successful',
        data: {
          wallet,
          newTradingBalance,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  // Withdraw an amount from a wallet
  static async withdraw(req, res) {
    try {
      const { walletAddress, amount } = req.body;

      // Validate wallet address and withdrawal amount
      if (!walletAddress || amount <= 0) {
        return res.status(400).json({ message: 'Invalid wallet address or withdraw amount' });
      }

      // Perform the withdrawal and respond with the updated balance
      const { wallet, newTradingBalance } = await PortfolioService.withdraw(walletAddress, amount);
      res.status(200).json({
        message: 'Withdraw successful',
        data: {
          wallet,
          newTradingBalance,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

   // Update the trading balance of a wallet
  static async updateTradingBalance(req, res) {
    try {
      const { walletAddress, newBalance, newBalanceUSD } = req.body;
      // Validate wallet address and balances
      if (!walletAddress || newBalance < 0 || newBalanceUSD < 0) {
        return res.status(400).json({ message: 'Invalid wallet address or balance' });
      }
  
      // Update the trading balance and respond
      const wallet = await PortfolioService.updateTradingBalance(walletAddress, newBalance, newBalanceUSD);
      res.status(200).json({
        message: 'Trading balance updated successfully',
        data: wallet,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
      
      // Fetch the trading balance in USD for a wallet
      static async fetchTradingBalanceUSD(req, res) {
        try {
          const walletAddress = "0xc744bc7bdbae39ad2d372df6abaf974d81e4914d"; // Use the stored wallet address
    
          // Get the trading balance in USD and respond
          const tradingBalanceUSD = await PortfolioService.getTradingBalanceUSD(walletAddress);
          res.status(200).json({ message: 'Trading balance in USD fetched successfully', data: tradingBalanceUSD });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }

      // Add a transaction to the user's history
      static async addTransaction(req, res) {
        try {
          const { walletAddress, orderType, coinDetails } = req.body;
          if (!walletAddress || !orderType || !coinDetails) {
            return res.status(400).json({ message: 'Invalid transaction data' });
          }
    
          // Add the transaction and respond
          const transaction = await PortfolioService.addTransaction(walletAddress, orderType, coinDetails);
          res.status(201).json({ message: 'Transaction added successfully', data: transaction });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }
    
      // Fetch the transaction history of a wallet
      static async fetchTransactionHistory(req, res) {
        try {
          const { walletAddress } = req.query;
          if (!walletAddress) {
            return res.status(400).json({ message: 'Wallet address is required' });
          }
    
          // Get the transaction history and respond
          const transactions = await PortfolioService.getTransactionHistory(walletAddress);
          res.status(200).json({ message: 'Transaction history fetched successfully', data: transactions });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }
    
      // Download the transaction history as a CSV file
      static async downloadTransactionHistory(req, res) {
        try {
          const { walletAddress } = req.query;
          if (!walletAddress) {
            return res.status(400).json({ message: 'Wallet address is required' });
          }
    

          // Generate CSV data and send as a file
          const csvData = await PortfolioService.getTransactionHistoryCSV(walletAddress);
          res.setHeader('Content-Disposition', 'attachment; filename="transaction-history.csv"');
          res.setHeader('Content-Type', 'text/csv');
          res.status(200).send(csvData);
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }
      static async updateTradingBalanceUSD(req, res) {
        try {
          const { walletAddress, newBalance } = req.body;
          if (!walletAddress || newBalance < 0) {
            return res.status(400).json({ message: 'Invalid wallet address or balance' });
          }
      
          const wallet = await PortfolioService.updateTradingBalanceUSD(walletAddress, newBalance);
          res.status(200).json({ message: 'Trading balance in USD updated successfully', data: wallet });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }

      // Fetch the portfolio and its total value for a wallet
      static async fetchPortfolio(req, res) {
        try {
          const { walletAddress } = req.query;
          if (!walletAddress) {
            return res.status(400).json({ message: 'Wallet address is required' });
          }
          // Get portfolio details and respond
          const { portfolio, totalValue } = await PortfolioService.getPortfolio(walletAddress);
          res.status(200).json({
            message: 'Portfolio fetched successfully',
            data: { portfolio, totalValue },
          });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Server error' });
        }
      }
      
  
}

export default PortfolioController;
