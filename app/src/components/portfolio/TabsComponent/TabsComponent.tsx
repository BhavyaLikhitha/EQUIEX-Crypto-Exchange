
import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Trading from "../Tradingtab/Trading";
import Spot from "../SpotTab/Spot";
import "./tabscom.css";

export default function TabsComponent(): JSX.Element {
   // State to manage the selected tab
  const [value, setValue] = useState<string>("spot");

  // Function to handle tab changes
  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  // Tab styles
  const style = {
    color: "var(--magenta)",
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    fontWeight: 600,
  };

  // Custom theme for Material-UI components
  const theme = createTheme({
    palette: {
      primary: {
        main: "#cb6ce6",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
       {/* Tab Context to manage the state of active tab */}
      <TabContext value={value}>
         {/* Tab List for the actual tab buttons */}
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="TRADING ACCOUNT" value="trading" sx={style} />
          <Tab label="SPOT ACCOUNT" value="spot" sx={style} />
        </TabList>

        {/* Tab Panels for displaying content based on active tab */}
        <TabPanel value="trading">
          <Trading />  {/* Trading account content */}
        </TabPanel>
        <TabPanel value="spot">
          <Spot />   {/* Spot account content */}
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
