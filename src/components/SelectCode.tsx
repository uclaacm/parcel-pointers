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
    <Box className="select-box" sx={{ fontFamily: 'monospace' }}>
      <FormControl fullWidth className="form-control">
        <Select
          value={display}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className="select-input"
        >
          {choices.map((choice, index) => (
            <MenuItem
              value={choice}
              key={index}
              className="menu-item"
              sx={{ whiteSpace: 'normal', wordWrap: 'break-word' }}
            >
              {choice}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </"Box>
  );
};

export default SelectCode;
