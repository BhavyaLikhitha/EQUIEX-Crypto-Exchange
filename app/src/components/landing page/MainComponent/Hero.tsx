import React from 'react';
import "./hero.css";
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import right from "../../../assets/hero-right.jpg";
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleClick = () => {
    navigate('/signup'); // Navigate to the /signup page when the button is clicked
  };
  return (
    <div className='hero'>
      <div className='left-component'>
        <h1 className='hero-heading'>
          <span className='typing-animation'>Trade Crypto and NFT</span>
        </h1>
        <h1 className='grow'>Grow Your Portfolio<span>.</span></h1>
        <h3 className='place'>Unlocking the Potential of Crypto and NFTs.</h3>

        <div className='email-signup'>
          <input
            type='email'
            className='email-input'
            placeholder='Enter your Email'
          />
          <button className='signup-button' onClick={handleClick}>
            Sign Up
            <ArrowOutwardRoundedIcon className='arrow-icon' />
          </button>
        </div>
      </div>

      {/* <div className='gif-container'>
        <img src={hero} alt='Crypto GIF' className='gif' />
      </div> */}
      
      <div className='hero-right'>
        <img src={right} alt='crypto' className='jpg'/>
      </div>
    </div>
  );
};

export default Hero;
