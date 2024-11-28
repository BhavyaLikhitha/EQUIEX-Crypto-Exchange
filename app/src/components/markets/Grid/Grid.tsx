import React from 'react';
import './grid.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
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

interface GridProps {
  coin: Coin;
}

function Grid({ coin }: GridProps): JSX.Element {
  return (
    <Link to={`/coins/${coin.id}`}>
      <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>
        <div className='info-flex'>
          <img src={coin.image} alt={coin.name} className='coin-logo' />
          <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </div>

        {coin.price_change_percentage_24h > 0 ? (
          <div className='chip-flex'>
            <div className='price-chip'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip'>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className='chip-flex'>
            <div className='price-chip chip-red'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip chip-red'>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className='info-container'>
          <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className='total_volume'>Total Volume: ${coin.total_volume.toLocaleString()}</p>
          <p className='market_cap'>Market Cap: ${coin.market_cap.toLocaleString()}</p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
