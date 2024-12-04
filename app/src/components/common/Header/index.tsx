// // import React from 'react';
// // import "./header.css";
// // import Stack from '@mui/material/Stack';
// // import Button from '@mui/material/Button';
// // import logo from "../../../assets/logo.png";
// // import AnchorTemporaryDrawer from './drawer';
// // import '../Button/login.css';
// // import '../Button/signup.css';
// // import Login from '../Button/Login';
// // import Signup from '../Button/Signup';
// // import { Navigate, useNavigate } from 'react-router-dom';

// // // Define types for the props passed to Login and Signup components, if needed.
// // interface ButtonProps {
// //   text: string;
// //   onClick: () => void;
// // }

// // function Header(): JSX.Element {
// //   const navigate = useNavigate();
// //   return (
// //     <div className="navbar">
// //       <img src={logo} alt="Logo" className="logo" />
// //       <div className="links">
// //         <Stack spacing={1} direction="row" className="links">
// //           {/* Text variant buttons for Markets, Trade, NFT Gallery, and Academy */}
// //           <Button variant="text" href="/markets" className="link">Markets</Button>
// //           {/* route path added by akshay */}
// //           <Button variant="text" href="/trade/bitcoin" className="link">Trade</Button>
// //           <Button variant="text" href="/" className="link">NFT Gallery</Button>
// //           <Button variant="text" href="/" className="link">Academy</Button>
// //           <Button variant="text" href="/" className="link">Rewards</Button>
// //           {/* Outlined button for Rewards */}
// //         </Stack>

       
// //       <button className="signup" onClick={() => navigate('/signup')}>
// //         Signup
// //       </button>
// //       <button className="login" onClick={() => navigate('/login')}>
// //         Login
// //       </button>
 

      
// //       </div>
// //       <div className="mobile-drawer">
// //         <AnchorTemporaryDrawer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default Header;

// import React, { useState, useEffect } from 'react';
// import "./header.css";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import logo from "../../../assets/logo.png";
// import AnchorTemporaryDrawer from './drawer';
// import '../Button/login.css';
// import '../Button/signup.css';
// import { Navigate, useNavigate } from 'react-router-dom';
// import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

// // Define types for the props passed to Login and Signup components, if needed.
// interface ButtonProps {
//   text: string;
//   onClick: () => void;
// }

// function Header(): JSX.Element {
//   const navigate = useNavigate();

//   // Track the user login status
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//   // Check the login status on page load
//   useEffect(() => {
//     const userToken = localStorage.getItem('userToken'); // Or use context or Redux if you have one
//     if (userToken) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userToken'); // Clear the user session
//     setIsLoggedIn(false);
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <div className="navbar">
//       <img src={logo} alt="Logo" className="logo" />
//       <div className="links">
//         <Stack spacing={1} direction="row" className="links">
//           {/* Text variant buttons for Markets, Trade, NFT Gallery, and Academy */}
//           <Button variant="text" href="/markets" className="link">Markets</Button>
//           <Button variant="text" href="/trade/bitcoin" className="link">Trade</Button>
//           <Button variant="text" href="/" className="link">NFT Gallery</Button>
//           <Button variant="text" href="/" className="link">Academy</Button>
//           <Button variant="text" href="/" className="link">Rewards</Button>
//         </Stack>

//         {/* Conditionally render Login/Signup buttons or Settings/Notifications icons */}
//         {!isLoggedIn ? (
//           <>
//             <button className="signup" onClick={() => navigate('/signup')}>
//               Signup
//             </button>
//             <button className="login" onClick={() => navigate('/login')}>
//               Login
//             </button>
//           </>
//         ) : (
//           <>
//             <button className="settings" onClick={() => navigate('/settings')}>
//               Settings
//             </button>
//             <NotificationsRoundedIcon className="notification-icon" onClick={() => alert("Notifications clicked!")} />
//             <button className="logout" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         )}
//       </div>

//       <div className="mobile-drawer">
//         <AnchorTemporaryDrawer />
//       </div>
//     </div>
//   );
// }

// export default Header;

// import React, { useState, useEffect } from 'react';
// import "./header.css";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import logo from "../../../assets/logo.png";
// import AnchorTemporaryDrawer from './drawer';
// import '../Button/login.css';
// import '../Button/signup.css';
// import { useNavigate } from 'react-router-dom';
// import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
// import { toast, ToastContainer } from 'react-toastify';
// import { useTranslation } from 'react-i18next';

// function Header(): JSX.Element {
//   const navigate = useNavigate();
//   const { t } = useTranslation();
//   const { i18n } = useTranslation();

//   // Track the user login status
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

//   // Check the login status on page load
//   useEffect(() => {
//     const userToken = localStorage.getItem('userToken'); // Check localStorage for userToken
//     if (userToken) {
//       setIsLoggedIn(true); // If token exists, user is logged in
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('userToken'); // Clear the user session
//     setIsLoggedIn(false);
//     navigate('/login'); // Redirect to login page
//   };

//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("English");

//   // const handleLanguageSelect = (language: string) => {
//   //   setSelectedLanguage(language);
//   //   setShowDropdown(false); // Close the dropdown after selection
//   //   toast.success(`Language changed to ${language}`);
//   // };
//   const handleLanguageSelect = (language: string) => {
//     i18n.changeLanguage(language); // Change the app's language
//     setShowDropdown(false); // Close the dropdown
//     toast.success(t("languageChanged", { language: t(language) }));
//   };
  
//   return (
//     <div className="navbar">
//       <img src={logo} alt="Logo" className="logo" onClick={() => navigate('/')}/>
//       <div className="links">
//         <Stack spacing={1} direction="row" className="links">
//           {/* Text variant buttons for Markets, Trade, NFT Gallery, and Academy */}
//           <Button variant="text" href="/markets" className="link">Markets</Button>
//           <Button variant="text" href="/trade/bitcoin" className="link">Trade</Button>
//           <Button variant="text" href="/" className="link">NFT Gallery</Button>
//           <Button variant="text" href="/" className="link">Academy</Button>
//           <Button variant="text" href="/rewards" className="link">Rewards</Button>
//         </Stack>

//         {/* Conditionally render Login/Signup buttons or Settings/Notifications icons */}
//         {!isLoggedIn ? (
//           <>
//             <button className="signup" onClick={() => navigate('/signup')}>
//               Signup
//             </button>
//             <button className="login" onClick={() => navigate('/login')}>
//               Login
//             </button>
//           </>
//         ) : (
//           <>
            
//              <Button variant="text" href="/settings" className="link">Settings</Button>
//             {/* <LanguageRoundedIcon className="notification-icon" onClick={() => alert("Notifications clicked!")} /> */}
//             <div className="language-dropdown">
//       <LanguageRoundedIcon
//         className="notification-icon"
//         onClick={() => setShowDropdown(!showDropdown)}
//       />
//       {showDropdown && (
//         <div className="dropdown-menu">
//           <div
//             className="dropdown-item"
//             onClick={() => handleLanguageSelect("English")}
//           >
//             English
//           </div>
          
//           <div
//             className="dropdown-item"
//             onClick={() => handleLanguageSelect("Spanish")}
//           >
//             Spanish
//           </div>
//         </div>
//       )}
     
//     </div>
//             <button className="logout" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         )}
//       </div>

//       <div className="mobile-drawer">
//         <AnchorTemporaryDrawer />
//       </div>
//       <ToastContainer position='top-right' autoClose={1000}/>
//     </div>
//   );
// }

// export default Header;
import React, { useState, useEffect } from "react";
import "./header.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import logo from "../../../assets/logo.png";
import AnchorTemporaryDrawer from "./drawer";
import "../Button/login.css";
import "../Button/signup.css";
import { useNavigate } from "react-router-dom";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import { toast, ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";

function Header(): JSX.Element {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Track the user login status
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Check the login status on page load
  useEffect(() => {
    const userToken = localStorage.getItem("userToken"); // Check localStorage for userToken
    if (userToken) {
      setIsLoggedIn(true); // If token exists, user is logged in
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userToken"); // Clear the user session
    setIsLoggedIn(false);
    navigate("/login"); // Redirect to login page
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language); // Change the app's language
    setShowDropdown(false); // Close the dropdown
    toast.success(t("languageChanged", { language: t(language) }));
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt={t("logoAlt")}
        className="logo"
        onClick={() => navigate("/")}
      />
      <div className="links">
        <Stack spacing={1} direction="row" className="links">
          {/* Use t() for translation */}
          <Button variant="text" href="/markets" className="link">
            {t("markets")}
          </Button>
          <Button variant="text" href="/trade/bitcoin" className="link">
            {t("trade")}
          </Button>
          <Button variant="text" href="/" className="link">
            {t("nftGallery")}
          </Button>
          <Button variant="text" href="/" className="link">
            {t("academy")}
          </Button>
          <Button variant="text" href="/rewards" className="link">
            {t("rewards")}
          </Button>
        </Stack>

        {/* Conditionally render Login/Signup buttons or Settings/Notifications icons */}
        {!isLoggedIn ? (
          <>
            <button className="signup" onClick={() => navigate("/signup")}>
              {t("signup")}
            </button>
            <button className="login" onClick={() => navigate("/login")}>
              {t("login")}
            </button>
          </>
        ) : (
          <>
            <Button variant="text" href="/settings" className="link">
              {t("set")}
            </Button>
            <div className="language-dropdown">
              <LanguageRoundedIcon
                className="notification-icon"
                onClick={() => setShowDropdown(!showDropdown)}
              />
              {showDropdown && (
                <div className="dropdown-menu">
                  <div
                    className="dropdown-item"
                    onClick={() => handleLanguageSelect("en")}
                  >
                    {t("english")}
                  </div>
                  <div
                    className="dropdown-item"
                    onClick={() => handleLanguageSelect("hi")}
                  >
                    {t("Hindi")}
                  </div>
                </div>
              )}
            </div>
            <button className="logout" onClick={handleLogout}>
              {t("logout")}
            </button>
          </>
        )}
      </div>

      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
      {/* <ToastContainer position="top-right" autoClose={1000} /> */}
    </div>
  );
}

export default Header;
