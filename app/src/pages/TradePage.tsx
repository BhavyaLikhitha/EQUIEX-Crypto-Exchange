// import React, { useState, useEffect } from 'react';
// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';
// import List from '../components/markets/List/List';
// import Chart from '../components/coin/Chart/Chart';
// import SelectDays from '../components/coin/selectDays/SelectDays';
// import { convertDate } from '../functions/convertDate';
// import './tradingpage.css';
// import { useNavigate } from 'react-router-dom';
// import './portfoliopage.css';
// import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent

// interface CoinData {
//   id: string;
//   name: string;
//   symbol: string;
//   image: string;
//   desc: string;
//   price_change_percentage_24h: number;
//   total_volume: number;
//   current_price: number;
//   market_cap: number;
//   circulating_supply: number;
// }

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     backgroundColor: string;
//     borderWidth: number;
//     fill: boolean;
//     tension: number;
//     pointRadius: number;
//   }[];
// }

// interface Order {
//   type: string;
//   orderType: string;
//   price: number;
//   quantity: number;
//   total: number;
//   date: string;
// }

// const TradePage: React.FC<{}> = () => {
//   const navigate = useNavigate();
//   const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin'); // Default selected crypto
//   const [coinData, setCoinData] = useState<CoinData | null>(null); // Coin data for List component
//   const [chartData, setChartData] = useState<ChartData | null>(null); // Chart data
//   const [orderHistory, setOrderHistory] = useState<Order[]>([]); // Orders history
//   const [days, setDays] = useState<number>(7); // Default selected days
//   const [price, setPrice] = useState<number>(0); // Input price
//   const [quantity, setQuantity] = useState<number>(0); // Input quantity
//   const [orderType, setOrderType] = useState<string>('market'); // Market or limit order

//   // Fetch coin data for Bitcoin
//   useEffect(() => {
//     const fetchCoinData = async () => {
//       try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}`);
//         const data = await response.json();
//         setCoinData({
//           id: data.id,
//           name: data.name,
//           symbol: data.symbol,
//           image: data.image.large,
//           desc: data.description.en,
//           price_change_percentage_24h: data.market_data.price_change_percentage_24h,
//           total_volume: data.market_data.total_volume.usd,
//           current_price: data.market_data.current_price.usd,
//           market_cap: data.market_data.market_cap.usd,
//           circulating_supply: data.market_data.circulating_supply,
//         });

//         if (orderType === 'market') {
//           setPrice(data.market_data.current_price.usd); // Set price for market orders
//         }
//       } catch (error) {
//         console.error('Error fetching coin data:', error);
//       }
//     };

//     fetchCoinData();
//   }, [selectedCrypto, orderType]);

