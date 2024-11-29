import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './selectdays.css';

// Define the prop types
interface SelectDaysProps {
  days: number; // The current selected value, should be a number
  handleDaysChange: (event: SelectChangeEvent<number>) => void; // Correct type for onChange event
}

export default function SelectDays({ days, handleDaysChange }: SelectDaysProps) {
  return (
    <div className='select-days'>
      <p className='change'>Price Change in</p>
      <Select
        className='selec-days'
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
        sx={{
          marginTop: "10px",
          marginLeft: "10px",
          marginBottom: "30px",
          height: "2.5rem",
          color: "var(--black)",
          border: "1px solid var(--magenta)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--magenta)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--black)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#cb6ce6",
            },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--magenta)",
          },
        }}
      >
        <MenuItem value={1}>1 Day</MenuItem>
        <MenuItem value={7}>1 Week</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={360}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
