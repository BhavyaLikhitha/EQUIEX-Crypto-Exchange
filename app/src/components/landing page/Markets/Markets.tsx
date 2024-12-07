// import React, { useEffect, useState } from 'react';
// import './markets.css';
// import axios, { AxiosResponse } from 'axios';
// import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
// import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
// import { useNavigate } from "react-router-dom";

// // Define an interface for the coin data
// interface Coin {
//   id: string;
//   name: string;
//   image: string;
//   current_price: number;
//   price_change_percentage_24h: number;
// }

// function Markets(): JSX.Element {
//   const [coins, setCoins] = useState<Coin[]>([]);
//   const navigate = useNavigate();

//   // Fetch data from CoinGecko API
//   useEffect(() => {
//     const fetchCoinData = async (): Promise<void> => {
//       try {
//         const response: AxiosResponse<Coin[]> = await axios.get(
//           'https://api.coingecko.com/api/v3/coins/markets',
//           {
//             params: {
//               vs_currency: 'usd',
//               ids: 'bitcoin,ethereum,tether,solana,binancecoin,ripple,dogecoin,cardano',
//               order: 'market_cap_desc',
//               per_page: 8,
//             },
//             headers: {
//               accept: 'application/json',
//               'x-cg-demo-api-key': 'CG-WLTY1CRGEnYQdQjsj9Ydp1Gd',
//             },
//           }
//         );
//         setCoins(response.data);
//       } catch (error) {
//         console.error('Error fetching coin data:', error);
//       }
//     };
//     fetchCoinData();
//   }, []);

//   // Scroll animation logic
//   useEffect(() => {
//     const handleScroll = (): void => {
//       const exploreHeading = document.querySelector('.markets-heading');
//       const exploreCards = document.querySelectorAll('.markets-card');

//       const showElement = (element: Element | null): void => {
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top < window.innerHeight) {
//             element.classList.add('show');
//           }
//         }
//       };

//       showElement(exploreHeading);
//       exploreCards.forEach((card) => showElement(card));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="markets">
//       <h2 className="markets-heading">
//         Market Trends<span className="highlight"> Today</span>
//       </h2>
//       <div className="markets-grid">
//         {coins.map((coin) => (
//           <div className="markets-card" key={coin.id}>
//             <img src={coin.image} alt={coin.name} className="coins-image" />
//             <h3 className="coin-name">{coin.name}</h3>
//             <p className="coin-price">${coin.current_price.toFixed(2)}</p>
//             <div
//               className={`coin-change ${
//                 coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
//               }`}
//             >
//               {coin.price_change_percentage_24h >= 0 ? (
//                 <TrendingUpRoundedIcon className="change-icon" />
//               ) : (
//                 <TrendingDownRoundedIcon className="change-icon" />
//               )}
//               <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button
//         className="get-started-button"
//         onClick={() => navigate("/markets")}
//       >
//         See More
//       </button>
//     </div>
//   );
// }

// export default Markets;
import React, { useEffect, useState } from 'react';
import './markets.css';
import axios, { AxiosResponse } from 'axios';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Interface to define the structure of a cryptocurrency object
interface Coin {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
}

function Markets(): JSX.Element {
   // State to store the list of coins fetched from the API
  const [coins, setCoins] = useState<Coin[]>([]);

  // Navigation hook to programmatically navigate between routes
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Effect to fetch cryptocurrency data from the CoinGecko API
  useEffect(() => {
    const fetchCoinData = async (): Promise<void> => {
      try {
        // API call to get market data for selected cryptocurrencies
        const response: AxiosResponse<Coin[]> = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd', // Currency in which prices are displayed
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
        // Update state with the fetched data
        setCoins(response.data);
      } catch (error) {
        console.error(t("errorFetchingData"), error);
      }
    };

    // Call the fetch function on component mount
    fetchCoinData(); 
  }, [t]); // Dependency array includes `t` to ensure translations are updated

  // Effect to add scroll animation for UI elements
  useEffect(() => {
    const handleScroll = (): void => {
      const exploreHeading = document.querySelector('.markets-heading');
      const exploreCards = document.querySelectorAll('.markets-card');

       // Function to add 'show' class if the element is in the viewport
      const showElement = (element: Element | null): void => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            element.classList.add('show');
          }
        }
      };

      // Trigger animation for the heading and each card
      showElement(exploreHeading);
      exploreCards.forEach((card) => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="markets">
      <h2 className="markets-heading">
        {t("marketTrends")}<span className="highlight"> {t("today")}</span>
      </h2>
      {/* Grid to display cryptocurrency cards */}
      <div className="markets-grid">
        {/* Map through the coins array and render each coin */}
        {coins.map((coin) => (
          <div className="markets-card" key={coin.id}>
            <img src={coin.image} alt={coin.name} className="coins-image" />
            <h3 className="coin-name">{coin.name}</h3>

             {/* Current price formatted to 2 decimal places */}
            <p className="coin-price">${coin.current_price.toFixed(2)}</p>

            {/* Price change percentage with conditional styling */}
            <div
              className={`coin-change ${
                coin.price_change_percentage_24h >= 0 ? "positive" : "negative"
              }`}
            >
              {/* Display up or down arrow based on the price change */}
              {coin.price_change_percentage_24h >= 0 ? (
                <TrendingUpRoundedIcon className="change-icon" />
              ) : (
                <TrendingDownRoundedIcon className="change-icon" />
              )}
              {/* Percentage change formatted to 2 decimal places */}
              <span>{coin.price_change_percentage_24h.toFixed(2)}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Button to navigate to the detailed markets page */}
      <button
        className="get-started-button"
        onClick={() => navigate("/markets")}
      >
        {t("seeMore")}
      </button>
    </div>
  );
}

export default Markets;
