import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import Tabs from '../components/markets/tabs/Tabs';
import Footer from '../components/common/Footer';
import axios from 'axios';
import Search from '../components/markets/Search/Search';
import Page from '../components/markets/pagination/Page';
import Loader from '../components/common/Loader/Loader';

// Define types for the coin and state structures
interface Coin {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
  [key: string]: any; // Allow other fields to be included as well
}

const MarketsPage: React.FC = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [paginatedCoins, setPaginatedCoins] = useState<Coin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const initialCount = (value - 1) * 10;
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  const onClearSearch = () => {
    setSearch(""); // Clear the search input
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
      )
      .then((response) => {
        console.log("RESPONSE>>>", response.data);
        setCoins(response.data);
        setPaginatedCoins(response.data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Header />
      <Search search={search} onSearchChange={onSearchChange} onClearSearch={onClearSearch} />
      
      {/* Show filtered coins when search is present, else show paginated coins */}
      {search ? (
        filteredCoins.length > 0 ? (
          <Tabs coins={filteredCoins} />
        ) : (
          <p className="no-results">No coin found. Please try another search.</p>
        )
      ) : (
        <>
          {/* Show paginated coins when no search query */}
          <Tabs coins={paginatedCoins} />
          
          {/* Show pagination component when there's no search */}
          <Page page={page} handlePageChange={handlePageChange} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MarketsPage;
