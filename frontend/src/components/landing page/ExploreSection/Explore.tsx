import React, { useEffect } from 'react';
import './explore.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import trade from '../../../assets/trade.jpg';
import nft from '../../../assets/nft.jpg';
import blogs from '../../../assets/blogs.jpg';
import rewards from '../../../assets/rewards.jpg';
import { useTranslation } from 'react-i18next';
import { Navigate, useNavigate } from 'react-router-dom';


const Explore: React.FC = () => {
   // Use the React Router hook to navigate between pages
  const navigate = useNavigate();

  // Use the translation hook for multi-language support
  const { t } = useTranslation();

  useEffect(() => {
    // Scroll event handler to trigger animations when elements are in the viewport
    const handleScroll = () => {
      const exploreHeading = document.querySelector('.explore-heading') as HTMLElement;
      const exploreCards = document.querySelectorAll('.explore-card') as NodeListOf<HTMLElement>;

      // Function to add the "show" class to elements within the viewport
      const showElement = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('show'); // Adds animation-related styles
        }
      };

      // Adds animation-related styles
      if (exploreHeading) showElement(exploreHeading);
      // Apply the animation to each card in the grid
      exploreCards.forEach(card => showElement(card));
    };

    window.addEventListener('scroll', handleScroll);  // Function to handle navigation to a specific path
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

   // Function to handle navigation to a specific path
  const handleNavigation = (path: string) => {
    navigate(path);
  };

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
            <div className="learn-more"
            onClick={() => navigate('/trade/bitcoin')}
              role="button"
              tabIndex={0}
              >
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
            <div className="learn-more"
              onClick={() => navigate('/blogs')}
              role="button"
              tabIndex={0}
              >
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
            <div className="learn-more" onClick={() => handleNavigation('/rewards')}
              role="button"
              tabIndex={0}>
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
            <div className="learn-more" onClick={() => handleNavigation('/nft')}
              role="button"
              tabIndex={0}>
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
