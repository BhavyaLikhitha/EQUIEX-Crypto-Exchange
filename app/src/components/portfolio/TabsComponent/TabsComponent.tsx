
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
  const [value, setValue] = useState<string>("spot");

  const handleChange = (event: React.SyntheticEvent, newValue: string): void => {
    setValue(newValue);
  };

  const style = {
    color: "var(--magenta)",
    fontFamily: "Inter, sans-serif",
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
        {/* Tab List */}
        <TabList onChange={handleChange} variant="fullWidth">
          <Tab label="TRADING ACCOUNT" value="trading" sx={style} />
          <Tab label="SPOT ACCOUNT" value="spot" sx={style} />
        </TabList>

        {/* Tab Panels */}
        <TabPanel value="trading">
          <Trading />
        </TabPanel>
        <TabPanel value="spot">
          <Spot />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
