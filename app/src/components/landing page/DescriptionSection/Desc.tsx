// import React, { useEffect } from 'react';
// import './desc.css';
// import secureImg from '../../../assets/secure.jpg';
// import easyImg from '../../../assets/easy.jpg';
// import blogImg from '../../../assets/education.jpg';

// const Desc: React.FC = () => {
//   useEffect(() => {
//     // Added this block for scroll event handling
//     const handleScroll = () => {
//       const descHeading = document.querySelector('.desc-heading') as HTMLElement;
//       const descBoxes = document.querySelectorAll('.desc-boxes') as NodeListOf<HTMLElement>;

//       const showElement = (element: HTMLElement) => {
//         const rect = element.getBoundingClientRect();
//         if (rect.top < window.innerHeight) {
//           element.classList.add('show');
//         }
//       };

//       if (descHeading) showElement(descHeading);
//       descBoxes.forEach(box => showElement(box));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="desc-container">
//       <h2 className="desc-heading">
//         Why <span className="highlight">EquiEx?</span>
//       </h2>
//       <div className="desc-boxes">
//         <div className="desc-box">
//           <div className="image-wrapper">
//             <img src={secureImg} alt="Secure" className="desc-image" />
//           </div>
//           <h3 className="box-heading">Secure</h3>
//           <p className="desc-text">
//             Protect your digital money with our secure and reliable system.
//             Your assets are safeguarded by top-notch encryption and multi-layered authentication.
//           </p>
//         </div>
//         <div className="desc-box">
//           <div className="image-wrapper">
//             <img src={easyImg} alt="Easy to Use" className="desc-image" />
//           </div>
//           <h3 className="box-heading">Easy to Use</h3>
//           <p className="desc-text">
//             Effortlessly buy, sell, trade, and manage your crypto - all in one place.
//             With an intuitive interface, even beginners can navigate with ease.
//           </p>
//         </div>
//         <div className="desc-box">
//           <div className="image-wrapper">
//             <img src={blogImg} alt="Educational Blogs" className="desc-image" />
//           </div>
//           <h3 className="box-heading">Educational Blogs</h3>
//           <p className="desc-text">
//             New to the world of crypto? Our academy offers all the resources you need to get started,
//             from beginner guides to expert insights for seasoned traders.
//           </p>
//         </div>
//       </div>
//       <button className="get-started-button">Get Started</button>
//     </div>
//   );
// };

// export default Desc;
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
      const descHeading = document.querySelector('.desc-heading') as HTMLElement;
      const descBoxes = document.querySelectorAll('.desc-boxes') as NodeListOf<HTMLElement>;

      const showElement = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          element.classList.add('show');
        }
      };

      if (descHeading) showElement(descHeading);
      descBoxes.forEach(box => showElement(box));
    };

    window.addEventListener('scroll', handleScroll);
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
      <button className="get-started-button">{t('getStarted')}</button>
    </div>
  );
};

export default Desc;
