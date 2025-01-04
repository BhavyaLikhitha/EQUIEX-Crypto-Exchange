import { convertDate } from "./convertDate";

type PriceData = [number, number]; // Tuple representing a price data point (timestamp, price)

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

export const settingChartData = (
  setChartData: (data: ChartData) => void,
  prices: PriceData[]
): void => {
  setChartData({
    labels: prices.map((price) => convertDate(price[0])),
    datasets: [
      {
        data: prices.map((price) => price[1]),
        borderColor: "#3a80e9",
        backgroundColor: "transparent",
        borderWidth: "2",
        fill: "true",
        tension: "0.25",
        pointRadius: 0,
      },
    ],
  });
};
