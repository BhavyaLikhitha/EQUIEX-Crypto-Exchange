import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Chart from '../components/coin/Chart/Chart';
import './tradingpage.css';
import List from '../components/markets/List/List';
import SelectDays from '../components/coin/selectDays/SelectDays';
import { convertDate } from '../functions/convertDate';
import './portfoliopage.css';
import { SelectChangeEvent } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import bitcoin from '../assets/bitcoin.png';
interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  desc: string;
  price_change_percentage_24h: number;
  total_volume: number;
  current_price: number;
  market_cap: number;
  circulating_supply: number;
}
interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: number;
    fill: boolean;
    tension: number;
    pointRadius: number;
  }[];
}

const TradePage: React.FC = () => {
  const navigate = useNavigate();
  const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';
  const [tradingBalanceUSD, setTradingBalanceUSD] = useState<number | null>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [amount, setAmount] = useState<number>(0);
  const [coinPrice, setCoinPrice] = useState<number>(0);
  const [coinData, setCoinData] = useState<CoinData | null>(null); // Coin data for List component
  const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin'); 
  const [chartData, setChartData] = useState<ChartData | null>(null); // Chart data
  const [days, setDays] = useState<number>(7); // Default selected days

  useEffect(() => {
    fetchTradingBalanceUSD();
    // fetchCoinData();
    fetchTransactionHistory();
  }, []);

  const fetchTradingBalanceUSD = async () => {
    try {
      const response = await fetch(`http://localhost:3002/portfolio/fetch-trading-balance-usd`);
      const data = await response.json();
      setTradingBalanceUSD(data.data);
    } catch (error) {
      console.error('Error fetching trading balance:', error);
    }
  };

   // Fetch coin data for Bitcoin
   useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}`);
        const data = await response.json();
        setCoinData({
          id: data.id,
          name: data.name,
          symbol: data.symbol,
          image: data.image.large,
          desc: data.description.en,
          price_change_percentage_24h: data.market_data.price_change_percentage_24h,
          total_volume: data.market_data.total_volume.usd,
          current_price: data.market_data.current_price.usd,
          market_cap: data.market_data.market_cap.usd,
          circulating_supply: data.market_data.circulating_supply,

        });
        setCoinPrice(data.market_data.current_price.usd);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, [selectedCrypto]);


  const fetchTransactionHistory = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/portfolio/fetch-transaction-history?walletAddress=${walletAddress}`
      );
      const data = await response.json();
      setTransactions(data.data);
    } catch (error) {
      console.error('Error fetching transaction history:', error);
    }
  };

  const updateTradingBalance = async (newBalance: number) => {
    try {
      await fetch('http://localhost:3002/portfolio/usd-balance-update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ walletAddress, newBalance }),
      });
      console.log('Trading balance updated successfully');
    } catch (error) {
      console.error('Error updating trading balance:', error);
    }
  };
  
  const handleBuy = async () => {
    if (amount <= 0 || !coinPrice || (tradingBalanceUSD !== null && amount > tradingBalanceUSD)) {
      alert('Enter a valid amount or ensure sufficient trading balance');
      return;
    }
  
    const quantity = amount / coinPrice;
  
    try {
      await fetch('http://localhost:3002/portfolio/add-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          orderType: 'buy',
          coinDetails: {
            coinId: 'bitcoin',
            coinName: 'Bitcoin',
            price: coinPrice,
            quantity,
            value: amount,
          },
        }),
      });
  
      // Deduct amount from trading balance
      const newBalance = (tradingBalanceUSD as number) - amount;
      await updateTradingBalance(newBalance);
  
      await fetchTradingBalanceUSD();
      await fetchTransactionHistory();
      toast.success("Buy transaction successful!");
      // alert('Transaction successful!');

       // Show notification
    showNotification("Buy Transaction Successful!", {
      body: `You purchased ${quantity.toFixed(5)} BTC for $${amount.toFixed(2)}.`,
      icon: {bitcoin}, // Replace with your app's icon URL
    });
    } catch (error) {
      console.error('Error processing buy transaction:', error);
      toast.error("Buy transaction failed!");
      // alert('Transaction failed');
    }
  };
  
  const handleSell = async () => {
    if (amount <= 0 || !coinPrice) {
      alert('Enter a valid amount');
      return;
    }
  
    const quantity = amount / coinPrice;
  
    try {
      await fetch('http://localhost:3002/portfolio/add-transaction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          orderType: 'sell',
          coinDetails: {
            coinId: 'bitcoin',
            coinName: 'Bitcoin',
            price: coinPrice,
            quantity,
            value: amount,
          },
        }),
      });
  
      // Add amount to trading balance
      const newBalance = (tradingBalanceUSD as number) + amount;
      await updateTradingBalance(newBalance);
  
      await fetchTradingBalanceUSD();
      await fetchTransactionHistory();
      // alert('Transaction successful!');
      toast.success("Sell Transaction Successful!");
       // Show notification
    showNotification("Sell Transaction Successful!", {
      body: `You sold ${quantity.toFixed(5)} BTC for $${amount.toFixed(2)}.`,
      icon: {bitcoin}, // Replace with your app's icon URL
    });
    } catch (error) {
      console.error('Error processing sell transaction:', error);
      // alert('Transaction failed');
      toast.error("sell transaction failed!")
    }
  };
  
  const handleDownloadHistory = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/portfolio/download-transaction-history?walletAddress=${walletAddress}`
      );
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'transaction-history.csv';
      link.click();
    } catch (error) {
      console.error('Error downloading transaction history:', error);
    }
  };
// Fetch chart data based on selected crypto and days
useEffect(() => {
  const fetchChartData = async () => {
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${days}`
      );
      const data = await response.json();
      setChartData({
        labels: data.prices.map((price: [number, number]) => convertDate(price[0])),
        datasets: [
          {
            label: `${selectedCrypto} Price (USD)`,
            data: data.prices.map((price: [number, number]) => price[1]),
            borderColor: '#3a80e9',
            backgroundColor: 'transparent',
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            pointRadius: 0,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };
  fetchChartData();
}, [selectedCrypto, days]);

const handleDaysChange = (event: SelectChangeEvent<number>) => {
  const newDays = Number(event.target.value);
  setDays(newDays);

  axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${newDays}&interval=daily`
    )
    .then((response) => {
      console.log("Prices", response.data.prices);

      const labels = response.data.prices.map((price: [number, number]) =>
        new Date(price[0]).toLocaleDateString()
      );

      const data = response.data.prices.map((price: [number, number]) => price[1]);

      setChartData({
        labels: labels,
        datasets: [
          {
            data: data,
            borderColor: "#3a80e9",
            backgroundColor: "rgba(58, 128, 233, 0.5)",
            borderWidth: 2,
            fill: true,
            tension: "1",
            pointRadius: 0,
          }
        ]
      });

    })
    .catch((error) => {
      console.error("ERROR>>>", error.message);
    });
};

useEffect(() => {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification permission granted!");
      } else {
        console.warn("Notification permission denied!");
      }
    });
  }
}, []);
const showNotification = (title:any, options:any) => {
  if (Notification.permission === "granted") {
    new Notification(title, options);
  } else {
    console.warn("Notifications are not enabled by the user.");
  }
};


  return (
    <div>

    <div className="trade-page">
      <Header />
       {/* Coin Data List */}
       <div className="wrapper">
        {coinData && <List coin={coinData} />}
      </div>
      <div className="main-content">
      <div className="chart-section">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          {chartData ? (
            <Chart key={days} chartData={chartData} multiAxis={true} />
          ) : (
            <p>Loading chart data...</p>
          )}
        </div>
      <div className="trade-panel">
        <h2>Trade Bitcoin</h2>
        <p className='trade-bal'>Balance (USD): {tradingBalanceUSD !== null ? `$${tradingBalanceUSD.toFixed(2)}` : 'Loading...'}</p>
        <p className='trade-price'>Current Price (USD): {coinPrice ? `$${coinPrice.toFixed(0)}` : 'Loading...'}</p>
        <p>Amount
        <input className='input-trade'
          type="text"
          placeholder="Enter amount in USD"
          value={amount === 0 ? "" : amount} 
          // value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        </p>
        <div className="trade-buttons">
          <button className='buy' onClick={handleBuy}>Buy</button>
          <button className='sell' onClick={handleSell}>Sell</button>
        </div>
        <button
              className="portfolio-button"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </button>
        </div>
        </div>
        
         <div className="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order type</th>
              <th>quantity</th>
              <th>Bought Price</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                {/* <td>{txn.transactionDate.toLocaleString()}</td> */}
                <td>{new Date(txn.transactionDate).toLocaleString()}</td>
                <td>{txn.orderType.toUpperCase()}</td>
                <td>{txn.coinDetails.quantity.toFixed(5)} BTC</td>
                <td>${txn.coinDetails.price}</td>
                <td>${txn.coinDetails.value.toFixed(2)}</td>
                </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleDownloadHistory}>Download History</button>
      </div>
      </div>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} /> 
    </div>
  );
};

export default TradePage;
