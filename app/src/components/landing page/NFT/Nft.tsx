// import React, { useEffect, useState } from 'react';
// import './nft.css';
// import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
// import bored from '../../../assets/bored.jpeg';
// import punks from '../../../assets/punks.jpg';
// import patrons from '../../../assets/patron.jpeg';
// import penguin from '../../../assets/penguin.png';

// // Define an interface for the NFT data
// interface Nft {
//   name: string;
//   symbol: string;
//   asset_platform_id: string;
// }

// function Nft(): JSX.Element {
//   const [nfts, setNfts] = useState<Nft[]>([]);

//   // Predefined NFT images for display
//   const nftImages = [punks, bored, penguin, patrons];

//   // Fetch NFT data
//   useEffect(() => {
//     const fetchNftData = async (): Promise<void> => {
//       try {
//         const response = await fetch(
//           'https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=4',
//           {
//             headers: {
//               accept: 'application/json',
//               'x-cg-demo-api-key': 'CG-WLTY1CRGEnYQdQjsj9Ydp1Gd',
//             },
//           }
//         );
//         const data: Nft[] = await response.json();
//         setNfts(data);
//       } catch (error) {
//         console.error('Error fetching NFT data:', error);
//       }
//     };
//     fetchNftData();
//   }, []);

//   // Scroll animation logic
//   useEffect(() => {
//     const handleScroll = (): void => {
//       const exploreHeading = document.querySelector('.nft-heading');
//       const nftCards = document.querySelectorAll('.nft-card');

//       const showElement = (element: Element | null): void => {
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           if (rect.top < window.innerHeight) {
//             element.classList.add('show');
//           }
//         }
//       };

//       showElement(exploreHeading);
//       nftCards.forEach((card) => showElement(card));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="nft-container">
//       <h2 className="nft-heading">
//         Explore <span className="highlight">NFT's</span>
//       </h2>
//       <div className="nft-grid">
//         {nfts.slice(0, 4).map((nft, index) => (
//           <div key={index} className="nft-card">
//             <img src={nftImages[index]} alt={nft.name} className="nft-image" />
//             <h3 className="nft-name">{nft.name}</h3>
//             <p className="nft-symbol">Symbol: {nft.symbol}</p>
//             <p className="nft-platform">Platform: {nft.asset_platform_id}</p>
//           </div>
//         ))}
//       </div>
//       <button className="visit-button">
//         Visit Gallery
//         <ArrowOutwardRoundedIcon className="arrow-icon" />
//       </button>
//     </div>
//   );
// }

// export default Nft;

import React, { useEffect, useState } from 'react';
import './nft.css';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import bored from '../../../assets/bored.jpeg';
import punks from '../../../assets/punks.jpg';
import patrons from '../../../assets/patron.jpeg';
import penguin from '../../../assets/penguin.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

// Interface to define the structure of an NFT object
interface Nft {
  name: string;
  symbol: string;
  asset_platform_id: string; // Platform where the NFT is hosted
}

function Nft(): JSX.Element {
  // Navigation hook to programmatically navigate to another route
  const navigate = useNavigate();

   // State to store the list of NFTs fetched from the API
  const [nfts, setNfts] = useState<Nft[]>([]);
  const { t } = useTranslation();

  // Predefined NFT images for display (assumes these variables hold image URLs or imports)
  const nftImages = [punks, bored, penguin, patrons];

  // Fetch NFT data from the CoinGecko API
  useEffect(() => {
    const fetchNftData = async (): Promise<void> => {
      try {
        // API call to fetch a list of NFTs sorted by market cap
        const response = await fetch(
          'https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=4',
          {
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-WLTY1CRGEnYQdQjsj9Ydp1Gd',
            },
          }
        );

        // Parse the JSON response into an array of NFT objects
        const data: Nft[] = await response.json();
        setNfts(data); // Update the state with the fetched data
      } catch (error) {
        console.error(t('errorFetchingData'), error);
      }
    };

    // Fetch the NFT data when the component mounts
    fetchNftData();
  }, [t]);

  // Effect to handle scroll-based animations
  useEffect(() => {
    const handleScroll = (): void => {
      // Select the heading and all card elements
      const exploreHeading = document.querySelector('.nft-heading');
      const nftCards = document.querySelectorAll('.nft-card');

      // Function to add the 'show' class to elements in the viewport
      const showElement = (element: Element | null): void => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            element.classList.add('show');
          }
        }
      };

      // Apply the animation logic to the heading and each card
      showElement(exploreHeading);
      nftCards.forEach((card) => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nft-container">
      {/* Section heading with translation support */}
      <h2 className="nft-heading">
        {t('explore')} <span className="highlight">{t('nfts')}</span>
      </h2>
      <div className="nft-grid">
        {/* Slice the NFT array to limit display to the first 4 items */}
        {nfts.slice(0, 4).map((nft, index) => (
          <div key={index} className="nft-card">
            {/* NFT image from the predefined image array */}
            <img src={nftImages[index]} alt={nft.name} className="nft-image" />
            <h3 className="nft-name">{nft.name}</h3>
            <p className="nft-symbol">{t('symbol')}: {nft.symbol}</p>
            <p className="nft-platform">{t('platform')}: {nft.asset_platform_id}</p>
          </div>
        ))}
      </div>

      {/* Button to navigate to the NFT gallery page */}
      <button className="visit-button"
      onClick={() => navigate('/nfts')}
      role="button"
      tabIndex={0}>
        {t('visitGallery')}
        <ArrowOutwardRoundedIcon className="arrow-icon" />
      </button>
    </div>
  );
}

export default Nft;
