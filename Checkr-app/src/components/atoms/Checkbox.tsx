import React from 'react';
import { Checkbox as MuiCheckbox, type CheckboxProps } from '@mui/material';

const Checkbox: React.FC<CheckboxProps> = (props) => {
  return (
    <MuiCheckbox
      color="primary" 
      sx={{
        color: '#C7C7C7', 
        '&.Mui-checked': {
          color: '#224DFF', 
        },
      }}
      {...props}
    />
  );
};

export default Checkbox;