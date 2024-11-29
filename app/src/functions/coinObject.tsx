// Define CoinData type properly
import { Dispatch, SetStateAction } from "react";
// import { CoinData } from "../pages/CoinPage";
// import CoinData from "../pages/CoinPage";

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

export const coinObject = (
  data: any,
  setCoinData: Dispatch<SetStateAction<CoinData | null>>
) => {
  setCoinData({
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image?.large,
    desc: data.description?.en,
    price_change_percentage_24h: data.market_data?.price_change_percentage_24h,
    total_volume: data.market_data?.total_volume?.usd,
    current_price: data.market_data?.current_price?.usd,
    market_cap: data.market_data?.market_cap?.usd,
    circulating_supply: data.market_data?.circulating_supply,
  });
};
