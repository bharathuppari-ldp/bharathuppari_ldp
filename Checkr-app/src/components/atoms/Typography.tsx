import React from 'react';
import { Typography as MuiTypography, type TypographyProps } from '@mui/material';

interface CustomTypographyProps extends TypographyProps {
  component?: React.ElementType;
}

const Typography: React.FC<CustomTypographyProps> = ({ children, ...props }) => {
  return (
    <MuiTypography {...props}>
      {children}
    </MuiTypography>
  );
};

export default Typography;