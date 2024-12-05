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

// Register the required components with ChartJS to enable their functionality
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// Define the props interface for the Chart component
interface ChartProps {
  chartData: any; // The data to be rendered in the chart (type can be replaced with specific structure)
  multiAxis: boolean; // Indicates if multiple axes are required
}

const Chart: React.FC<ChartProps> = ({ chartData, multiAxis }) => {
   // Define the options for the chart, ensuring proper typing with ChartOptions
  const options: ChartOptions<"line"> = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true, // Makes the chart responsive to container size
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

  // Render the Line chart component with the provided data and options
  return <Line data={chartData} options={options} />;
};

export default Chart;
