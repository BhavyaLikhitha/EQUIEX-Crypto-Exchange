import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid/Grid";
import List from "../List/List";
import './tabs.css';

// Define the type for a single coin object
interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  total_volume: number;
  market_cap: number;
}

// Define the prop type for the Tabs component
interface TabsProps {
  coins: Coin[];
}

export default function Tabs({ coins }: TabsProps): JSX.Element {
  // State for managing the currently selected tab (list or grid view)
  const [value, setValue] = useState<string>("grid");

  // Event handler to change the selected tab value
  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

    // Styling for the tab labels
  const style = {
    color: "var(--magenta)",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: 600,
  };

  // Create a custom theme for the Tab component
  const theme = createTheme({
    palette: {
      primary: {
        main: "#cb6ce6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}> {/* Provide the value of the selected tab */}
        <TabList onChange={handleChange} variant="fullWidth"> {/* Tab list with two options (list/grid) */}
        <Tab label="Grid" value="grid" sx={style} />
        <Tab label="List" value="list" sx={style} />
          
        </TabList>

        {/* List view panel */}
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, i) => (
              <List coin={item} key={i} />
            ))}
          </table>
        </TabPanel>

        {/* Grid view panel */}
        <TabPanel value="grid">
          <div className="grid-flex"> {/* Container for the grid view of coins */}
            {coins.map((coin, i) => (
              <Grid coin={coin} key={i} /> 
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
