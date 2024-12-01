// import React, { useState, useEffect } from 'react';
// import Web3 from 'web3';

// function Trading() {
//   const [account, setAccount] = useState('');
//   const [balance, setBalance] = useState('');
//   const [tradingBalance, setTradingBalance] = useState('1000'); // Example trading balance

//   useEffect(() => {
//     if (window.ethereum) {
//       window.ethereum.on('accountsChanged', function (accounts:any) {
//         setAccount(accounts[0]);
//         loadBalance(accounts[0]);
//       });
//     }
//   }, []);

//   const loadBalance = async (account:any) => {
//     const web3 = new Web3(window.ethereum);
//     const balance = await web3.eth.getBalance(account);
//     setBalance(web3.utils.fromWei(balance, 'ether'));
//   };

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       setAccount(accounts[0]);
//       loadBalance(accounts[0]);
//     } else {
//       alert('Please install MetaMask!');
//     }
//   };

//   const disconnectWallet = () => {
//     setAccount('');
//     setBalance('');
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div></div>
//         {account ? (
//           <button onClick={disconnectWallet}>Disconnect Wallet</button>
//         ) : (
//           <button onClick={connectWallet}>Connect Wallet</button>
//         )}
//       </div>
//       {account && (
//         <div>
//           <p>Wallet Address: {account}</p>
//           <p>Wallet Balance: {balance} ETH</p>
//           <p>Trading Balance: {tradingBalance} ETH</p>
//           <button>Deposit</button>
//           <button>Withdraw</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Trading;
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function Trading() {
  const [account, setAccount] = useState('');
  const [balance, setBalance] = useState('');
  const [tradingBalance, setTradingBalance] = useState('1000'); // Example trading balance

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', function (accounts:any) {
        setAccount(accounts[0]);
        loadBalance(accounts[0]);
      });
    }
  }, []);

  const loadBalance = async (account:any) => {
    const web3 = new Web3(window.ethereum);
    const balance = await web3.eth.getBalance(account);
    setBalance(web3.utils.fromWei(balance, 'ether'));
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'wallet_requestPermissions', params: [{ eth_accounts: {} }] });
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        loadBalance(accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const disconnectWallet = () => {
    setAccount('');
    setBalance('');
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Trading hii</div>
        {account ? (
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        ) : (
          <button onClick={connectWallet}>Connect Wallet</button>
        )}
      </div>
      {account && (
        <div>
          <p>Wallet Address: {account}</p>
          <p>Wallet Balance: {balance} ETH</p>
          <p>Trading Balance: {tradingBalance} ETH</p>
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
      )}
    </div>
  );
}

export default Trading;
