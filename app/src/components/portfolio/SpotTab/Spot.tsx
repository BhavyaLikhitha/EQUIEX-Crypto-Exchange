import React, { useState, useEffect } from 'react';
import './spot.css';

const SpotPage: React.FC = () => {
  const walletAddress = '0xc744bc7bdbae39ad2d372df6abaf974d81e4914d';
  const [portfolio, setPortfolio] = useState<any[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const response = await fetch(`http://localhost:3002/portfolio/fetch-portfolio?walletAddress=${walletAddress}`);
      const data = await response.json();
      setPortfolio(data.data.portfolio);
      setTotalValue(data.data.totalValue);
    } catch (error) {
      console.error('Error fetching portfolio:', error);
    }
  };

  return (
    <div className="spot-page">
      <h1>Spot Account</h1>
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
          {portfolio.length > 0 ? (
            portfolio.map((coin, index) => (
              <tr key={index}>
                <td>
                  <img src={coin.imageUrl} alt={coin.coinName} className="coin-image" />
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
    </div>
  );
};

export default SpotPage;
