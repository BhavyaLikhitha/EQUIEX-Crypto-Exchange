import React from 'react';
import './grid.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from 'react-router-dom';

// Interface to define the structure of a Coin object
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

// Interface to define the props structure for the Grid component
interface GridProps {
  coin: Coin;
}

function Grid({ coin }: GridProps): JSX.Element {
  return (
    // Link wraps the grid container to navigate to a detailed page for the coin
    <Link to={`/coins/${coin.id}`}>
      <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}>

        {/* Top section containing coin image and name */}
        <div className='info-flex'>
          <img src={coin.image} alt={coin.name} className='coin-logo' />
          <div className='name-col'>
            <p className='coin-symbol'>{coin.symbol}</p>
            <p className='coin-name'>{coin.name}</p>
          </div>
        </div>

         {/* Price change percentage with corresponding icon */}
        {coin.price_change_percentage_24h > 0 ? (
          <div className='chip-flex'>
            {/* Green price change percentage for positive change */}
            <div className='price-chip'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip'>
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className='chip-flex'>
            {/* Red price change percentage for negative change */}
            <div className='price-chip chip-red'>
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className='icon-chip chip-red'>
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}

        {/* Coin price, total volume, and market cap */}
        <div className='info-container'>
          <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)" }}>
            ${coin.current_price.toLocaleString()}
          </h3>
           {/* Display total trading volume */}
          <p className='total_volume'>Total Volume: ${coin.total_volume.toLocaleString()}</p>
          {/* Display market capitalization */}
          <p className='market_cap'>Market Cap: ${coin.market_cap.toLocaleString()}</p>  
        </div>
      </div>
    </Link>
  );
}

export default Grid;
