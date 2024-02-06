import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import { useState } from 'react';
import '../styles/SelectCode.scss'; // Import the SCSS file for styles

interface SelectCodeProps {
  choices: string[];
  handleClick: (value: string) => void;
}

const SelectCode: React.FC<SelectCodeProps> = ({ choices, handleClick }) => {
  const [display, setDisplay] = useState(choices[0] || '');

  const handleChange = (e: SelectChangeEvent) => {
    setDisplay(e.target.value);
    handleClick(e.target.value);
  };

  return (
    <Box className="selectBox" sx={{ fontFamily: 'monospace' }}> {/* Use className for targeting in SCSS */}
      <FormControl fullWidth className='formControl'>
        <Select
          value={display}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="selectInput" // Added className for targeting the Select component in SCSS
        >
          {choices.map((choice, index) => (
            <MenuItem
              value={choice}
              key={index}
              className="menuItem" // Added className for targeting the MenuItem component in SCSS
              sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }} // Added styles for text wrapping
            >
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectCode;