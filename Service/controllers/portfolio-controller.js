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
  static async connectWallet(req, res) {
    try {
      const { walletAddress } = req.body;
      if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
      }

      const walletData = await PortfolioService.saveWalletAddress(walletAddress);
      res.status(201).json({ message: 'Wallet connected successfully', data: walletData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  static async fetchWalletBalance(req, res) {
    try {
      const { walletAddress } = req.query;
      if (!walletAddress) {
        return res.status(400).json({ message: 'Wallet address is required' });
      }

      const wallet = await PortfolioService.getWalletBalance(walletAddress);
      res.status(200).json({ message: 'Wallet balance fetched successfully', data: wallet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }

  static async deposit(req, res) {
    try {
      const { walletAddress, amount } = req.body;
      if (!walletAddress || amount <= 0) {
        return res.status(400).json({ message: 'Invalid wallet address or deposit amount' });
      }

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

  static async withdraw(req, res) {
    try {
      const { walletAddress, amount } = req.body;
      if (!walletAddress || amount <= 0) {
        return res.status(400).json({ message: 'Invalid wallet address or withdraw amount' });
      }

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

  static async updateTradingBalance(req, res) {
    try {
      const { walletAddress, newBalance } = req.body;
      if (!walletAddress || newBalance < 0) {
        return res.status(400).json({ message: 'Invalid wallet address or balance' });
      }

      const wallet = await PortfolioService.updateTradingBalance(walletAddress, newBalance);
      res.status(200).json({
        message: 'Trading balance updated successfully',
        data: wallet,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  }
}

export default PortfolioController;