//   // Fetch chart data based on selected crypto and days
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${days}`
//         );
//         const data = await response.json();
//         setChartData({
//           labels: data.prices.map((price: [number, number]) => convertDate(price[0])),
//           datasets: [
//             {
//               label: `${selectedCrypto} Price (USD)`,
//               data: data.prices.map((price: [number, number]) => price[1]),
//               borderColor: '#3a80e9',
//               backgroundColor: 'transparent',
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 0,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//       }
//     };
//     fetchChartData();
//   }, [selectedCrypto, days]);

//   // Handle trades (buy/sell)
//   const handleTrade = (type: string) => {
//     const finalPrice = orderType === 'market' ? coinData?.current_price || 0 : price;
//     const totalAmount = finalPrice * quantity;

//     const newOrder: Order = {
//       type,
//       orderType, // Add market/limit type to order
//       price: finalPrice,
//       quantity,
//       total: totalAmount,
//       date: new Date().toLocaleString(),
//     };

//     setOrderHistory([newOrder, ...orderHistory]); // Update history
//     alert(`Order placed: ${type.toUpperCase()} ${quantity} ${selectedCrypto} for $${totalAmount.toFixed(2)}`);
//   };

//   // Handle days change
//   const handleDaysChange = (event: SelectChangeEvent<number>) => {
//     const selectedDays = Number(event.target.value);
//     setDays(selectedDays);
//   };

//   // Download order history as CSV
//   const downloadHistory = () => {
//     const csvData = orderHistory.map((order) =>
//       `${order.date},${order.type},${order.orderType},${order.quantity},${order.price},${order.total}`
//     );
//     const csvBlob = new Blob([`Date,Type,OrderType,Quantity,Price,Total\n${csvData.join('\n')}`], { type: 'text/csv' });
//     const url = URL.createObjectURL(csvBlob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'order_history.csv';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="trade-page">
//       <Header />

//       {/* Coin Data List */}
//       <div className="wrapper">
//         {coinData && <List coin={coinData} />}
//       </div>
//       <div className="main-content">
//         {/* Chart and Days Selector */}
//         <div className="chart-section">
//           <SelectDays days={days} handleDaysChange={handleDaysChange} />
//           {chartData ? (
//             <Chart key={days} chartData={chartData} multiAxis={true} />
//           ) : (
//             <p>Loading chart data...</p>
//           )}
//         </div>

//         {/* Buy/Sell Panel */}
//         <div className="trade-panel">
//           <h2>Buy/Sell {selectedCrypto.toUpperCase()}</h2>
//           <p>Balance(USD): </p>
//           <div className="trade-form">
//             <div className="form-group">
//               <label><b>Order Type</b></label>
//               <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
//                 <option value="market">Market</option>
//                 <option value="limit">Limit</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label><b>Price (USD)</b></label>
//               <input
//                 type="number"
//                 value={orderType === 'market' ? coinData?.current_price || 0 : price}
//                 onChange={(e) => setPrice(Number(e.target.value))}
//                 disabled={orderType === 'market'} // Disable input for market orders
//               />
//             </div>
//             <div className="form-group">
//               <label><b>Quantity</b></label>
//               <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
//             </div>
//             <div className="bs">
//               <button className="buy" onClick={() => handleTrade('buy')}>Buy</button>
//               <button className="sell" onClick={() => handleTrade('sell')}>Sell</button>
//             </div>
//             <button
//               className="portfolio-button"
//               onClick={() => navigate("/portfolio")}
//             >
//               View Portfolio
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Order History */}
//       <div className="order-history">
//         <h2>Order History</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Type</th>
//               <th>Order Type</th>
//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             {orderHistory.map((order, index) => (
//               <tr key={index}>
//                 <td>{order.date}</td>
//                 <td>{order.type.toUpperCase()}</td>
//                 <td>{order.orderType.toUpperCase()}</td>
//                 <td>{order.quantity}</td>
//                 <td>${order.price.toFixed(2)}</td>
//                 <td>${order.total.toFixed(2)}</td>
//                 </tr>
//             ))}
//           </tbody>
//         </table>
//         <button onClick={downloadHistory}>Download History</button>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default TradePage;
// import React, { useState, useEffect } from 'react';
// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';
// import List from '../components/markets/List/List';
// import Chart from '../components/coin/Chart/Chart';
// import SelectDays from '../components/coin/selectDays/SelectDays';
// import { convertDate } from '../functions/convertDate';
// import './tradingpage.css';
// import { useNavigate } from 'react-router-dom';
// import './portfoliopage.css';
// import { SelectChangeEvent } from '@mui/material/Select';

// interface CoinData {
//   id: string;
//   name: string;
//   symbol: string;
//   image: string;
//   desc: string;
//   price_change_percentage_24h: number;
//   total_volume: number;
//   current_price: number;
//   market_cap: number;
//   circulating_supply: number;
// }

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     backgroundColor: string;
//     borderWidth: number;
//     fill: boolean;
//     tension: number;
//     pointRadius: number;
//   }[];
// }

// interface Order {
//   type: string;
//   orderType: string;
//   price: number;
//   quantity: number;
//   total: number;
//   date: string;
// }

// const TradePage: React.FC<{}> = () => {
//   const navigate = useNavigate();
//   const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin'); // Default selected crypto
//   const [coinData, setCoinData] = useState<CoinData | null>(null); // Coin data for List component
//   const [chartData, setChartData] = useState<ChartData | null>(null); // Chart data
//   const [orderHistory, setOrderHistory] = useState<Order[]>([]); // Orders history
//   const [days, setDays] = useState<number>(7); // Default selected days
//   const [price, setPrice] = useState<number>(0); // Input price
//   const [quantity, setQuantity] = useState<number>(0); // Input quantity
//   const [orderType, setOrderType] = useState<string>('market'); // Market or limit order
//   const [tradingBalanceUSD, setTradingBalanceUSD] = useState<number | null>(null); // Trading balance in USD

//   // Fetch trading balance in USD
//   useEffect(() => {
//     const fetchTradingBalanceUSD = async () => {
//       try {
//         const response = await fetch('http://localhost:3002/portfolio/fetch-trading-balance-usd');
//         const data = await response.json();
//         setTradingBalanceUSD(data.data);
//       } catch (error) {
//         console.error('Error fetching trading balance in USD:', error);
//       }
//     };

//     fetchTradingBalanceUSD();
//   }, []);

//   // Fetch coin data for Bitcoin
//   useEffect(() => {
//     const fetchCoinData = async () => {
//       try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}`);
//         const data = await response.json();
//         setCoinData({
//           id: data.id,
//           name: data.name,
//           symbol: data.symbol,
//           image: data.image.large,
//           desc: data.description.en,
//           price_change_percentage_24h: data.market_data.price_change_percentage_24h,
//           total_volume: data.market_data.total_volume.usd,
//           current_price: data.market_data.current_price.usd,
//           market_cap: data.market_data.market_cap.usd,
//           circulating_supply: data.market_data.circulating_supply,
//         });

