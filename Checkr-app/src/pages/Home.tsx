import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 10 }}>
      <Typography variant="h3">Welcome Home!</Typography>
      <Button variant="outlined" sx={{ mt: 2 }} onClick={() => navigate('/')}>
        Go Back to Sign Up
      </Button>
    </Box>
  );
};

export default HomePage;