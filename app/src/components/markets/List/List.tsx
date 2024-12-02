// import React, { useState, useEffect } from 'react';
// import './list.css';
// import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
// import bitcoin from '../../../assets/bitcoin.png'
// import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
// import { convertNumber } from '../../../functions/ConvertNumbers';
// import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import StarOutlineIcon from '@mui/icons-material/StarOutline';
// import GradeIcon from '@mui/icons-material/Grade';

// // Define an interface for the coin prop
// interface Coin {
//   id: string;
//   image?: string;
//   symbol: string;
//   name: string;
//   price_change_percentage_24h: number;
//   current_price: number;
//   total_volume: number;
//   market_cap: number;
// }

// interface ListProps {
//   coin: Coin;
// }

// function List({ coin }: ListProps): JSX.Element {
//   const [isFavorite, setIsFavorite] = useState<boolean>(false);

//   // Fetch the favorite status from localStorage on initial render
//   useEffect(() => {
//     const favoriteCoins = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');
//     const isCoinFavorite = favoriteCoins.some((favoriteCoin: Coin) => favoriteCoin.id === coin.id);
//     setIsFavorite(isCoinFavorite);
//   }, [coin.id]);

//   const toggleFavorite = (e: React.MouseEvent) => {
//     e.stopPropagation(); // Prevent navigation when clicking the star
//     let favoriteCoins = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');

//     if (isFavorite) {
//       // Remove from favorites
//       favoriteCoins = favoriteCoins.filter((favoriteCoin: Coin) => favoriteCoin.id !== coin.id);
//       toast.error(`${coin.name} removed from watchlist`);
//     } else {
//       // Add to favorites
//       favoriteCoins.push(coin);
//       toast.success(`${coin.name} added to watchlist`);
//     }

//     // Update localStorage and state
//     localStorage.setItem('favoriteCoins', JSON.stringify(favoriteCoins));
//     setIsFavorite(!isFavorite);
//   };
//   return (
//     <tr className='list-row'>
//       <td className="favorite-icon" onClick={toggleFavorite}>
//         {isFavorite ? <GradeIcon style={{ color: 'red' }} /> : <StarOutlineIcon />}
//       </td>
//       <td className='td-image'>
//         <Link to={`/coins/${coin.id}`}>
       
//           <img src={coin.image} alt={coin.name} className='coin-logo' />
//           </Link>
//           {/* <img
//             src={coin.image || '/bitcoin.png'} 
//             alt={coin.name || 'Coin'}
//             className='coin-logo'
//           /> */}
//         </td>
//         <td>
//           <div className='name-col'>
//             <p className='coin-symbol'>{coin.symbol}</p>
//             <p className='coin-name'>{coin.name}</p>
//           </div>
//         </td>

//         {coin.price_change_percentage_24h > 0 ? (
//           <td className='chip-flex'>
//             <div className='price-chip'>
//               {coin.price_change_percentage_24h.toFixed(2)}%
//             </div>
//             <div className='icon-chip td-icon'>
//               <TrendingUpRoundedIcon />
//             </div>
//           </td>
//         ) : (
//           <td className='chip-flex'>
//             <div className='price-chip chip-red'>
//               {coin.price_change_percentage_24h.toFixed(2)}%
//             </div>
//             <div className='icon-chip chip-red td-icon'>
//               <TrendingDownRoundedIcon />
//             </div>
//           </td>
//         )}
//         <td>
//           <h3 className='coin-price td-center' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>
//             ${coin.current_price.toLocaleString()}
//           </h3>
//         </td>
//         <td>
//           <p className='total_volume td-right td-volume'>${coin.total_volume.toLocaleString()}</p>
//         </td>
//         <td className='desktop-td-mkt'>
//           <p className='market_cap td-right td-market'>${coin.market_cap.toLocaleString()}</p>
//         </td>
//         <td className='mobile-td-mkt'>
//           <p className='market_cap td-right td-market'>${convertNumber(coin.market_cap)}</p>
//         </td>
     
   
//     </tr>
//   );
// }

// export default List;

import React, { useState, useEffect } from 'react';
import './list.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from '../../../functions/ConvertNumbers';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import axios from 'axios';

interface Coin {
  id: string;
  image?: string;
  symbol: string;
  name: string;
  price_change_percentage_24h: number;
  current_price: number;
  total_volume: number;
  market_cap: number;
}

interface ListProps {
  coin: Coin;
}

function List({ coin }: ListProps): JSX.Element {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Fetch the favorite status from the backend on initial render
  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('http://localhost:3002/tracker/watchlist');
        const favoriteCoins = response.data;
        const isCoinFavorite = favoriteCoins.some((favoriteCoin: Coin) => favoriteCoin.symbol === coin.symbol);
        setIsFavorite(isCoinFavorite);
      } catch (error) {
        console.error("Failed to fetch watchlist:", error);
      }
    };
    fetchWatchlist();
  }, [coin.symbol]);

  const toggleFavorite = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the star

    try {
      if (isFavorite) {
        // Remove from watchlist (both frontend and backend)
        await axios.delete(`http://localhost:3002/tracker/watchlist/${coin.symbol}`);
        toast.error(`${coin.name} removed from watchlist`);
      } else {
        // Add to watchlist (both frontend and backend)
        await axios.post('http://localhost:3002/tracker/watchlist', {
          symbol: coin.symbol,
          name: coin.name,
          image: coin.image,
          price_change_percentage_24h: coin.price_change_percentage_24h,
          current_price: coin.current_price,
          total_volume: coin.total_volume,
          market_cap: coin.market_cap,
        });
        toast.success(`${coin.name} added to watchlist`,{
          position: "top-right",
          autoClose: 2000, // Set the auto close time here
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      toast.error('Failed to update watchlist',{
        position: "top-right",
        autoClose: 2000, // Set the auto close time here
      });
    }
  };

  return (
    <>
     {/* <ToastContainer position="top-right" autoClose={2000} /> */}
    <tr className='list-row'>
      <td className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <GradeIcon style={{ color: 'red' }} /> : <StarOutlineIcon />}
      </td>
      <td className='td-image'>
        <Link to={`/coins/${coin.id}`}>
          <img src={coin.image || '/bitcoin.png'} alt={coin.name} className='coin-logo' />
        </Link>
      </td>
      <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>

      {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
          <div className='price-chip'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='icon-chip td-icon'>
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className='chip-flex'>
          <div className='price-chip chip-red'>
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className='icon-chip chip-red td-icon'>
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}
      <td>
        <h3 className='coin-price td-center' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <td>
        <p className='total_volume td-right td-volume'>${coin.total_volume.toLocaleString()}</p>
      </td>
      <td className='desktop-td-mkt'>
        <p className='market_cap td-right td-market'>${coin.market_cap.toLocaleString()}</p>
      </td>
      <td className='mobile-td-mkt'>
        <p className='market_cap td-right td-market'>${convertNumber(coin.market_cap)}</p>
      </td>
      
    </tr>
   
    </>
  );
}

export default List;