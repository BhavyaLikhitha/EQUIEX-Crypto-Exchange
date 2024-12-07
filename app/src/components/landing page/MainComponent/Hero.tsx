// import React from 'react';
// import "./hero.css";
// import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
// import right from "../../../assets/hero-right.jpg";
// import { useNavigate } from 'react-router-dom';

// const Hero: React.FC = () => {
//   const navigate = useNavigate(); // Initialize useNavigate hook

//   const handleClick = () => {
//     navigate('/signup'); // Navigate to the /signup page when the button is clicked
//   };
//   return (
//     <div className='hero'>
//       <div className='left-component'>
//         <h1 className='hero-heading'>
//           <span className='typing-animation'>Trade Crypto and NFT</span>
//         </h1>
//         <h1 className='grow'>Grow Your Portfolio<span>.</span></h1>
//         <h3 className='place'>Unlocking the Potential of Crypto and NFTs.</h3>

//         <div className='email-signup'>
//           <input
//             type='email'
//             className='email-input'
//             placeholder='Enter your Email'
//           />
//           <button className='signup-button' onClick={handleClick}>
//             Sign Up
//             <ArrowOutwardRoundedIcon className='arrow-icon' />
//           </button>
//         </div>
//       </div>
      
//       <div className='hero-right'>
//         <img src={right} alt='crypto' className='jpg'/>
//       </div>
//     </div>
//   );
// };

// export default Hero;


// import React, { useEffect, useState } from 'react';
// import './hero.css';
// import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
// import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
// import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
// import right from '../../../assets/hero-right.jpg';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import { useTranslation } from "react-i18next";

// const Hero: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
//   const navigate = useNavigate(); // Initialize useNavigate hook
//   const referralLink = 'https://equiex.com/referral/12345'; // Example referral link
//   const { t, i18n } = useTranslation();
  
//   // Check for token in localStorage on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('userToken');
//     setIsLoggedIn(!!token); // Set login status based on token presence
//   }, []);

//   const handleSignUpClick = () => {
//     navigate('/signup'); // Navigate to the /signup page when the button is clicked
//   };

//   const handleCopyClick = async () => {
//     try {
//       await navigator.clipboard.writeText(referralLink); // Copy the referral link to clipboard
//       // alert('Referal link copied')
//       toast.success("Referral link copied to clipboard!")
//     } catch (err) {
//       console.error('Failed to copy the text: ', err);
//     }
//   };

//   const handleShareClick = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: 'Check out this Crypto and NFT platform!',
//           text: 'Join me and grow your portfolio on this amazing platform.',
//           url: referralLink,
//         });
//       } catch (err) {
//         console.error('Error sharing:', err);
//       }
//     } else {
//       alert('Web Share API not supported in your browser.');
//     }
//   };

//    // Handle navigation for the new buttons
//    const handlePortfolioClick = () => {
//     navigate('/portfolio');
//   };

//   const handleCoinTrackerClick = () => {
//     navigate('/coin-tracker');
//   };

//   return (
//     <div className='hero'>
//       <div className='left-component'>
//         <h1 className='hero-heading'>
//           <span className='typing-animation'>Trade Crypto and NFT</span>
//         </h1>
//         <h1 className='grow'>
//           Grow Your Portfolio<span>.</span>
//         </h1>
//         <h3 className='place'>Unlocking the Potential of Crypto and NFTs.</h3>

