import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js/auto";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Define the props interface
interface ChartProps {
  chartData: any; // Replace with the exact type of your chart data if known
  multiAxis: boolean;
}

const Chart: React.FC<ChartProps> = ({ chartData, multiAxis }) => {
  // Define options with proper typing
  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    interaction: {
      mode: "index", // Correctly typed as one of the allowed values
      intersect: false,
    },
    scales: {
      x: {
        type: 'category'
      },
      y: {
        type: 'linear'
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;
