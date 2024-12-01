import { createBrowserRouter } from "react-router";
import Layout from "./layout"; // New layout component
import Home from "./pages/HomePage";
import MarketsPage from "./pages/MarketsPage";
import CoinPage from "./pages/CoinPage";
import TradePage from "./pages/TradePage";
import PortfolioPage from "./pages/PortfolioPage";
import Signup from "./components/common/Button/Signup";
import Login from "./components/common/Button/Login";
import TabsComponent from "./components/portfolio/TabsComponent/TabsComponent";

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // Use Layout as the root wrapper
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "markets",
        Component: MarketsPage,
      },
      {
        path: "coins/:id",
        Component: CoinPage,
      },
      {
        path: "trade/bitcoin",
        Component: TradePage,
      },
      {
        path: "portfolio",
        Component: PortfolioPage,
      },
      {
        path: "signup",
        Component: Signup,
      },
      {
        path: "login",
        Component: Login,
      },
      
    ],
  },
]);
