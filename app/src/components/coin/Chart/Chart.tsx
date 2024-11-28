import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartOptions,
  CoreChartOptions,
  PluginChartOptions,
  DatasetChartOptions,
  ScaleChartOptions,
  LineControllerChartOptions,
} from "chart.js/auto";

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
        display: multiAxis,
      },
    },
    responsive: true,
    interaction: {
      mode: "index", // Correctly typed as one of the allowed values
      intersect: false,
    },
    // Uncomment and type the scales if needed
    // scales: {
    //   crypto1: {
    //     position: "left",
    //   },
    //   crypto2: multiAxis
    //     ? {
    //         position: "right",
    //       }
    //     : undefined,
    // },
  };

  return <Line data={chartData} options={options} />;
};

export default Chart;