//         if (orderType === 'market') {
//           setPrice(data.market_data.current_price.usd); // Set price for market orders
//         }
//       } catch (error) {
//         console.error('Error fetching coin data:', error);
//       }
//     };

//     fetchCoinData();
//   }, [selectedCrypto, orderType]);

//   // Fetch chart data based on selected crypto and days
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${days}`
//         );
//         const data = await response.json();
//         setChartData({
//           labels: data.prices.map((price: [number, number]) => convertDate(price[0])),
//           datasets: [
//             {
//               label: `${selectedCrypto} Price (USD)`,
//               data: data.prices.map((price: [number, number]) => price[1]),
//               borderColor: '#3a80e9',
//               backgroundColor: 'transparent',
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 0,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//       }
//     };
//     fetchChartData();
//   }, [selectedCrypto, days]);

//   // Handle trades (buy/sell)
//   const handleTrade = (type: string) => {
//     const finalPrice = orderType === 'market' ? coinData?.current_price || 0 : price;
//     const totalAmount = finalPrice * quantity;

//     const newOrder: Order = {
//       type,
//       orderType, // Add market/limit type to order
//       price: finalPrice,
//       quantity,
//       total: totalAmount,
//       date: new Date().toLocaleString(),
//     };

//     setOrderHistory([newOrder, ...orderHistory]); // Update history
//     alert(`Order placed: ${type.toUpperCase()} ${quantity} ${selectedCrypto} for $${totalAmount.toFixed(2)}`);
//   };

//   // Handle days change
//   const handleDaysChange = (event: SelectChangeEvent<number>) => {
//     const selectedDays = Number(event.target.value);
//     setDays(selectedDays);
//   };

//   // Download order history as CSV
//   const downloadHistory = () => {
//     const csvData = orderHistory.map((order) =>
//       `${order.date},${order.type},${order.orderType},${order.quantity},${order.price},${order.total}`
//     );
//     const csvBlob = new Blob([`Date,Type,OrderType,Quantity,Price,Total\n${csvData.join('\n')}`], { type: 'text/csv' });
//     const url = URL.createObjectURL(csvBlob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'order_history.csv';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="trade-page">
//       <Header />

//       {/* Coin Data List */}
//       <div className="wrapper">
//         {coinData && <List coin={coinData} />}
//       </div>
//       <div className="main-content">
//         {/* Chart and Days Selector */}
//         <div className="chart-section">
//           <SelectDays days={days} handleDaysChange={handleDaysChange} />
//           {chartData ? (
//             <Chart key={days} chartData={chartData} multiAxis={true} />
//           ) : (
//             <p>Loading chart data...</p>
//           )}
//         </div>

//         {/* Buy/Sell Panel */}
//         <div className="trade-panel">
//           <h2>Buy/Sell {selectedCrypto.toUpperCase()}</h2>
//           <p>Balance(USD): {tradingBalanceUSD !== null ? `$${tradingBalanceUSD.toFixed(2)}` : 'Loading...'}</p>
//           <div className="trade-form">
//             <div className="form-group">
//               <label><b>Order Type</b></label>
//               <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
//                 <option value="market">Market</option>
//                 <option value="limit">Limit</option>
//               </select>
//             </div>
//             <div className="form-group">
//               <label><b>Price (USD)</b></label>
//               <input
//                 type="number"
//                 value={orderType === 'market' ? coinData?.current_price || 0 : price}
//                 onChange={(e) => setPrice(Number(e.target.value))}
//                 disabled={orderType === 'market'} // Disable input for market orders
//               />
//             </div>
//             <div className="form-group">
//               <label><b>Quantity</b></label>
//               <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
//             </div>
//             <div className="bs">
//               <button className="buy" onClick={() => handleTrade('buy')}>Buy</button>
//               <button className="sell" onClick={() => handleTrade('sell')}>Sell</button>
//             </div>
//             <button
//               className="portfolio-button"
//               onClick={() => navigate("/portfolio")}
//             >
//               View Portfolio
//             </button>
//           </div>
//         </div>
//       </div>
//       {/* Order History */}
//       <div className="order-history">
//         <h2>Order History</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Type</th>
//               <th>Order Type</th>
//               <th>Price</th>
//         <th>Total</th>
//       </tr>
//     </thead>
//     <tbody>
//       {orderHistory.map((order, index) => (
//         <tr key={index}>
//           <td>{order.date}</td>
//           <td>{order.type.toUpperCase()}</td>
//           <td>{order.orderType.toUpperCase()}</td>
//           <td>{order.quantity}</td>
//           <td>${order.price.toFixed(2)}</td>
//           <td>${order.total.toFixed(2)}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   <button onClick={downloadHistory}>Download History</button>
// </div>
// <Footer />
// </div>
// );
// };

// export default TradePage;
// import React, { useState, useEffect } from 'react';
// import Header from '../components/common/Header';
// import Footer from '../components/common/Footer';
// import List from '../components/markets/List/List';
// import Chart from '../components/coin/Chart/Chart';
// import SelectDays from '../components/coin/selectDays/SelectDays';
// import { convertDate } from '../functions/convertDate';
// import './tradingpage.css';
// import { useNavigate } from 'react-router-dom';
// import './portfoliopage.css';
// import { SelectChangeEvent } from '@mui/material/Select';

// interface CoinData {
//   id: string;
//   name: string;
//   symbol: string;
//   image: string;
//   desc: string;
//   price_change_percentage_24h: number;
//   total_volume: number;
//   current_price: number;
//   market_cap: number;
//   circulating_supply: number;
// }

// interface ChartData {
//   labels: string[];
//   datasets: {
//     label: string;
//     data: number[];
//     borderColor: string;
//     backgroundColor: string;
//     borderWidth: number;
//     fill: boolean;
//     tension: number;
//     pointRadius: number;
//   }[];
// }



// const TradePage: React.FC<{}> = () => {
//   const navigate = useNavigate();
//   const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin'); // Default selected crypto
//   const [coinData, setCoinData] = useState<CoinData | null>(null); // Coin data for List component
//   const [chartData, setChartData] = useState<ChartData | null>(null); // Chart data
//   const [days, setDays] = useState<number>(7); // Default selected days
//   const [orderType, setOrderType] = useState<string>('market'); // Market
//   const [tradingBalanceUSD, setTradingBalanceUSD] = useState<number | null>(null); // Trading balance in USD
//   const [price, setPrice] = useState<number>(0); // Input price
//   // Fetch trading balance in USD
//   useEffect(() => {
//     const fetchTradingBalanceUSD = async () => {
//       try {
//         const response = await fetch('http://localhost:3002/portfolio/fetch-trading-balance-usd');
//         const data = await response.json();
//         setTradingBalanceUSD(data.data);
//       } catch (error) {
//         console.error('Error fetching trading balance in USD:', error);
//       }
//     };

//     fetchTradingBalanceUSD();
//   }, []);

//   // Fetch coin data for Bitcoin
//   useEffect(() => {
//     const fetchCoinData = async () => {
//       try {
//         const response = await fetch(`https://api.coingecko.com/api/v3/coins/${selectedCrypto}`);
//         const data = await response.json();
//         setCoinData({
//           id: data.id,
//           name: data.name,
//           symbol: data.symbol,
//           image: data.image.large,
//           desc: data.description.en,
//           price_change_percentage_24h: data.market_data.price_change_percentage_24h,
//           total_volume: data.market_data.total_volume.usd,
//           current_price: data.market_data.current_price.usd,
//           market_cap: data.market_data.market_cap.usd,
//           circulating_supply: data.market_data.circulating_supply,
//         });