//         {!isLoggedIn ? (
//           <div className='email-signup'>
//             <input
//               type='email'
//               className='email-input'
//               placeholder='Enter your Email'
//             />
//             <button className='signup-button' onClick={handleSignUpClick}>
//               Sign Up
//               <ArrowOutwardRoundedIcon className='arrow-icon' />
//             </button>
//           </div>
//         ) : (
//           <div className='referral-section'>
//             <p className='referral-link'>
//               <strong>Referral: </strong>
//               <span className='ref'>{referralLink}</span>
//               <button className='copy-button' onClick={handleCopyClick}>
//                 <ContentCopyRoundedIcon />
//                 <ShareRoundedIcon onClick={handleShareClick} className='round-btn'/>
//               </button>
//             </p>
//                {/* Added new buttons after login */}
//                <div className='my-port'>
//               <button className='port-button' onClick={handlePortfolioClick}>
//                 My Portfolio
//               </button>
//               <button className='port-button' onClick={handleCoinTrackerClick}>
//                 Coin Tracker
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <div className='hero-right'>
//         <img src={right} alt='crypto' className='jpg' />
//       </div>
//        {/* Add ToastContainer for displaying toast messages */}
//        <ToastContainer position="top-right" autoClose={1000} />
//     </div>
//   );
// };

// export default Hero;
import React, { useEffect, useState } from 'react';
import './hero.css';
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import right from '../../../assets/hero-right.jpg';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const navigate = useNavigate(); // Initialize useNavigate hook
  const referralLink = 'https://equiex.com/referral/12345'; // Example referral link
  const { t } = useTranslation();
  
  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    setIsLoggedIn(!!token); // Set login status based on token presence
  }, []);

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the /signup page when the button is clicked
  };

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(referralLink); // Copy the referral link to clipboard
      toast.success(t("copySuccess"));
    } catch (err) {
      console.error('Failed to copy the text: ', err);
    }
  };

  const handleShareClick = async () => {
    // Check if the browser supports the Web Share API
    if (navigator.share) {
      try {
        // Attempt to share the referral link using the Web Share API
        await navigator.share({
          title: t("shareTitle"),
          text: t("shareText"),
          url: referralLink,
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Alert the user if sharing is not supported
      alert(t("shareNotSupported"));
    }
  };

  // Navigate to the portfolio page
  const handlePortfolioClick = () => {
    navigate('/portfolio');
  };

  // Navigate to the coin tracker page
  const handleCoinTrackerClick = () => {
    navigate('/coin-tracker');
  };

  return (
    <div className='hero'>
       {/* Left component containing text and interactivity */}
      <div className='left-component'>
        {/* Hero heading with typing animation */}
        <h1 className='hero-heading'>
          <span className='typing-animation'>{t("tradeh")}</span>
        </h1>
        <h1 className='grow'>
          {t("growPortfolio")}<span>.</span>
        </h1>
        <h3 className='place'>{t("unlockPotential")}</h3>

        {/* If the user is not logged in, show email signup form */}
        {!isLoggedIn ? (
          <div className='email-signup'>
            <input
              type='email'
              className='email-input'
              placeholder={t("emailPlaceholder")}
            />
            <button className='signup-button' onClick={handleSignUpClick}>
              {t("signUpButton")}
               {/* Icon indicating outward action */}
              <ArrowOutwardRoundedIcon className='arrow-icon' />
            </button>
          </div>
        ) : (
          // If the user is logged in, show referral link and options
          <div className='referral-section'>
            <p className='referral-link'>
              <strong>{t("referralLabel")} </strong>
              <span className='ref'>{referralLink}</span>
              {/* Copy and share buttons */}
              <button className='copy-button' onClick={handleCopyClick}>
                <ContentCopyRoundedIcon />
                <ShareRoundedIcon onClick={handleShareClick} className='round-btn'/>
              </button>
            </p>

          {/* Portfolio and Coin Tracker buttons */}
            <div className='my-port'>
              <button className='port-button' onClick={handlePortfolioClick}>
                {t("portfolioButton")}
              </button>
              <button className='port-button' onClick={handleCoinTrackerClick}>
                {t("coinTrackerButton")}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right component containing the hero image */}
      <div className='hero-right'>
        <img src={right} alt={t("cryptoAlt")} className='jpg' />
      </div>

       {/* Toast notification container */}
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
};

export default Hero;
