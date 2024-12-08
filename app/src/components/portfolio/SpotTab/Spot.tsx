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