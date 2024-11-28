import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/common/Header';
import Loader from '../components/common/Loader/Loader';
import axios from 'axios';
import { coinObject } from '../functions/coinObject';
import List from '../components/markets/List/List';
import Footer from '../components/common/Footer';
import CoinInfo from '../components/coin/CoinInfo/CoinInfo';
import './coinpage.css';
import Chart from '../components/coin/Chart/Chart';
import { convertDate } from '../functions/convertDate';
import SelectDays from '../components/coin/selectDays/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import { SelectChangeEvent } from '@mui/material/Select'; // Import SelectChangeEvent

// Define types for coin data structure
interface CoinData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  [key: string]: any; // Allow other fields to be included as well
}

// Define the component's state types
interface CoinPageParams {
  id: string;
}

function CoinPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const [coinData, setCoinData] = useState<CoinData | undefined>();
  const [days, setDays] = useState<number>(30);
  const [chartData, setChartData] = useState<{ labels: string[]; datasets: any[] }>({ labels: [], datasets: [] });
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("RESPONSE>>>", response.data);
          coinObject(setCoinData, response.data);
        })
        .catch((error) => {
          console.log("ERROR>>>", error.message);
          setLoading(false);
        });

      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((response) => {
          console.log("Prices", response.data.prices);
          settingChartData(setChartData, response.data.prices);
          setLoading(false);
        })
        .catch((error) => {
          console.log("ERROR>>>", error.message);
          setLoading(false);
        });
    }
  }, [id, days]);

  const handleDaysChange = (event: SelectChangeEvent<number>) => { // Update type here
    const selectedDays = Number(event.target.value);
    setDays(selectedDays);
    setLoading(true);

    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${selectedDays}&interval=daily`)
      .then((response) => {
        console.log("Prices", response.data.prices);
        settingChartData(setChartData, response.data.prices);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR>>>", error.message);
        setLoading(false);
      });
  };

  // Conditional rendering based on loading and data
  if (loading) {
    return (
      <div>
        <Header />
        <Loader /> {/* Show loader when data is loading */}
      </div>
    );
  }

  if (!coinData) {
    return (
      <div>
        <Header />
        <p>Error: Coin data not found.</p> {/* Handle error or invalid data */}
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className='wrapper'>
        <List coin={coinData} />
      </div>
      <div className='chart-wrapper'>
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        <Chart key={days} chartData={chartData} multiAxis={true} />
      </div>
      {/* Table for Coin Data */}
      <div className="coin-info-table">
        <h2>Coin Stats</h2>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{coinData.id}</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{coinData.name}</td>
            </tr>
            <tr>
              <td>Symbol</td>
              <td>{coinData.symbol.toUpperCase()}</td>
            </tr>
            <tr>
              <td>Current Price (USD)</td>
              <td>${coinData.current_price.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Market Cap (USD)</td>
              <td>${coinData.market_cap.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Total Volume (USD)</td>
              <td>${coinData.total_volume.toLocaleString()}</td>
            </tr>
            <tr>
              <td>Price Change (24h)</td>
              <td>{coinData.price_change_percentage_24h.toFixed(2)}%</td>
            </tr>
            <tr>
              <td>Circulating Supply</td>
              <td>{coinData.circulating_supply.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default CoinPage;
