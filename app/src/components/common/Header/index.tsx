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
          <Button variant="text" href="/nfts" className="link">
            {t("nftGallery")}
          </Button>
          <Button variant="text" href="/blogs" className="link">
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
