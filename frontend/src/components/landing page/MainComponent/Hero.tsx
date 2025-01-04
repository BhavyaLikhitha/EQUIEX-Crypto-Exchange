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
