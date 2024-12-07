// import { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import axios from 'axios';
// import './trading.css';

// function Trading() {
//   const [account, setAccount] = useState('');
//   const [balance, setBalance] = useState('');
//   const [tradingBalance, setTradingBalance] = useState('0'); // Initial trading balance set to 0
//   const [transactionAmount, setTransactionAmount] = useState(''); // Input for deposit/withdrawal
//   const [transactionStatus, setTransactionStatus] = useState(''); // Status message

//   useEffect(() => {
//     if (window.ethereum) {
//       window.ethereum.on('accountsChanged', function (accounts:any) {
//         setAccount(accounts[0]);
//         loadBalance(accounts[0]);
//       });
//     }
//   }, []);

//   const loadBalance = async (account:any) => {
//     try {
//       const web3 = new Web3(window.ethereum);
//       const balance = await web3.eth.getBalance(account);
//       setBalance(web3.utils.fromWei(balance, 'ether'));
//     } catch (error) {
//       console.error('Error fetching wallet balance:', error);
//     }
//   };

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         loadBalance(accounts[0]);

//         // Send wallet address to backend
//         const response = await axios.post('http://localhost:3002/portfolio/connect-wallet', { walletAddress: accounts[0] });
//         console.log(response.data.message);
//       } catch (error) {
//         console.error('Error connecting wallet:', error);
//       }
//     } else {
//       alert('Please install MetaMask!');
//     }
//   };

//   const fetchWalletBalance = async () => {
//     try {
//       const response = await axios.get('http://localhost:3002/portfolio/fetch-wallet-balance', {
//         params: { walletAddress: account },
//       });
//       setTradingBalance(response.data.data.tradingBalance);
//       console.log('Wallet balance fetched from server:', response.data.data);
//     } catch (error) {
//       console.error('Error fetching wallet balance from backend:', error);
//     }
//   };

//   const disconnectWallet = () => {
//     setAccount('');
//     setBalance('');
//   };

//   const sendTransaction = async (amount:any, recipient:any) => {
//     try {
//       if (!window.ethereum) throw new Error('MetaMask not installed!');
//       const web3 = new Web3(window.ethereum);
//       const accounts = await web3.eth.getAccounts();
//       const tx = await web3.eth.sendTransaction({
//         from: accounts[0],
//         to: recipient,
//         value: web3.utils.toWei(amount, 'ether'),
//       });
//       setTransactionStatus(`Transaction Sent! Hash: ${tx.transactionHash}`);
//       setTradingBalance((parseFloat(tradingBalance) + parseFloat(amount)).toFixed(4));
//       loadBalance(accounts[0]); // Update wallet balance
//     } catch (error:any) {
//       setTransactionStatus(`Error: ${error.message}`);
//     }
//   };

//   const handleDeposit = async () => {
//     const depositValue = parseFloat(transactionAmount);
//     if (depositValue > 0 && depositValue <= parseFloat(balance)) {
//       await sendTransaction(depositValue.toString(), account); // Self-transfer for testing
//     } else {
//       alert('Invalid deposit amount!');
//     }
//   };

//   const handleWithdraw = async () => {
//     const withdrawValue = parseFloat(transactionAmount);
//     if (withdrawValue > 0 && withdrawValue <= parseFloat(tradingBalance)) {
//       await sendTransaction(withdrawValue.toString(), account); // Self-transfer for testing
//       setTradingBalance((parseFloat(tradingBalance) - withdrawValue).toFixed(4));
//     } else {
//       alert('Invalid withdrawal amount!');
//     }
//   };

//   return (
//     <div>
//       <div className='trading-container'>
//         <div></div>
//         {account ? (
//           <button className='connect-btn' onClick={disconnectWallet}>Disconnect Wallet</button>
//         ) : (
//           <button className='connect-btn' onClick={connectWallet}>Connect Wallet</button>
//         )}
//       </div>
      
//       <div>
//         <p>Wallet Address: {account}</p>
//         {/* <p>Wallet Balance: {balance} ETH</p> */}
//         <p>Trading Balance: {tradingBalance} ETH</p>

//         <div className="transaction-controls">
//           <input
//             type="number"
//             placeholder="Enter amount in ETH"
//             value={transactionAmount}
//             onChange={(e) => setTransactionAmount(e.target.value)}
//           />
//           <button onClick={handleDeposit} className="transaction-btn">Deposit</button>
//           <button onClick={handleWithdraw} className="transaction-btn">Withdraw</button>
//         </div>
        
