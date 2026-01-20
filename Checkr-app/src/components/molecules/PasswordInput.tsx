

import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Typography, Box, type TextFieldProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordInputProps extends Omit<TextFieldProps, 'variant' | 'onChange'> {
  label: string;
  // Custom onChange that returns the string value directly
  onChange?: (value: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ label, onChange, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  
  // Internal state for masking logic
  const [realValue, setRealValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    let updatedRealValue = realValue;

    // Logic to calculate real value based on typing stars
    if (val.length > displayValue.length) {
      // Character added
      const newChars = val.slice(displayValue.length);
      updatedRealValue = realValue + newChars;
    } else if (val.length < displayValue.length) {
      // Character removed
      const diff = displayValue.length - val.length;
      updatedRealValue = realValue.slice(0, -diff);
    } else {
        // No length change (rare edge case in this context)
        return; 
    }

    setRealValue(updatedRealValue);
    
    // Notify Parent of the REAL value
    if (onChange) {
        onChange(updatedRealValue);
    }
  };

  // Sync display value (stars vs text)
  React.useEffect(() => {
    if (showPassword) {
      setDisplayValue(realValue);
    } else {
      setDisplayValue('*'.repeat(realValue.length));
    }
  }, [realValue, showPassword]);

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <Typography variant="subtitle2" color={props.error ? "error" : "textPrimary"}>
        {label}
      </Typography>
      
      <TextField
        fullWidth
        type="text" // Keeps it as text to show stars
        variant="outlined"
        value={displayValue}
        onChange={handlePasswordChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                sx={{ color: '#9E9E9E' }} 
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        {...props}
      />
    </Box>
  );
};

export default PasswordInput;