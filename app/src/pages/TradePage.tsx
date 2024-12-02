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
import React, { useState, useEffect } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import List from '../components/markets/List/List';
import Chart from '../components/coin/Chart/Chart';
import SelectDays from '../components/coin/selectDays/SelectDays';
import { convertDate } from '../functions/convertDate';
import './tradingpage.css';
import { useNavigate } from 'react-router-dom';
import './portfoliopage.css';
import { SelectChangeEvent } from '@mui/material/Select';

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

interface Order {
  type: string;
  orderType: string;
  price: number;
  quantity: number;
  total: number;
  date: string;
}

const TradePage: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin'); // Default selected crypto
  const [coinData, setCoinData] = useState<CoinData | null>(null); // Coin data for List component
  const [chartData, setChartData] = useState<ChartData | null>(null); // Chart data
  const [orderHistory, setOrderHistory] = useState<Order[]>([]); // Orders history
  const [days, setDays] = useState<number>(7); // Default selected days
  const [price, setPrice] = useState<number>(0); // Input price
  const [quantity, setQuantity] = useState<number>(0); // Input quantity
  const [orderType, setOrderType] = useState<string>('market'); // Market or limit order
  const [tradingBalanceUSD, setTradingBalanceUSD] = useState<number | null>(null); // Trading balance in USD

  // Fetch trading balance in USD
  useEffect(() => {
    const fetchTradingBalanceUSD = async () => {
      try {
        const response = await fetch('http://localhost:3002/portfolio/fetch-trading-balance-usd');
        const data = await response.json();
        setTradingBalanceUSD(data.data);
      } catch (error) {
        console.error('Error fetching trading balance in USD:', error);
      }
    };

    fetchTradingBalanceUSD();
  }, []);

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

        if (orderType === 'market') {
          setPrice(data.market_data.current_price.usd); // Set price for market orders
        }
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };

    fetchCoinData();
  }, [selectedCrypto, orderType]);

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

  // Handle trades (buy/sell)
  const handleTrade = (type: string) => {
    const finalPrice = orderType === 'market' ? coinData?.current_price || 0 : price;
    const totalAmount = finalPrice * quantity;

    const newOrder: Order = {
      type,
      orderType, // Add market/limit type to order
      price: finalPrice,
      quantity,
      total: totalAmount,
      date: new Date().toLocaleString(),
    };

    setOrderHistory([newOrder, ...orderHistory]); // Update history
    alert(`Order placed: ${type.toUpperCase()} ${quantity} ${selectedCrypto} for $${totalAmount.toFixed(2)}`);
  };

  // Handle days change
  const handleDaysChange = (event: SelectChangeEvent<number>) => {
    const selectedDays = Number(event.target.value);
    setDays(selectedDays);
  };

  // Download order history as CSV
  const downloadHistory = () => {
    const csvData = orderHistory.map((order) =>
      `${order.date},${order.type},${order.orderType},${order.quantity},${order.price},${order.total}`
    );
    const csvBlob = new Blob([`Date,Type,OrderType,Quantity,Price,Total\n${csvData.join('\n')}`], { type: 'text/csv' });
    const url = URL.createObjectURL(csvBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'order_history.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="trade-page">
      <Header />

      {/* Coin Data List */}
      <div className="wrapper">
        {coinData && <List coin={coinData} />}
      </div>
      <div className="main-content">
        {/* Chart and Days Selector */}
        <div className="chart-section">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          {chartData ? (
            <Chart key={days} chartData={chartData} multiAxis={true} />
          ) : (
            <p>Loading chart data...</p>
          )}
        </div>

        {/* Buy/Sell Panel */}
        <div className="trade-panel">
          <h2>Buy/Sell {selectedCrypto.toUpperCase()}</h2>
          <p>Balance(USD): {tradingBalanceUSD !== null ? `$${tradingBalanceUSD.toFixed(2)}` : 'Loading...'}</p>
          <div className="trade-form">
            <div className="form-group">
              <label><b>Order Type</b></label>
              <select value={orderType} onChange={(e) => setOrderType(e.target.value)}>
                <option value="market">Market</option>
                <option value="limit">Limit</option>
              </select>
            </div>
            <div className="form-group">
              <label><b>Price (USD)</b></label>
              <input
                type="number"
                value={orderType === 'market' ? coinData?.current_price || 0 : price}
                onChange={(e) => setPrice(Number(e.target.value))}
                disabled={orderType === 'market'} // Disable input for market orders
              />
            </div>
            <div className="form-group">
              <label><b>Quantity</b></label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>
            <div className="bs">
              <button className="buy" onClick={() => handleTrade('buy')}>Buy</button>
              <button className="sell" onClick={() => handleTrade('sell')}>Sell</button>
            </div>
            <button
              className="portfolio-button"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      {/* Order History */}
      <div className="order-history">
        <h2>Order History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Order Type</th>
              <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {orderHistory.map((order, index) => (
        <tr key={index}>
          <td>{order.date}</td>
          <td>{order.type.toUpperCase()}</td>
          <td>{order.orderType.toUpperCase()}</td>
          <td>{order.quantity}</td>
          <td>${order.price.toFixed(2)}</td>
          <td>${order.total.toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <button onClick={downloadHistory}>Download History</button>
</div>
<Footer />
</div>
);
};

export default TradePage;
