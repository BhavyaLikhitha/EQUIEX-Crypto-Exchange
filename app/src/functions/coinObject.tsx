// Define CoinData type properly
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

// Adjust the coinObject function
export const coinObject = (data: any,setCoinData: React.Dispatch<React.SetStateAction<CoinData | undefined>>) => {
  setCoinData({
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image.large, // Assuming 'large' is the property for the image URL
    desc: data.description.en,
    price_change_percentage_24h: data.price_change_percentage_24h,
    total_volume: data.total_volume,
    current_price: data.current_price,
    market_cap: data.market_cap,
    circulating_supply: data.circulating_supply,
  });
};
