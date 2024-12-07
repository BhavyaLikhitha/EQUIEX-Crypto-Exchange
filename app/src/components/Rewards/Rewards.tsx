// import React, { useState, useEffect } from "react";
// import "./rewards.css";
// import treasure from '../../assets/treasure.jpg';
// import coin from '../../assets/coin.jpg';
// import c1 from '../../assets/c1.jpeg';
// import c2 from '../../assets/c2.jpeg';
// import c3 from '../../assets/c3.jpeg';
// import c4 from '../../assets/c4.jpeg';
// import c5 from '../../assets/c5.jpeg';
// import c6 from '../../assets/c6.jpeg';
// import Footer from "../common/Footer";
// import Header from "../common/Header";

// interface CoinBoxProps {
//   number: number;
//   reward: number;
//   image: string;
//   disabled: boolean;
//   onClick: () => void;
// }

// const CoinBox: React.FC<CoinBoxProps> = ({ number, reward, image, disabled, onClick }) => {
//   return (
//     <div
//       className={`coin-box ${disabled ? "disabled" : ""}`}
//       onClick={!disabled ? onClick : undefined}
//     >
//       <img src={image} alt={`Box ${number}`} className="box-image" />
//       <div className="reward-number">{reward}</div>
//       <div className="box-number">Day {number}</div>
//     </div>
//   );
// };

// const RewardsPage: React.FC = () => {
//   const [coins, setCoins] = useState(0);
//   const [currentBox, setCurrentBox] = useState(1);
//   const [nextClaimTime, setNextClaimTime] = useState(Date.now());
//   const [timer, setTimer] = useState(0);

//   const rewards = [
//     { reward: 10, image: c1 },
//     { reward: 20, image: c2 },
//     { reward: 30, image: c3 },
//     { reward: 40, image: c4 },
//     { reward: 50, image: c5 },
//     { reward: 60, image: c6 },
//   ];

//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer <= 1) {
//             clearInterval(interval);
//             return 0;
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   const handleClaimReward = () => {
//     const currentTime = Date.now();

//     if (currentTime >= nextClaimTime) {
//       setCoins((prevCoins) => prevCoins + rewards[currentBox - 1].reward);
//       setNextClaimTime(currentTime + 1000); // Set the next claim time (10 seconds later)
//       setTimer(2); // Start the timer for 10 seconds
//       setCurrentBox((prevBox) => (prevBox % 6) + 1); // Move to the next box, reset to 1 after 6
//     }
//   };

//   return (
//     <>
//    <Header/>
//     <div className="rewards-page">
//       <h1 className="eq">Equiex <span className="equi">Rewards</span></h1>
//       <div className="coins-container">
//         <div className="total-rewards-box">
//           <h2>Total Rewards</h2>
//           <div className="coins-count">{coins}</div>
//         </div>
//         <img src={treasure} alt="Treasure Chest" className="coin-image" />
//       </div>
//       <div className="streak-section">
//         <h2><strong className="streak">Streak: 6 Days - 6 Boxes</strong></h2>
//         <div className="coin-boxes">
//           {rewards.map((reward, index) => (
//             <CoinBox
//               key={index}
//               number={index + 1}
//               reward={reward.reward}
//               image={reward.image}
//               disabled={index + 1 !== currentBox}
//               onClick={handleClaimReward}
//             />
//           ))}
//         </div>
//         <button
//           className="claim-button"
//           onClick={handleClaimReward}
//           disabled={timer > 0}
//         >
//           {timer > 0 ? `Wait ${timer}s` : "Collect Rewards"}
//         </button>
//       </div>
//     </div>
//           <Footer/>
//     </>
//   );
// };

// export default RewardsPage;

import React, { useState, useEffect } from "react";
import "./rewards.css";
import treasure from '../../assets/treasure.jpg';
import c1 from '../../assets/c1.jpeg';
import c2 from '../../assets/c2.jpeg';
import c3 from '../../assets/c3.jpeg';
import c4 from '../../assets/c4.jpeg';
import c5 from '../../assets/c5.jpeg';
import c6 from '../../assets/c6.jpeg';
import Footer from "../common/Footer";
import Header from "../common/Header";
import { useTranslation } from "react-i18next";

// Props definition for CoinBox component
interface CoinBoxProps {
  number: number;
  reward: number;
  image: string;
  disabled: boolean;
  onClick: () => void;
}

// CoinBox component displays a reward box with its reward and image
const CoinBox: React.FC<CoinBoxProps> = ({ number, reward, image, disabled, onClick }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`coin-box ${disabled ? "disabled" : ""}`} // Apply disabled class if box is not clickable
      onClick={!disabled ? onClick : undefined}
    >
      <img src={image} alt={t("r.boxAlt", { number })} className="box-image" />
      <div className="reward-number">{reward}</div>
      <div className="box-number">{t("r.day", { number })}</div>
    </div>
  );
};

// Main RewardsPage component
const RewardsPage: React.FC = () => {
  const [coins, setCoins] = useState(0);
  const [currentBox, setCurrentBox] = useState(1); // Track the current box to claim rewards from
  const [nextClaimTime, setNextClaimTime] = useState(Date.now()); // Track the next claim time
  const [timer, setTimer] = useState(0);  // Timer for the wait period before claiming rewards
  const { t } = useTranslation();

   // Rewards data for each box
  const rewards = [
    { reward: 10, image: c1 },
    { reward: 20, image: c2 },
    { reward: 30, image: c3 },
    { reward: 40, image: c4 },
    { reward: 50, image: c5 },
    { reward: 60, image: c6 },
  ];

   // Effect to manage the countdown timer for claiming rewards
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(interval);  // Stop the timer when it reaches 0
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
      return () => clearInterval(interval);  // Cleanup the interval on component unmount
    }
  }, [timer]);

  const handleClaimReward = () => {
    const currentTime = Date.now();


    // If the current time is greater than or equal to the next claim time, process the reward
    if (currentTime >= nextClaimTime) {
      // Add the reward to the total coins
      setCoins((prevCoins) => prevCoins + rewards[currentBox - 1].reward);
      setNextClaimTime(currentTime + 1000); // Set the next claim time (10 seconds later)
      setTimer(2); // Start the timer for 10 seconds
      setCurrentBox((prevBox) => (prevBox % 6) + 1); // Move to the next box, reset to 1 after 6
    }
  };

  return (
    <>
      <Header />
      <div className="rewards-page">
        <h1 className="eq">{t("r.title")} <span className="equi">{t("r.subtitle")}</span></h1>

        {/* Container for total rewards and coin image */}
        <div className="coins-container">
          <div className="total-rewards-box">
            <h2>{t("r.totalRewards")}</h2>
            <div className="coins-count">{coins}</div>
          </div>
          <img src={treasure} alt={t("r.treasureAlt")} className="coin-image" />
        </div>

        {/* Streak section for displaying reward boxes */}
        <div className="streak-section">
          <h2><strong className="streak">{t("r.streak")}</strong></h2>
          <div className="coin-boxes">
            {rewards.map((reward, index) => (
              <CoinBox
                key={index}
                number={index + 1}
                reward={reward.reward}
                image={reward.image}
                disabled={index + 1 !== currentBox} // Disable the box if it's not the current box
                onClick={handleClaimReward} // OnClick handler for claiming the reward
              />
            ))}
          </div>
          {/* Claim button */}
          <button
            className="claim-button"
            onClick={handleClaimReward}
            disabled={timer > 0} // Disable button if timer is still running
          >
            {timer > 0 ? t("r.wait", { timer }) : t("r.collectRewards")} {/* Show wait time or collect rewards text */}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RewardsPage;
