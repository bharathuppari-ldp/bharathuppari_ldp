import React from 'react';
import { Link as MuiLink,type LinkProps } from '@mui/material';

const Link: React.FC<LinkProps> = ({ children, sx, ...props }) => {
  return (
    <MuiLink 
      underline="hover"
      sx={{ 
        cursor: 'pointer',
        color: '#224DFF', 
        fontWeight: 600,
        ...sx 
      }} 
      {...props}
    >
      {children}
    </MuiLink>
  );
};

export default Link;