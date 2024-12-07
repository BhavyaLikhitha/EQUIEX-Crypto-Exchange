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
  [key: string]: any; // Allows additional properties in the Coin object
}

const MarketsPage: React.FC = () => {
  // State to store the list of all coins
  const [coins, setCoins] = useState<Coin[]>([]);

  // State to manage the user's search query
  const [search, setSearch] = useState<string>("");

  // State to manage the current page number for pagination
  const [page, setPage] = useState<number>(1);

  // State to store the list of coins to be displayed on the current page
  const [paginatedCoins, setPaginatedCoins] = useState<Coin[]>([]);

  // State to manage the loading state while fetching data from the API
  const [loading, setLoading] = useState<boolean>(true);

  /**
   * Handles page change for pagination.
   * @param event - The event triggered by the page change
   * @param value - The new page number
   */
  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    const initialCount = (value - 1) * 10; // Calculate the starting index for the current page
    setPaginatedCoins(coins.slice(initialCount, initialCount + 10));
  };

  /**
   * Handles changes in the search input field.
   * @param e - The event triggered when the input value changes
   */
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  /**
   * Filters coins based on the search query.
   * Filters by name or symbol, converting both to lowercase to make the search case-insensitive.
   */
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.trim().toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.trim().toLowerCase())
  );

  /**
   * Clears the search input field.
   * Resets the search state to an empty string.
   */
  const onClearSearch = () => {
    setSearch(""); // Clear the search input
  };

  /**
   * Fetches the list of coins from the CoinGecko API when the component mounts.
   * The coins are ordered by market cap in descending order and limited to 100 coins.
   */
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
       {/* Render the search input for filtering coins */}
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
          
           {/* Display the pagination component to navigate between pages */}
          <Page page={page} handlePageChange={handlePageChange} />
        </>
      )}
      <Footer />
    </div>
  );
};

export default MarketsPage;
