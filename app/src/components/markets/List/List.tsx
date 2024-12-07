import React, { useEffect } from 'react';
import './list.css';
import { useAppDispatch, useAppSelector } from '../../../store/hook';
import { fetchWatchlist, toggleWatchlist } from '../../../store/slices/watchlistSlice';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from '../../../functions/ConvertNumbers';

// Interface to define the structure of a Coin object
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

// Interface to define the props structure for the List component
interface ListProps {
  coin: Coin;
}

function List({ coin }: ListProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { watchlist } = useAppSelector((state) => state.watchlist); // Access watchlist state from Redux

  // Check if the coin is already in the watchlist
  const isFavorite = watchlist.some((item) => item.symbol === coin.symbol);

  // Fetch the watchlist data when the component mounts
  useEffect(() => {
    dispatch(fetchWatchlist());
  }, [dispatch]);


  // Handle adding/removing a coin from the watchlist
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event propagation to parent elements
    dispatch(toggleWatchlist(coin))
      .unwrap()
      .then(({ action }) => {
        const message =
          action === 'added'
            ? `${coin.name} added to watchlist`
            : `${coin.name} removed from watchlist`;
        toast.success(message, { position: 'top-right', autoClose: 2000 });
      })
      .catch((error) => {
        toast.error(error || 'Failed to update watchlist', { position: 'top-right', autoClose: 2000 });
      });
  };

  return (
    <tr className='list-row'>
      {/* Favorite icon for toggling watchlist status */}
      <td className="favorite-icon" onClick={toggleFavorite}>
        {isFavorite ? <GradeIcon style={{ color: 'red' }} /> : <StarOutlineIcon />}
      </td>

       {/* Coin image and link to detailed page */}
      <td className='td-image'>
        <Link to={`/coins/${coin.id}`}>
          <img src={coin.image || '/bitcoin.png'} alt={coin.name} className='coin-logo' />
        </Link>
      </td>
      {/* Coin name and symbol */}
      <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>

      {/* Price change percentage with respective icons for positive/negative change */}
      {coin.price_change_percentage_24h > 0 ? (
        <td className='chip-flex'>
          <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip td-icon'>
            <TrendingUpRoundedIcon />
          </div>
        </td>
      ) : (
        <td className='chip-flex'>
          <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
          <div className='icon-chip chip-red td-icon'>
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )}

      {/* Current price with color indicating price trend */}
      <td>
        <h3 className='coin-price td-center' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>
          ${coin.current_price.toLocaleString()}
        </h3>
      </td>
      <td>
        <p className='total_volume td-right td-volume'>${coin.total_volume.toLocaleString()}</p>
      </td>
      
       {/* Market cap displayed in full for desktop */}
      <td className='desktop-td-mkt'>
        <p className='market_cap td-right td-market'>${coin.market_cap.toLocaleString()}</p>
      </td>

      {/* Abbreviated market cap for mobile view */}
      <td className='mobile-td-mkt'>
        <p className='market_cap td-right td-market'>${convertNumber(coin.market_cap)}</p>
      </td>
    </tr>
  );
}

export default List;
