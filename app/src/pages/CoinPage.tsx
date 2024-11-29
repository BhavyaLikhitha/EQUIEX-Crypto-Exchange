import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";
import Loader from "../components/common/Loader/Loader";
import axios from "axios";
import { coinObject } from "../functions/coinObject";
import List from "../components/markets/List/List";
import Footer from "../components/common/Footer";
import "./coinpage.css";
import Chart from "../components/coin/Chart/Chart";
import SelectDays from "../components/coin/selectDays/SelectDays";
import { settingChartData } from "../functions/settingChartData";
import { SelectChangeEvent } from '@mui/material/Select';

interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: string;
  desc: string;
  price_change_percentage_24h: number;
  total_volume: number;
  current_price: number;
  market_cap: number;
  circulating_supply: number;
}

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    borderColor: string;
    backgroundColor: string;
    borderWidth: string;
    fill: string;
    tension: string;
    pointRadius: number;
  }[];
}

function CoinPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();
  const [coinData, setCoinData] = useState<CoinData | null>(null);
  const [days, setDays] = useState<number>(30);
  const [chartData, setChartData] = useState<ChartData | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);

      // Fetch coin data
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("RESPONSE>>>", response.data);
          coinObject(response.data, setCoinData);
        })
        .catch((error) => {
          console.error("ERROR>>>", error.message);
        });

      // Fetch chart data
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        )
        .then((response) => {
          console.log("Prices", response.data.prices);
          settingChartData(setChartData, response.data.prices);
          setLoading(false);
        })
        .catch((error) => {
          console.error("ERROR>>>", error.message);
          setLoading(false);
        });
    }
  }, [id, days]);

  const handleDaysChange = (event: SelectChangeEvent<number>) => {
    const newDays = Number(event.target.value);
    setDays(newDays);
    setLoading(true);

    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${newDays}&interval=daily`
      )
      .then((response) => {
        console.log("Prices", response.data.prices);
        settingChartData(setChartData, response.data.prices);
        setLoading(false);
      })
      .catch((error) => {
        console.error("ERROR>>>", error.message);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    );
  }

  if (!coinData) {
    return (
      <div>
        <Header />
        <p>Error: Coin data not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="wrapper">
        <List coin={coinData} />
      </div>
      <div className="chart-wrapper">
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        {chartData && <Chart key={days} chartData={chartData} multiAxis />}
      </div>
      <div className="coin-info-table">
        <h2>Coin Stats</h2>
        <table>
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