//         {transactionStatus && <p>Status: {transactionStatus}</p>}
//       </div>
//     </div>
//   );
// }

// export default Trading;
// import { useState, useEffect } from 'react';
// import Web3 from 'web3';
// import axios from 'axios';
// import './trading.css';
// import { toast, ToastContainer } from 'react-toastify';

// function Trading() {
//   const [account, setAccount] = useState('');
//   const [balance, setBalance] = useState('');
//   const [tradingBalance, setTradingBalance] = useState('0'); // Initial trading balance set to 0
//   const [transactionAmount, setTransactionAmount] = useState(''); // Input for deposit/withdrawal
//   const [transactionStatus, setTransactionStatus] = useState(''); // Status message
  
 
//   useEffect(() => {
//     if (window.ethereum) {
//       window.ethereum.on('accountsChanged', function (accounts: any) {
//         setAccount(accounts[0]);
//         loadBalance(accounts[0]);
//         fetchWalletBalance(accounts[0]);
//       });
//     }
//   }, []);

//   const loadBalance = async (account: any) => {
//     try {
//       const web3 = new Web3(window.ethereum);
//       const balance = await web3.eth.getBalance(account);
//       setBalance(web3.utils.fromWei(balance, 'ether'));
//     } catch (error) {
//       console.error('Error fetching wallet balance:', error);
//     }
//   };
//   const sendTransaction = async (amount:any, recipient:any) => {
//         try {
//           if (!window.ethereum) throw new Error('MetaMask not installed!');
//           const web3 = new Web3(window.ethereum);
//           const accounts = await web3.eth.getAccounts();
//           const tx = await web3.eth.sendTransaction({
//             from: accounts[0],
//             to: recipient,
//             value: web3.utils.toWei(amount, 'ether'),
//           });
//           setTransactionStatus(`Transaction Sent! Hash: ${tx.transactionHash}`);
//           setTradingBalance((parseFloat(tradingBalance) + parseFloat(amount)).toFixed(4));
//           loadBalance(accounts[0]); // Update wallet balance
//         } catch (error:any) {
//           setTransactionStatus(`Error: ${error.message}`);
//         }
//       };
//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         await window.ethereum.request({
//           method: 'wallet_requestPermissions',
//           params: [{ eth_accounts: {} }],
//         });
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setAccount(accounts[0]);
//         loadBalance(accounts[0]);

//         // Send wallet address to backend
//         const response = await axios.post('http://localhost:3002/portfolio/connect-wallet', {
//           walletAddress: accounts[0],
//         });
//         console.log(response.data.message);

//         // Fetch trading balance after connecting wallet
//         fetchWalletBalance(accounts[0]);
//       } catch (error) {
//         console.error('Error connecting wallet:', error);
//       }
//     } else {
//       alert('Please install MetaMask!');
//     }
//   };

//   const fetchWalletBalance = async (walletAddress: string) => {
//     try {
//       const response = await axios.get('http://localhost:3002/portfolio/fetch-wallet-balance', {
//         params: { walletAddress },
//       });
//       setTradingBalance(response.data.data.tradingBalance);
//       console.log('Wallet balance fetched from server:', response.data.data);
//     } catch (error) {
//       console.error('Error fetching wallet balance from backend:', error);
//     }
//   };

//   const disconnectWallet = () => {
//     setAccount('');
//     setBalance('');
//     setTradingBalance('0');
//   };

//   const updateTradingBalance = async (newBalance: string) => {
//     try {
//       const response = await axios.post('http://localhost:3002/portfolio/update-trading-balance', {
//         walletAddress: account,
//         newBalance,
//       });
//       console.log(response.data.message);
//     } catch (error) {
//       console.error('Error updating trading balance:', error);
//     }
//   };

//   const handleDeposit = async () => {
//     const depositValue = parseFloat(transactionAmount);
//     if (depositValue > 0 && depositValue <= parseFloat(balance)) {
//       try {
//         await sendTransaction(depositValue.toString(), account);
        
//         const newBalance = (parseFloat(tradingBalance) + depositValue).toFixed(4);
//         setTradingBalance(newBalance);
//         await updateTradingBalance(newBalance);
//         toast.success('Deposit Successful!');
//         // setTransactionStatus('Deposit successful!');
//       } catch (error) {
//         console.error('Error processing deposit:', error);
//         toast.error('Error processing deposit.!');
//         setTransactionStatus('Error processing deposit.');
//       }
//     } else {
//       alert('Invalid deposit amount!');
//     }
//   };



