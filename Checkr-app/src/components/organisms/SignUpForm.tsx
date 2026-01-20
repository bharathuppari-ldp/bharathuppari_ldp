
import React, { useState } from 'react';
import { Box, FormControlLabel, Stack, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import api from '../../services/api';

import Button from '../atoms/Button';
import Typography from '../atoms/Typography'; 
import Checkbox from '../atoms/Checkbox';
import Link from '../atoms/Link';

import PasswordInput from '../molecules/PasswordInput';
import TextInput from '../molecules/TextInput';

const SignUpForm: React.FC = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [isAgreed, setIsAgreed] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleFieldChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', password: '', confirmPassword: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
        newErrors.email = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
    }

    if (!formData.password) {
        newErrors.password = 'Password is required';
        isValid = false;
    } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
        isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = async () => {
    if (validate()) {
        try {
            const response = await api.post('/users', {
                id: crypto.randomUUID(), 
                email: formData.email,
                password: formData.password 
            });

            if (response.status === 201 || response.status === 200) {
                console.log("User added:", response.data);
                navigate('/home');
            } 
        } catch (error: unknown) {
            console.error("Error connecting to server:", error);
            setSubmitError('Failed to sign up. Is the server running?');
        }
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 400, p: 2 }}>
      
      <Typography variant="h4" sx={{ mb: 1, color: '#1A1C21', fontWeight: 600 }}>
        Sign up
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Please sign up to start exploring the platform
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>{submitError}</Alert>
      )}

      <Stack spacing={0}>
        <TextInput 
            label="Email" 
            placeholder="abc@gmail.com" 
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
        />
        
        <PasswordInput 
            label="Password" 
            onChange={(value) => handleFieldChange('password', value)}
            error={!!errors.password}
            helperText={errors.password}
        />
        
        <PasswordInput 
            label="Confirm Password" 
            onChange={(value) => handleFieldChange('confirmPassword', value)}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
        />

        <FormControlLabel
          
          control={
            <Checkbox 
                name="agree" 
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
            />
          }
          label={
            <Typography variant="body2" color="textSecondary">
              I agree to the 
              <Link href="#" sx={{ ml: 0.5 }}>
                 Privacy Policy
              </Link>
            </Typography>
          }
          sx={{ mt: 0, mb: 3 }}
        />

        <Button 
            label="Sign up" 
            onClick={handleSignUp} 
            disabled={!isAgreed} 
        />

        <Typography variant="body2" align="center" sx={{ mt: 3, color: '#666' }}>
          Already a member?{' '}
          <Link 
            component="button" 
            variant="body2" 
            onClick={() => navigate('/signin')}
            sx={{ textDecoration: 'none' }}
          >
            Sign in
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignUpForm;