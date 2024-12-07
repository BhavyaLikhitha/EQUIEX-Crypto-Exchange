// import React, { useState, useEffect } from 'react';
// import './spot.css';
// import bitcoin from '../../../assets/bitcoin.png';

// const SpotPage: React.FC = () => {
//   const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';
//   const [portfolio, setPortfolio] = useState<any[]>([]);
//   const [totalValue, setTotalValue] = useState<number>(0);

//   useEffect(() => {
//     fetchPortfolio();
//   }, []);

//   const fetchPortfolio = async () => {
//     try {
//       const response = await fetch(`http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`);
//       const data = await response.json();
//       setPortfolio(data.data.portfolio);
//       setTotalValue(data.data.totalValue);
//     } catch (error) {
//       console.error('Error fetching portfolio:', error);
//     }
//   };

//   return (
//     <div className="spot-page">
//       <div className='head'><h1 className='welcome'>My <span className='porti'>Portfolio</span></h1></div>
//       <h2>Total Value: ${totalValue.toFixed(2)}</h2>
//       <table className="portfolio-table">
//         <thead>
//           <tr>
//             <th>Coin Image</th>
//             <th>Coin Name</th>
//             <th>Quantity (BTC)</th>
//             <th>Current Price (USD)</th>
//             <th>Value (USD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {portfolio.length > 0 ? (
//             portfolio.map((coin, index) => (
//               <tr key={index}>
//                 <td>
//                   {/* <img src={coin.imageUrl} alt={coin.coinName} className="coin-image" /> */}
//                   <img src={bitcoin} alt={coin.name} className='coin-logo' />
//                 </td>
               
//                 <td>{coin.coinName}</td>
//                 <td>{coin.quantity.toFixed(6)}</td>
//                 <td>${coin.price.toFixed(2)}</td>
//                 <td>${coin.value.toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6}>No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SpotPage;

// import React, { useState, useEffect } from 'react';
// import './spot.css';
// import bitcoin from '../../../assets/bitcoin.png';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import xrp from '../../../assets/xrp.jpg';
// import sol from '../../../assets/sol.jpg';
// import bnb from '../../../assets/bnb.png';
// import eth from '../../../assets/eth.jpg';
// import img from '../../../assets/image.png'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const SpotPage: React.FC = () => {
//   const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';
//   const [portfolio, setPortfolio] = useState<any[]>([]);
//   const [totalValue, setTotalValue] = useState<number>(0);

//   // Dummy data to add along with the fetched portfolio
//   const additionalCoins = [
//     { coinName: 'Ethereum', quantity: 0.02, price: 3500, value: 70, imageUrl: eth, },
//     { coinName: 'XRP', quantity: 10, price: 2.8, value: 28, imageUrl: xrp, },
//     { coinName: 'Solana', quantity: 0.05, price: 225.02, value: 11.3, imageUrl: img, },
//     { coinName: 'BNB', quantity: 0.03, price: 650.04, value: 20.15, imageUrl: bnb, },
//   ];

//   // Combine backend data and additional dummy data
//   const allPortfolio = [...portfolio, ...additionalCoins];

//   useEffect(() => {
//     fetchPortfolio();
//   }, []);

//   const fetchPortfolio = async () => {
//     try {
//       const response = await fetch(`http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`);
//       const data = await response.json();
//       setPortfolio(data.data.portfolio);
//       setTotalValue(data.data.totalValue);
//     } catch (error) {
//       console.error('Error fetching portfolio:', error);
//     }
//   };

//   // Bar chart data and options
//   const chartData = {
//     labels: allPortfolio.map(coin => coin.coinName), // Labels for each coin
//     datasets: [
//       {
//         label: 'Coin Value in USD',
//         data: allPortfolio.map(coin => coin.value), // Data for each coin's value
//         backgroundColor: '#cb6ce6', // Color for bars
//         borderColor: '#cb6ce6', // Border color for bars
//         borderWidth: 0.5,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//   };

//   return (
//     <div className="spot-page">
//       <div className='head'>
//         <h1 className='welcome'>My <span className='porti'>Portfolio</span></h1>
//       </div>
//       <h2>Total Value: ${totalValue.toFixed(2)}</h2>

//       <table className="portfolio-table">
//         <thead>
//           <tr>
//             <th>Coin Image</th>
//             <th>Coin Name</th>
//             <th>Quantity (BTC)</th>
//             <th>Current Price (USD)</th>
//             <th>Value (USD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allPortfolio.length > 0 ? (
//             allPortfolio.map((coin, index) => (
//               <tr key={index}>
//                 <td>
//                   {/* Image for each coin */}
//                   <img src={coin.imageUrl || bitcoin} alt={coin.coinName} className='coin-logo' />
//                 </td>
//                 <td>{coin.coinName}</td>
//                 <td>{coin.quantity.toFixed(6)}</td>
//                 <td>${coin.price.toFixed(2)}</td>
//                 <td>${coin.value.toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6}>No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {/* Bar Graph */}
//       <div className="bar-graph">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default SpotPage;
// import React, { useState, useEffect } from 'react';
// import './spot.css';
// import bitcoin from '../../../assets/bitcoin.png';
// import { Bar } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
// import xrp from '../../../assets/xrp.jpg';
// import sol from '../../../assets/sol.jpg';
// import bnb from '../../../assets/bnb.png';
// import eth from '../../../assets/eth.jpg';
// import img from '../../../assets/image.png'

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const SpotPage: React.FC = () => {
//   const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';
//   const [portfolio, setPortfolio] = useState<any[]>([]);
//   const [totalValue, setTotalValue] = useState<number>(0);

//   // Dummy data to add along with the fetched portfolio
//   const additionalCoins = [
//     { coinName: 'Ethereum', quantity: 0.02, price: 3500, value: 70, imageUrl: eth, },
//     { coinName: 'XRP', quantity: 10, price: 2.8, value: 28, imageUrl: xrp, },
//     { coinName: 'Solana', quantity: 0.05, price: 225.02, value: 11.3, imageUrl: img, },
//     { coinName: 'BNB', quantity: 0.03, price: 650.04, value: 20.15, imageUrl: bnb, },
//   ];

//   // Combine backend data and additional dummy data
//   const allPortfolio = [...portfolio, ...additionalCoins];

//   useEffect(() => {
//     fetchPortfolio();
//   }, []);

//   const fetchPortfolio = async () => {
//     try {
//       const response = await fetch(`http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`);
//       const data = await response.json();
//       setPortfolio(data.data.portfolio);
//       setTotalValue(data.data.totalValue);
//     } catch (error) {
//       console.error('Error fetching portfolio:', error);
//     }
//   };

//   // Generate light colors for each coin (you can choose any light colors you prefer)
//   const barColors = [
//     '#cb6ce6',
//     '#F4A300', // Ethereum - Orange
//     '#6C5B7B', // XRP - Purple
//     '#F7B7A3', // Solana - Light Pink
//     '#FFABAB', // BNB - Yellow (changed color for BNB)
//   ];

//   // Bar chart data and options
//   const chartData = {
//     labels: allPortfolio.map(coin => coin.coinName), // Labels for each coin
//     datasets: [
//       {
//         label: 'Coin Value in USD',
//         data: allPortfolio.map(coin => coin.value), // Data for each coin's value
//         backgroundColor: barColors, // Apply the different colors for each bar
//         borderColor: barColors, // Border color for bars
//         borderWidth: 0.5,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Coins', // X-axis label
//         },
//         ticks: {
//           font: {
//             size: 12, // Adjust font size for x-axis ticks
//           },
//         },
//       },
//       y: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Value in USD', // Y-axis label
//         },
//         ticks: {
//           font: {
//             size: 12, // Adjust font size for y-axis ticks
//           },
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         position: 'right' as const, // Position the legend to the right side
//         labels: {
//           generateLabels: (chart:any) => {
//             const labels = chart.data.labels.map((label:any, index:any) => {
//               return {
//                 text: label, // The name of the coin
//                 fillStyle: barColors[index], // Set the color for each coin
                
//               };
//             });
//             return labels;
//           },
//         },
//         padding: 20,
//       },
//     },
//   };

//   return (
//     <div className="spot-page">
//       <div className='head'>
//         <h1 className='welcome'>My <span className='porti'>Portfolio</span></h1>
//       </div>
//       <h2>Total Value: ${totalValue.toFixed(2)}</h2>

//       <table className="portfolio-table">
//         <thead>
//           <tr>
//             <th>Coin Image</th>
//             <th>Coin Name</th>
//             <th>Quantity (BTC)</th>
//             <th>Current Price (USD)</th>
//             <th>Value (USD)</th>
//           </tr>
//         </thead>
//         <tbody>
//           {allPortfolio.length > 0 ? (
//             allPortfolio.map((coin, index) => (
//               <tr key={index}>
//                 <td>
//                   {/* Image for each coin */}
//                   <img src={coin.imageUrl || bitcoin} alt={coin.coinName} className='coin-logo' />
//                 </td>
//                 <td>{coin.coinName}</td>
//                 <td>{coin.quantity.toFixed(6)}</td>
//                 <td>${coin.price.toFixed(2)}</td>
//                 <td>${coin.value.toFixed(2)}</td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan={6}>No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Bar Graph */}
//       <div className="bar-graph">
//         <Bar data={chartData} options={chartOptions} />
//       </div>
//     </div>
//   );
// };

// export default SpotPage;

import React, { useState, useEffect } from 'react';
import './spot.css';
import bitcoin from '../../../assets/bitcoin.png';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import xrp from '../../../assets/xrp.jpg';
import sol from '../../../assets/sol.jpg';
import bnb from '../../../assets/bnb.png';
import eth from '../../../assets/eth.jpg';
import img from '../../../assets/image.png';

// Register necessary Chart.js components for bar chart
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SpotPage: React.FC = () => {
  // Define the wallet address for fetching portfolio data
  const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';

  // State to hold the user's portfolio and total value
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  const additionalCoins = [
    { coinName: 'Ethereum', quantity: 0.02, price: 3500, value: 70, imageUrl: eth },
    { coinName: 'XRP', quantity: 10, price: 2.8, value: 28, imageUrl: xrp },
    { coinName: 'Solana', quantity: 0.05, price: 225.02, value: 11.3, imageUrl: img },
    { coinName: 'BNB', quantity: 0.03, price: 650.04, value: 20.15, imageUrl: bnb },
  ];

  // Combine portfolio data with additional coins
  const allPortfolio = [...portfolio, ...additionalCoins];
 
  // Fetch portfolio data from the API
  useEffect(() => {
    fetchPortfolio();
  }, []);

  // Recalculate total value whenever portfolio data changes
  useEffect(() => {
    // Calculate the total value dynamically
    const calculateTotalValue = () => {
      const total = allPortfolio.reduce((sum, coin) => sum + coin.value, 0);
      setTotalValue(total);
    };

    calculateTotalValue();
  }, [portfolio]);

  // Function to fetch portfolio data from the backend API
  const fetchPortfolio = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`
      );
      const data = await response.json();
      setPortfolio(data.data.portfolio);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  };

  // Bar chart colors for different coins
  const barColors = ['#cb6ce6', '#F4A300', '#6C5B7B', '#F7B7A3', '#FFABAB'];

  // Chart data including labels (coin names) and dataset (coin values)
  const chartData = {
    labels: allPortfolio.map((coin) => coin.coinName),
    datasets: [
      {
        label: 'Coin Value in USD',
        data: allPortfolio.map((coin) => coin.value),
        backgroundColor: barColors,
        borderColor: barColors,
        borderWidth: 0.5,
      },
    ],
  };


  // Chart options for customizing the chart's look and behavior
  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Coins',
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value in USD',
        },
        ticks: {
          font: {
            size: 16,
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          generateLabels: (chart: any) => {
            // Customize legend labels based on chart data
            const labels = chart.data.labels.map((label: any, index: any) => {
              return {
                text: label,
                fillStyle: barColors[index], // Set the legend color based on the bar color
              };
            });
            return labels;
          },
        },
        padding: 20,
      },
    },
  };

  return (
    <div className="spot-page">
       {/* Header Section */}
      <div className="head">
        <h1 className="welcome">
          My <span className="porti">Portfolio</span>
        </h1>
      </div>


      {/* Display total value of the portfolio */}
      <h2>Total Value: ${totalValue.toFixed(2)}</h2>

      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Coin Image</th>
            <th>Coin Name</th>
            <th>Quantity (BTC)</th>
            <th>Current Price (USD)</th>
            <th>Value (USD)</th>
          </tr>
        </thead>
        <tbody>
           {/* Render portfolio coins */}
          {allPortfolio.length > 0 ? (
            allPortfolio.map((coin, index) => (
              <tr key={index}>
                <td>
                  <img src={coin.imageUrl || bitcoin} alt={coin.coinName} className="coin-logo" />
                </td>
                <td>{coin.coinName}</td>
                <td>{coin.quantity.toFixed(6)}</td>
                <td>${coin.price.toFixed(2)}</td>
                <td>${coin.value.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Bar Chart Section */}
      <div className="bar-graph">
        <Bar data={chartData} options={chartOptions} />  {/* Render the bar chart */}
      </div>
    </div>
  );
};

export default SpotPage;