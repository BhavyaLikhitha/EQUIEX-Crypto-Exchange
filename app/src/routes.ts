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
import Watchlist from "./components/Watchlist/Watchlist";
import settings from "./components/settings/settings";
import RewardsPage from "./components/Rewards/Rewards";
import Nfts from "./components/nfts/Nfts";
import Blogs from "./components/blogs/Blogs";

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
      {
        path:"coin-tracker",
        Component:Watchlist,
      },
      {
        path:"settings",
        Component:settings,
      },
      {
        path:'rewards',
        Component:RewardsPage,
      },
      {
        path:'nfts',
        Component:Nfts,
      }, 
      {
        path:'blogs',
        Component:Blogs,
      }
    ],
  },
]);
