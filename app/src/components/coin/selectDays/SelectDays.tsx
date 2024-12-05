import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './selectdays.css';

// Define the prop types for the SelectDays component
interface SelectDaysProps {
  days: number; // The current selected value, should be a number
  handleDaysChange: (event: SelectChangeEvent<number>) => void; // Correct type for onChange event
}

// Define the functional component
export default function SelectDays({ days, handleDaysChange }: SelectDaysProps) {
  return (
    <div className='select-days'> {/* Wrapper for the dropdown with styling */}
      <p className='change'>Price Change in</p>


      {/* Dropdown component */}
      <Select
        className='selec-days'
        labelId="demo-simple-select-label"
        id="demo-simple-select" // Unique ID for the dropdown
        value={days} // Bind the selected value to the `days` prop
        label="Days"
        onChange={handleDaysChange} // Event handler for when the value changes
        sx={{
          marginTop: "10px",
          marginLeft: "10px",
          marginBottom: "30px",
          height: "2.5rem",
          color: "var(--black)", // Custom variable for text color
          border: "1px solid var(--magenta)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--magenta)", // Border color for the dropdown outline
          },
          "& .MuiSvgIcon-root": {
            color: "var(--black)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#cb6ce6", // Hover effect for the border
            },
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--magenta)",
          },
        }}
      >
        {/* Dropdown options */}
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
