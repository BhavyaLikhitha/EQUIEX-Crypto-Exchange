import React, { useEffect } from 'react';
import './desc.css';
import secureImg from '../../../assets/secure.jpg';
import easyImg from '../../../assets/easy.jpg';
import blogImg from '../../../assets/education.jpg';
import { useTranslation } from 'react-i18next';

const Desc: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      // Select the heading element and the boxes for scroll-based animation
      const descHeading = document.querySelector('.desc-heading') as HTMLElement;
      const descBoxes = document.querySelectorAll('.desc-boxes') as NodeListOf<HTMLElement>;

      // Function to add the "show" class if the element is in the viewport
      const showElement = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('show'); // Adds the "show" class to trigger animations or styles
        }
      };

       // Check and apply animation for the heading element
      if (descHeading) showElement(descHeading);

      // Check and apply animation for each box in the descBoxes list
      descBoxes.forEach(box => showElement(box));
    };

    // Add a scroll event listener to trigger animations
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="desc-container">
      <h2 className="desc-heading">
        {t('why')} <span className="highlight">{t('equiex')}</span>
      </h2>
      <div className="desc-boxes">
        <div className="desc-box">
          <div className="image-wrapper">
            <img src={secureImg} alt={t('secureAlt')} className="desc-image" />
          </div>
          <h3 className="box-heading">{t('secureHeading')}</h3>
          <p className="desc-text">{t('secureDescription')}</p>
        </div>
        <div className="desc-box">
          <div className="image-wrapper">
            <img src={easyImg} alt={t('easyAlt')} className="desc-image" />
          </div>
          <h3 className="box-heading">{t('easyHeading')}</h3>
          <p className="desc-text">{t('easyDescription')}</p>
        </div>
        <div className="desc-box">
          <div className="image-wrapper">
            <img src={blogImg} alt={t('blogsAlt')} className="desc-image" />
          </div>
          <h3 className="box-heading">{t('blogsHeading')}</h3>
          <p className="desc-text">{t('blogsDescription')}</p>
        </div>
      </div>
      {/* CTA Button */}
      <button className="get-started-button">{t('getStarted')}</button>
    </div>
  );
};

export default Desc;
