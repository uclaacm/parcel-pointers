import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';

import { useState } from 'react';

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
    <Box sx={{ width: 'fit-content', height: '5vh', fontFamily: 'monospace' }}>
      <FormControl fullWidth>
        <Select
          value={display}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          sx={{
            fontFamily: 'monospace',
            borderColor: '#CFCFCF',
            border: '12px',
          }}
        >
          {choices.map((choice, index) => (
            <MenuItem
              value={choice}
              key={index}
              sx={{ fontFamily: 'monospace' }}
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
