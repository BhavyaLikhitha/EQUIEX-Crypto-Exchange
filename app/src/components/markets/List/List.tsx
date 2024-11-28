import React from 'react';
import './list.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from '../../../functions/ConvertNumbers';
import { Link } from 'react-router-dom';

// Define an interface for the coin prop
interface Coin {
  id: string;
  image: string;
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
  return (
    <Link to={`/coins/${coin.id}`}>
      <tr className='list-row'>
        <td className='td-image'>
          <img src={coin.image} alt={coin.name} className='coin-logo' />
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
    </Link>
  );
}

export default List;
