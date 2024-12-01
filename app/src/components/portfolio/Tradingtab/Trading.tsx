import { useState, useEffect } from 'react';
import Web3 from 'web3';
import axios from 'axios';

function Trading() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [tradingBalance, setTradingBalance] = useState('0'); // Initial trading balance set to 0

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts: any) {
        setAccount(accounts[0]);
        loadBalance(accounts[0]);
      });
    }
  }, []);

  const loadBalance = async (account: string) => {
    try {
      const web3 = new Web3(window.ethereum);
      const balance = await web3.eth.getBalance(account);
      setBalance(web3.utils.fromWei(balance, 'ether'));
    } catch (error) {
      console.error('Error fetching wallet balance:', error);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        loadBalance(accounts[0]);

        // Send wallet address to backend
        const response = await axios.post('http://localhost:3002/portfolio/connect-wallet', { walletAddress: accounts[0] });
        console.log(response.data.message);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const fetchWalletBalance = async () => {
    try {
      const response = await axios.get('http://localhost:3002/portfolio/fetch-wallet-balance', {
        params: { walletAddress: account },
      });
      setTradingBalance(response.data.data.tradingBalance);
      console.log('Wallet balance fetched from server:', response.data.data);
    } catch (error) {
      console.error('Error fetching wallet balance from backend:', error);
    }
  };

  const disconnectWallet = () => {
    setAccount('');
    setBalance('');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div></div>
        {account ? (
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
      
        <div>
          <p>Wallet Address: {account}</p>
          <p>Wallet Balance: {balance} ETH</p>
          <p>Trading Balance: {tradingBalance} ETH</p>
        </div>
   
    </div>
  );
}

export default Trading;