//   const handleWithdraw = async () => {
//     const withdrawValue = parseFloat(transactionAmount);
//     if (withdrawValue > 0 && withdrawValue <= parseFloat(tradingBalance)) {
//       try {
//         await sendTransaction(withdrawValue.toString(), account); // Self-transfer for testing
//         const newBalance = (parseFloat(tradingBalance) - withdrawValue).toFixed(4);
//         setTradingBalance(newBalance);
//         await updateTradingBalance(newBalance);
//         toast.success('Withdrawl Successful!');
//         // setTransactionStatus('Withdrawal successful!');
//       } catch (error) {
//         console.error('Error processing withdrawal:', error);
//         toast.error('Error processing withdrawal.');
//         setTransactionStatus('Error processing withdrawal.');
//       }
//     } else {
//       alert('Invalid withdrawal amount!');
//     }
//   };


//   return (
//     <div>
//       <div className='trading-container'>
//         <div></div>
//         {account ? (
//           <button className='connect-btn' onClick={disconnectWallet}>
//             Disconnect Wallet
//           </button>
//         ) : (
//           <button className='connect-btn' onClick={connectWallet}>
//             Connect Wallet
//           </button>
//         )}
//       </div>

//       <div>
//         <p className='wallet-add'>Wallet Address:  {account}</p>
//         {/* <p>Wallet Balance: {balance} ETH</p> */}
//         <p className='tr-add'>Trading Balance: {tradingBalance} ETH</p>

//         <div className='transaction-controls'>
//         <button onClick={handleDeposit} className='deposit-btn'>
//             Deposit
//           </button>
//           <button onClick={handleWithdraw} className='with-btn'>
//             Withdraw
//           </button>
//           <div></div>
//           <input
//           className='amount'
//             type='number'
//             placeholder='Enter amount in ETH'
//             value={transactionAmount}
//             onChange={(e) => setTransactionAmount(e.target.value)}
//           />
        
//         </div>
//         {transactionStatus}
//       </div>
//       <ToastContainer position="top-right" autoClose={2000} />
//     </div>
//   );
// }

// export default Trading;

import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';
import './trading.css';
import { toast, ToastContainer } from 'react-toastify';

