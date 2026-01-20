import React from 'react';
import { TextField, Typography, Box, type TextFieldProps } from '@mui/material';

interface TextInputProps extends Omit<TextFieldProps, 'variant'> {
  label: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="subtitle2" color={props.error ? "error" : "textPrimary"}>
        {label}
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        {...props} 
      />
    </Box>
  );
};

export default TextInput;