// import React, { useState, useEffect } from 'react';
// import './watchlist.css';
// import List from '../markets/List/List';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Header from '../common/Header';
// import Footer from '../common/Footer';

// function Watchlist() {
//   const [favoriteCoins, setFavoriteCoins] = useState<any[]>([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');
//     setFavoriteCoins(storedFavorites);
//   }, []);

//   return (
//     <>
//     <Header/>
//     <div className="watchlist-container">
//       <ToastContainer />
//       <h1>My Watchlist</h1>
//       <table className="coin-list">
//           <tr className="tr-head">
//             <th className="th-coin">Coin</th>
//             <th className="th-change">24h Change</th>
//             <th className="th-price"></th>
//             <th className="th-vol">Total Volume</th>
//             <th className="th-mc">Market Cap</th>
//           </tr>
//       </table>
//       <div>
//           {favoriteCoins.map((coin) => (
//             <List key={coin.id} coin={coin} />
//           ))}
//         </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Watchlist;

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
  const [favoriteCoins, setFavoriteCoins] = useState<any[]>([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('http://localhost:3002/tracker/watchlist');
        setFavoriteCoins(response.data);
      } catch (error) {
        console.error("Failed to fetch watchlist:", error);
      }
    };

    fetchWatchlist();
  }, []);

  const removeFromWatchlist = async (symbol: string) => {
    try {
      await axios.delete(`http://localhost:3002/tracker/watchlist/${symbol}`);
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
        <ToastContainer />
        <h1 className='watch-head'>Watchlist</h1>
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
              <List key={coin.symbol} coin={coin} />
            ))}
          </div>
          <ToastContainer position="top-right" autoClose={2000} />
      </div>
      <Footer />
    </>
  );
}

export default Watchlist;