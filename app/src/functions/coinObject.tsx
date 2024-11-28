// Define the type for the data parameter to ensure it matches the expected structure
interface CoinData {
  id: string;
  name: string;
  symbol: string;
  image: {
    large: string;
  };
  description: {
    en: string;
  };
  market_data: {
    price_change_percentage_24h: number;
    total_volume: {
      usd: number;
    };
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    circulating_supply: number;
  };
}

// Define the type for the state setter function
type SetStateFunction = React.Dispatch<React.SetStateAction<{
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
}>>;

// Define the function with type annotations
export const coinObject = (setState: SetStateFunction, data: CoinData): void => {
  setState({
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image.large,
    desc: data.description.en,
    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
    total_volume: data.market_data.total_volume.usd,
    current_price: data.market_data.current_price.usd,
    market_cap: data.market_data.market_cap.usd,
    circulating_supply: data.market_data.circulating_supply,
  });
};
