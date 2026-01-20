import React from 'react';
import { Button as MuiButton, type ButtonProps } from '@mui/material';

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const Button: React.FC<CustomButtonProps> = ({ label, ...props }) => {
  return (
    <MuiButton variant="contained" fullWidth {...props}>
      {label}
    </MuiButton>
  );
};

export default Button;