function Trading() {
  // State variables for managing wallet, balance, and transaction details
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [tradingBalance, setTradingBalance] = useState('0'); // Initial trading balance set to 0
  const [usdBalance, setUsdBalance] = useState('0'); // USD balance
  const [ethPrice, setEthPrice] = useState(0); // Current ETH price
  const [transactionAmount, setTransactionAmount] = useState(''); // Input for deposit/withdrawal
  const [transactionStatus, setTransactionStatus] = useState(''); // Status message

  // useEffect hook to handle account change and fetch necessary data on mount
  useEffect(() => {
    if (window.ethereum) {
      // Listen for changes in Ethereum accounts (MetaMask)
      window.ethereum.on('accountsChanged', function (accounts: any) {
        setAccount(accounts[0]);
        loadBalance(accounts[0]);
        fetchWalletBalance(accounts[0]);
        fetchEthPrice();
      });
    }
    // Fetch ETH price on component mount
    fetchEthPrice();
  }, []);

  // Function to load wallet balance (ETH) from the blockchain
  const loadBalance = async (account: any) => {
    try {
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(account);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  // Function to send a transaction (Deposit/Withdrawal)
  const sendTransaction = async (amount: any, recipient: any) => {
    try {
      if (!window.ethereum) throw new Error('MetaMask not installed!');
      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const tx = await web3.eth.sendTransaction({
        from: accounts[0],
        to: recipient,
        value: web3.utils.toWei(amount, 'ether'),
      });
      setTransactionStatus(`Transaction Sent! Hash: ${tx.transactionHash}`);
      setTradingBalance((parseFloat(tradingBalance) + parseFloat(amount)).toFixed(4)); // Update trading balance
      loadBalance(accounts[0]); // Update wallet balance after transaction
      updateUsdBalance(); // Update USD balance
    } catch (error: any) {
      setTransactionStatus(`Error: ${error.message}`);
    }
  };

    // Function to connect the wallet (MetaMask)
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        loadBalance(accounts[0]);

        // Send wallet address to backend to register
        const response = await axios.post('http://localhost:3002/portfolio/connect-wallet', {
          walletAddress: accounts[0],
        });
        console.log(response.data.message);

        // Fetch trading balance after connecting wallet
        fetchWalletBalance(accounts[0]);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  // Function to fetch the wallet's trading balance from the backend
  const fetchWalletBalance = async (walletAddress: string) => {
    try {
      const response = await axios.get('http://localhost:3002/portfolio/fetch-wallet-balance', {
        params: { walletAddress },
      });
      setTradingBalance(response.data.data.tradingBalance); // Set trading balance from backend response
      updateUsdBalance(response.data.data.tradingBalance); // Update USD balance based on ETH balance
      console.log('Wallet balance fetched from server:', response.data.data);
    } catch (error) {
      console.error('Error fetching wallet balance from backend:', error);
    }
  };

  // Function to fetch the current ETH price from CoinGecko API
  const fetchEthPrice = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'ethereum',
          vs_currencies: 'usd',
        },
      });
      setEthPrice(response.data.ethereum.usd);
    } catch (error) {
      console.error('Error fetching ETH price:', error);
    }
  };

 // Function to disconnect the wallet
  const disconnectWallet = () => {
    setAccount('');
    setBalance('');
    setTradingBalance('0');
    setUsdBalance('0');
  };

   // Function to update the trading balance in the backend
  const updateTradingBalance = async (newBalance: string, newBalanceUSD: string) => {
    try {
      const response = await axios.post('http://localhost:3002/portfolio/update-trading-balance', {
        walletAddress: account,
        newBalance,
        newBalanceUSD, // Send the USD balance to the backend
      });
      console.log(response.data.message);
    } catch (error) {
      console.error('Error updating trading balance:', error);
    }
  };
  
  // Function to handle deposit transactions
  const handleDeposit = async () => {
    const depositValue = parseFloat(transactionAmount);
    if (depositValue > 0 && depositValue <= parseFloat(balance)) {
      try {
        await sendTransaction(depositValue.toString(), account);
        const newBalance = (parseFloat(tradingBalance) + depositValue).toFixed(4); // Update trading balance
        const newBalanceUSD = (parseFloat(newBalance) * ethPrice).toFixed(2); // Calculate new USD balance
        setTradingBalance(newBalance);
        updateUsdBalance(newBalance);
        await updateTradingBalance(newBalance, newBalanceUSD); // Update backend with new balance
        toast.success('Deposit Successful!');
      } catch (error) {
        console.error('Error processing deposit:', error);
        toast.error('Error processing deposit.');
      }
    } else {
      alert('Invalid deposit amount!');
    }
  };
  
  // Function to handle withdrawal transactions
  const handleWithdraw = async () => {
    const withdrawValue = parseFloat(transactionAmount);
    if (withdrawValue > 0 && withdrawValue <= parseFloat(tradingBalance)) {
      try {
        await sendTransaction(withdrawValue.toString(), account);
        const newBalance = (parseFloat(tradingBalance) - withdrawValue).toFixed(4);
        const newBalanceUSD = (parseFloat(newBalance) * ethPrice).toFixed(2); // Calculate new USD balance
        setTradingBalance(newBalance);
        updateUsdBalance(newBalance);
        await updateTradingBalance(newBalance, newBalanceUSD); // Pass USD balance
        toast.success('Withdrawal Successful!');
      } catch (error) {
        console.error('Error processing withdrawal:', error);
        toast.error('Error processing withdrawal.');
      }
    } else {
      alert('Invalid withdrawal amount!');
    }
  };
  
  // Function to update USD balance based on ETH balance
  const updateUsdBalance = (ethBalance = tradingBalance) => {
    const usdValue = (parseFloat(ethBalance) * ethPrice).toFixed(2);
    setUsdBalance(usdValue);
  };
  

  return (
    <div>
      <div className='trading-container'>
        <div></div>
        {account ? (
          <button className='connect-btn' onClick={disconnectWallet}>
            Disconnect Wallet
          </button>
        ) : (
          <button className='connect-btn' onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
      </div>

      <div>
        <p className='wallet-add'>Wallet Address: {account}</p>
        {/* <p>Wallet Balance: {balance} ETH</p> */}
        <p className='tr-add'>Trading Balance: {tradingBalance} ETH</p>
        <p className='usd-add'>Trading Balance (USD): ${usdBalance}</p>

        <div className='transaction-controls'>
        <input
            className='amount'
            type='number'
            placeholder='Enter amount in ETH'
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
          <div></div>
          <button onClick={handleDeposit} className='deposit-btn'>
            Deposit
          </button>
          <button onClick={handleWithdraw} className='with-btn'>
            Withdraw
          </button>
          
          
        </div>
         {/* Display transaction status */}
         <div className='tra-status'>
        {transactionStatus}
        </div>
      </div>
      {/* Toast notifications for success or error messages */}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default Trading;

