import React, { useEffect, useState } from 'react';
import './markets.css';
import axios, { AxiosResponse } from 'axios';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { useNavigate } from "react-router-dom";

// Define an interface for the coin data
interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function Markets(): JSX.Element {
  const [coins, setCoins] = useState<Coin[]>([]);
  const navigate = useNavigate();

  // Fetch data from CoinGecko API
  useEffect(() => {
    const fetchCoinData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<Coin[]> = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,tether,solana,binancecoin,ripple,dogecoin,cardano',
              order: 'market_cap_desc',
              per_page: 8,
            },
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-WLTY1CRGEnYQdQjsj9Ydp1Gd',
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error('Error fetching coin data:', error);
      }
    };
    fetchCoinData();
  }, []);

  // Scroll animation logic
  useEffect(() => {
    const handleScroll = (): void => {
      const exploreHeading = document.querySelector('.markets-heading');
      const exploreCards = document.querySelectorAll('.markets-card');

      const showElement = (element: Element | null): void => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            element.classList.add('show');
          }
        }
      };

      showElement(exploreHeading);
      exploreCards.forEach((card) => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="markets">
      <h2 className="markets-heading">
        Market Trends<span className="highlight"> Today</span>
      </h2>
      <div className="markets-grid">
        {coins.map((coin) => (
          <div className="markets-card" key={coin.id}>
            <img src={coin.image} alt={coin.name} className="coin-image" />
            <h3 className="coin-name">{coin.name}</h3>
            <p className="coin-price">${coin.current_price.toFixed(2)}</p>
            <div
              className={`coin-change ${
                coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
              }`}
            >
              {coin.price_change_percentage_24h >= 0 ? (
                <TrendingUpRoundedIcon className="change-icon" />
              ) : (
                <TrendingDownRoundedIcon className="change-icon" />
              )}
              <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>
      <button
        className="get-started-button"
        onClick={() => navigate("/markets")}
      >
        See More
      </button>
    </div>
  );
}

export default Markets;