//         if (orderType === 'market') {
//           setPrice(data.market_data.current_price.usd); // Set price for market orders
//         }
//       } catch (error) {
//         console.error('Error fetching coin data:', error);
//       }
//     };

//     fetchCoinData();
//   }, [selectedCrypto, orderType]);
//   // Fetch chart data based on selected crypto and days
//   useEffect(() => {
//     const fetchChartData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${days}`
//         );
//         const data = await response.json();
//         setChartData({
//           labels: data.prices.map((price: [number, number]) => convertDate(price[0])),
//           datasets: [
//             {
//               label: `${selectedCrypto} Price (USD)`,
//               data: data.prices.map((price: [number, number]) => price[1]),
//               borderColor: '#3a80e9',
//               backgroundColor: 'transparent',
//               borderWidth: 2,
//               fill: true,
//               tension: 0.25,
//               pointRadius: 0,
//             },
//           ],
//         });
//       } catch (error) {
//         console.error('Error fetching chart data:', error);
//       }
//     };
//     fetchChartData();
//   }, [selectedCrypto, days]);
//   const handleDaysChange = (event: SelectChangeEvent<number>) => {
//     const selectedDays = Number(event.target.value);
//     setDays(selectedDays);
//   };
//   return (
//     <div className="trade-page">
//       <Header />
//       <div className="wrapper">
//         {coinData && <List coin={coinData} />}
//       </div>
//       <div className="main-content">
//         <div className="chart-section">
//           <SelectDays days={days} handleDaysChange={handleDaysChange} />
//           {chartData ? (
//             <Chart key={days} chartData={chartData} multiAxis={true} />
//           ) : (
//             <p>Loading chart data...</p>
//           )}
//         </div>
//         <div className="trade-panel">
//           <h2>Buy/Sell {selectedCrypto.toUpperCase()}</h2>
//           <p>Balance(USD): {tradingBalanceUSD !== null ? `$${tradingBalanceUSD.toFixed(2)}` : 'Loading...'}</p>
// </div>
// </div>
// <Footer />
// </div>
//   );
// };

// export default TradePage;

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

  // const fetchCoinData = async () => {
  //   try {
  //     const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);
  //     const data = await response.json();
  //     setCoinPrice(data.market_data.current_price.usd);
  //   } catch (error) {
  //     console.error('Error fetching Bitcoin price:', error);
  //   }
  // };

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


  return (
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
    
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} /> 
    </div>
  );
};

export default TradePage;
