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

// Define an interface for the NFT data
interface Nft {
  name: string;
  symbol: string;
  asset_platform_id: string;
}

function Nft(): JSX.Element {
  const navigate = useNavigate();
  const [nfts, setNfts] = useState<Nft[]>([]);
  const { t } = useTranslation();

  // Predefined NFT images for display
  const nftImages = [punks, bored, penguin, patrons];

  // Fetch NFT data
  useEffect(() => {
    const fetchNftData = async (): Promise<void> => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_desc&per_page=4',
          {
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-WLTY1CRGEnYQdQjsj9Ydp1Gd',
            },
          }
        );
        const data: Nft[] = await response.json();
        setNfts(data);
      } catch (error) {
        console.error(t('errorFetchingData'), error);
      }
    };
    fetchNftData();
  }, [t]);

  // Scroll animation logic
  useEffect(() => {
    const handleScroll = (): void => {
      const exploreHeading = document.querySelector('.nft-heading');
      const nftCards = document.querySelectorAll('.nft-card');

      const showElement = (element: Element | null): void => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            element.classList.add('show');
          }
        }
      };

      showElement(exploreHeading);
      nftCards.forEach((card) => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="nft-container">
      <h2 className="nft-heading">
        {t('explore')} <span className="highlight">{t('nfts')}</span>
      </h2>
      <div className="nft-grid">
        {nfts.slice(0, 4).map((nft, index) => (
          <div key={index} className="nft-card">
            <img src={nftImages[index]} alt={nft.name} className="nft-image" />
            <h3 className="nft-name">{nft.name}</h3>
            <p className="nft-symbol">{t('symbol')}: {nft.symbol}</p>
            <p className="nft-platform">{t('platform')}: {nft.asset_platform_id}</p>
          </div>
        ))}
      </div>
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
