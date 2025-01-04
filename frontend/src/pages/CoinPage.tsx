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
import { SelectChangeEvent } from '@mui/material/Select';
import { convertDate } from "../functions/convertDate";

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
  // State for loading status
  const [loading, setLoading] = useState<boolean>(true);

  // Extract 'id' from the URL parameters (e.g., /coin/bitcoin would have id='bitcoin')
  const { id } = useParams<{ id: string }>();

  // State to store coin data fetched from the API
  const [coinData, setCoinData] = useState<CoinData | null>(null);

  // State to manage the selected time period for the chart (default is 30 days)
  const [days, setDays] = useState<number>(30);

  // State to store chart data fetched from the API
  const [chartData, setChartData] = useState<ChartData | null>(null);

  // useEffect to fetch coin data and chart data whenever 'id' or 'days' changes
  useEffect(() => {
    if (id) {
      setLoading(true); // Set loading to true while data is being fetched

      // Fetch coin data from the Coingecko API
      axios
        .get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((response) => {
          console.log("RESPONSE>>>", response.data);
          coinObject(response.data, setCoinData);
        })
        .catch((error) => {
          console.error("ERROR>>>", error.message);
        });

      // Fetch chart data for the specified 'days' range
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
        )
        .then((response) => {
          console.log("Prices", response.data.prices);

         
          // Extract labels (dates) and data (prices) from the response
          const labels = response.data.prices.map((price: [number, number]) =>
            convertDate(price[0]) // Convert timestamp to human-readable date
          );

          const data = response.data.prices.map((price: [number, number]) => price[1]); // Extract price data

          setChartData({
            labels: labels,
            datasets: [
              {
                data: data,
                borderColor: "#3a80e9",
                backgroundColor: "rgba(58, 128, 233, 0.5)",
                borderWidth: "2",
                fill: "true",
                tension: "0.25",
                pointRadius: 0,
              }
            ]
          });

          setLoading(false);
        })
        .catch((error) => {
          console.error("ERROR>>>", error.message);
          setLoading(false);  // Stop loading even if there's an error
        });
    }
  }, [id, days]);  // Runs whenever 'id' or 'days' changes

  /**
   * Handle change in the 'days' option (e.g., 7, 30, 90, 180 days)
   * @param event - The event triggered by changing the days option
   */
  const handleDaysChange = (event: SelectChangeEvent<number>) => {
    const newDays = Number(event.target.value);
    setDays(newDays);
    setLoading(true);

    // Fetch updated chart data for the new time period
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${newDays}&interval=daily`
      )
      .then((response) => {
        console.log("Prices", response.data.prices);

        const labels = response.data.prices.map((price: [number, number]) =>
          new Date(price[0]).toLocaleDateString()
        );

        const data = response.data.prices.map((price: [number, number]) => price[1]);

        setChartData({
          labels: labels,
          datasets: [
            {
              data: data,
              borderColor: "#3a80e9",
              backgroundColor: "rgba(58, 128, 233, 0.5)",
              borderWidth: "2",
              fill: "true",
              tension: "0.25",
              pointRadius: 0,
            }
          ]
        });

        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error("ERROR>>>", error.message);  // Log the error if the request fails
        setLoading(false);
      });
  };

  // If loading, display the loader
  if (loading) {
    return (
      <div>
        <Header />
        <Loader />
      </div>
    );
  }

  // If coin data is not available, display an error message
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
        <List coin={coinData} /> {/* List component to display coin details */}
      </div>
      <div className="chart-wrapper">
        <SelectDays days={days} handleDaysChange={handleDaysChange} />
        {/* Dropdown to select days for chart data */}
        
        {chartData && <Chart key={days} chartData={chartData} multiAxis />}
         {/* Chart component to display price trends */}
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
