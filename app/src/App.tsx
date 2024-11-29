import React from 'react'; // Explicit import for React in TypeScript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './scss/app.scss';

// Importing pages as components
import Home from './pages/HomePage';
import MarketsPage from './pages/MarketsPage';
import CoinPage from './pages/CoinPage';
import TradePage from './pages/TradePage';
import PortfolioPage from './pages/PortfolioPage';
import Signup from './components/common/Button/Signup';
import Login from './components/common/Button/Login';

import { ToastContainer } from 'react-toastify';
const App: React.FC = () => { // Specify the functional component type
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<MarketsPage />} />
          <Route path="/coins/:id" element={<CoinPage />} />
          {/* Route path added by Akshay */}
          <Route path="/trade/bitcoin" element={<TradePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />


          {/* Uncomment when Compare and Watchlist components are implemented */}
          {/* <Route path="/compare" element={<Compare />} /> */}
          {/* <Route path="/watchlist" element={<Watchlist />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
