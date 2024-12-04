// import React, { useEffect } from 'react';
// import './explore.css';
// import EastRoundedIcon from '@mui/icons-material/EastRounded';
// import trade from '../../../assets/trade.jpg';
// import nft from '../../../assets/nft.jpg';
// import blogs from '../../../assets/blogs.jpg';
// import rewards from '../../../assets/rewards.jpg';

// const Explore: React.FC = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const exploreHeading = document.querySelector('.explore-heading') as HTMLElement;
//       const exploreCards = document.querySelectorAll('.explore-card') as NodeListOf<HTMLElement>;

//       const showElement = (element: HTMLElement) => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight) {
//           element.classList.add('show');
//         }
//       };

//       if (exploreHeading) showElement(exploreHeading);
//       exploreCards.forEach(card => showElement(card));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="explore">
//       <h2 className="explore-heading">
//         Explore <span className="highlight">EquiEx</span> More!
//       </h2>
//       <div className="explore-grid">
//         <div className="explore-card">
//           <div className="explore-text">
//             <h3>Trade</h3>
//             <p>
//               Experience seamless trading with Equiex. Our platform allows you to trade
//               cryptocurrencies, NFTs, and other digital assets with confidence and ease.
//             </p>
//             <div className="learn-more">
//               Learn More <EastRoundedIcon />
//             </div>
//           </div>
//           <div className="explore-image">
//             <img src={trade} alt="Trade" className="assests" />
//           </div>
//         </div>
//         <div className="explore-card">
//           <div className="explore-text">
//             <h3>Blogs</h3>
//             <p>
//               Dive into a wealth of knowledge with our educational blogs. We provide insights, 
//               tips, and tricks for trading, helping you become a more informed investor.
//             </p>
//             <div className="learn-more">
//               Read More <EastRoundedIcon />
//             </div>
//           </div>
//           <div className="explore-image">
//             <img src={blogs} alt="Blogs" className="assests" />
//           </div>
//         </div>
//         <div className="explore-card">
//           <div className="explore-text">
//             <h3>Earn Rewards</h3>
//             <p>
//               Join our rewards program and win exciting prizes! Visit daily or hourly to 
//               collect points and redeem them for gifts or USDT.
//             </p>
//             <div className="learn-more">
//               Start Earning <EastRoundedIcon />
//             </div>
//           </div>
//           <div className="explore-image">
//             <img src={rewards} alt="Rewards" className="assests" />
//           </div>
//         </div>
//         <div className="explore-card">
//           <div className="explore-text">
//             <h3>NFT Marketplace</h3>
//             <p>
//               Explore our exclusive NFT marketplace and discover unique digital collectibles. 
//               Trade, buy, or sell NFTs effortlessly.
//             </p>
//             <div className="learn-more">
//               Explore Now <EastRoundedIcon />
//             </div>
//           </div>
//           <div className="explore-image">
//             <img src={nft} alt="NFT Marketplace" className="assests" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explore;
import React, { useEffect } from 'react';
import './explore.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import trade from '../../../assets/trade.jpg';
import nft from '../../../assets/nft.jpg';
import blogs from '../../../assets/blogs.jpg';
import rewards from '../../../assets/rewards.jpg';
import { useTranslation } from 'react-i18next';

const Explore: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      const exploreHeading = document.querySelector('.explore-heading') as HTMLElement;
      const exploreCards = document.querySelectorAll('.explore-card') as NodeListOf<HTMLElement>;

      const showElement = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('show');
        }
      };

      if (exploreHeading) showElement(exploreHeading);
      exploreCards.forEach(card => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="explore">
      <h2 className="explore-heading">
        {t('explore')} <span className="highlight">{t('equiex')}</span> {t('more')}
      </h2>
      <div className="explore-grid">
        <div className="explore-card">
          <div className="explore-text">
            <h3>{t('tradeHeading')}</h3>
            <p>{t('tradeDescription')}</p>
            <div className="learn-more">
              {t('learnMore')} <EastRoundedIcon />
            </div>
          </div>
          <div className="explore-image">
            <img src={trade} alt={t('tradeAlt')} className="assests" />
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-text">
            <h3>{t('blogsHeading')}</h3>
            <p>{t('blogsDescription')}</p>
            <div className="learn-more">
              {t('readMore')} <EastRoundedIcon />
            </div>
          </div>
          <div className="explore-image">
            <img src={blogs} alt={t('blogsAlt')} className="assests" />
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-text">
            <h3>{t('rewardsHeading')}</h3>
            <p>{t('rewardsDescription')}</p>
            <div className="learn-more">
              {t('startEarning')} <EastRoundedIcon />
            </div>
          </div>
          <div className="explore-image">
            <img src={rewards} alt={t('rewardsAlt')} className="assests" />
          </div>
        </div>
        <div className="explore-card">
          <div className="explore-text">
            <h3>{t('nftHeading')}</h3>
            <p>{t('nftDescription')}</p>
            <div className="learn-more">
              {t('exploreNow')} <EastRoundedIcon />
            </div>
          </div>
          <div className="explore-image">
            <img src={nft} alt={t('nftAlt')} className="assests" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
