import React from 'react';
import AuthLayout from '../templates/AuthLayout';
import SignUpForm from '../components/organisms/SignUpForm';

// Accessing file directly from the public folder
const HERO_IMAGE = "/Login screen.png"; 

const SignUpPage: React.FC = () => {
  return (
    <AuthLayout imageSrc={HERO_IMAGE}>
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;