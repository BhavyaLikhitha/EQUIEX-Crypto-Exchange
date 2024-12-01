import React, { useState, useEffect } from 'react';
import './watchlist.css';
import List from '../markets/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

function Watchlist() {
  const [favoriteCoins, setFavoriteCoins] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');
    setFavoriteCoins(storedFavorites);
  }, []);

  return (
    <>
    <Header/>
    <div className="watchlist-container">
      <ToastContainer />
      <h1>My Watchlist</h1>
      <table className="coin-list">
          <tr className="tr-head">
            <th className="th-coin">Coin</th>
            <th className="th-change">24h Change</th>
            <th className="th-price"></th>
            <th className="th-vol">Total Volume</th>
            <th className="th-mc">Market Cap</th>
          </tr>
      </table>
      <div>
          {favoriteCoins.map((coin) => (
            <List key={coin.id} coin={coin} />
          ))}
        </div>
    </div>
    <Footer/>
    </>
  );
}

export default Watchlist;