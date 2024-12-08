import React, { useState, useEffect } from 'react';
import './watchlist.css';
import List from '../markets/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

function Watchlist() {
  // State to store the list of favorite coins in the user's watchlist
  const [favoriteCoins, setFavoriteCoins] = useState<any[]>([]);

  // useEffect to fetch the watchlist data when the component mounts
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        // API call to retrieve the user's watchlist from the backend
        const response = await axios.get('http://localhost:3002/tracker/watchlist');
        setFavoriteCoins(response.data);  // Update the state with the list of favorite coins
      } catch (error) {
        console.error("Failed to fetch watchlist:", error);
      }
    };

    fetchWatchlist(); // Call the function to fetch the watchlist data
  }, []);

  const removeFromWatchlist = async (symbol: string) => {
    try {
      // API call to delete the coin from the backend watchlist
      await axios.delete(`http://localhost:3002/tracker/watchlist/${symbol}`);
      // Filter out the removed coin from the list of favorite coins
      setFavoriteCoins(favoriteCoins.filter((coin) => coin.symbol !== symbol));
      toast.error('Coin removed from watchlist');
    } catch (error) {
      toast.error('Failed to remove coin from watchlist');
    }
  };

  return (
    <>
      <Header />
      <div className="watchlist-container">
        <ToastContainer />  {/* Toast notification container for alerts */}
        <h1 className='watch-head'>Watchlist</h1>

        {/* Table header for the list of coins */}
        <table className="coin-list">
            <tr className="tr-head">
              <th className="th-coin">Coin</th>
              <th className="th-change">24h Change</th>  {/* 24-hour price change */}
              <th className="th-price"></th>  {/* Placeholder for current price */}
              <th className="th-vol">Total Volume</th> {/* Total volume of the coin */}
              <th className="th-mc">Market Cap</th> {/* Market capitalization of the coin */}
            </tr>
            </table>

          {/* List of favorite coins */}
          <div>
            {favoriteCoins.map((coin) => (
              // Render each coin using the List component and pass coin as a prop
              <List key={coin.symbol} coin={coin} />
            ))}
          </div>
          <ToastContainer position="top-right" autoClose={2000} />
      </div>
      <Footer /> {/* Renders the Footer component at the bottom of the page */}
    </>
  );
}

export default Watchlist;