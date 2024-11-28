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
  const [value, setValue] = useState<string>("list");

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  const style = {
    color: "var(--magenta)",
    fontFamily: "Inter,sans-serif",
    fontSize: "16px",
    fontWeight: 600,
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#cb6ce6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="List" value="list" sx={style} />
          <Tab label="Grid" value="grid" sx={style} />
        </TabList>
        <TabPanel value="list">
          <table className="list-table">
            {coins.map((item, i) => (
              <List coin={item} key={i} />
            ))}
          </table>
        </TabPanel>
        <TabPanel value="grid">
          <div className="grid-flex">
            {coins.map((coin, i) => (
              <Grid coin={coin} key={i} />
            ))}
          </div>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
