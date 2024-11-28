import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './portfoliopage.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

interface CoinData {
  coinName: string;
  coinId: string;
  amount: number;
  price: number;
  quantity: number;
  total: number;
}

const PortfolioPage: React.FC = () => {
  // Simulate a dynamic balance
  const [balance, setBalance] = useState<number>(50000);

  // Sample data for the table
  const portfolioData: CoinData[] = [
    { coinName: 'Bitcoin', coinId: 'BTC', amount: 1.5, price: 30000, quantity: 1, total: 45000 },
    { coinName: 'Ethereum', coinId: 'ETH', amount: 2, price: 2000, quantity: 1, total: 4000 },
    { coinName: 'Ripple', coinId: 'XRP', amount: 1000, price: 0.5, quantity: 1, total: 500 },
  ];

  // Calculate total balance and prepare data for Pie Chart
  const totalPortfolioValue = portfolioData.reduce((acc, coin) => acc + coin.total, 0);

  const pieChartData = {
    labels: portfolioData.map(coin => coin.coinName),
    datasets: [
      {
        data: portfolioData.map(coin => (coin.total / totalPortfolioValue) * 100),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="portfolio-page">
      <Header />
      <p>Hello Akshay! Welcome to Dashboard!</p>
      <h2>Portfolio</h2>
      <div className="portfolio-overview">
        <div className="balance">
          <span>Total Balance: </span>
          <strong>${balance}</strong>
        </div>
        <div className="pie-chart">
          <Pie data={pieChartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
      </div>
      <table className="portfolio-table">
        <thead>
          <tr>
            <th>Coin Name</th>
            <th>Coin ID</th>
            <th>Amount</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {portfolioData.map((coin, index) => (
            <tr key={index}>
              <td>{coin.coinName}</td>
              <td>{coin.coinId}</td>
              <td>{coin.amount}</td>
              <td>${coin.price}</td>
              <td>{coin.quantity}</td>
              <td>${coin.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
