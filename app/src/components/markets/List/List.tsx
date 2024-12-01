import React, { useState, useEffect } from 'react';
import './list.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import bitcoin from '../../../assets/bitcoin.png'
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from '../../../functions/ConvertNumbers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';

// Define an interface for the coin prop
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

  // Fetch the favorite status from localStorage on initial render
  useEffect(() => {
    const favoriteCoins = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');
    const isCoinFavorite = favoriteCoins.some((favoriteCoin: Coin) => favoriteCoin.id === coin.id);
    setIsFavorite(isCoinFavorite);
  }, [coin.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation when clicking the star
    let favoriteCoins = JSON.parse(localStorage.getItem('favoriteCoins') || '[]');

    if (isFavorite) {
      // Remove from favorites
      favoriteCoins = favoriteCoins.filter((favoriteCoin: Coin) => favoriteCoin.id !== coin.id);
      toast.error(`${coin.name} removed from watchlist`);
    } else {
      // Add to favorites
      favoriteCoins.push(coin);
      toast.success(`${coin.name} added to watchlist`);
    }

    // Update localStorage and state
    localStorage.setItem('favoriteCoins', JSON.stringify(favoriteCoins));
    setIsFavorite(!isFavorite);
  };
  return (
    <tr className='list-row'>
      <td className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <GradeIcon style={{ color: 'red' }} /> : <StarOutlineIcon />}
      </td>
      <td className='td-image'>
        <Link to={`/coins/${coin.id}`}>
       
          <img src={coin.image} alt={coin.name} className='coin-logo' />
          </Link>
          {/* <img
            src={coin.image || '/bitcoin.png'} 
            alt={coin.name || 'Coin'}
            className='coin-logo'
          /> */}
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
  );
}

export default List;