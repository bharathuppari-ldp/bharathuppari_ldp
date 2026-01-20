import { Box, Paper } from "@mui/material";
import { type ReactNode } from "react";

interface AuthLayoutProps {
  imageSrc: string;
  children: ReactNode;
}

export default function AuthLayout({ imageSrc, children }: AuthLayoutProps) {
  return (
    // 1. Outer Page Background
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="#FAFBFC"
      p={2}
    >
      {/* 2. Main Layout Container */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        // We use 'gap' to represent the distance between Left:195px and Left:741px
        gap="254px" 
        // Ensure container doesn't overflow on smaller screens
        sx={{ 
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: '254px' } // Responsive gap
        }}
      >
        
        {/* Left Side: Illustration */}
        <Box
          display={{ xs: "none", md: "block" }} // Hide on mobile
          component="img"
          src={imageSrc}
          alt="Auth illustration"
          sx={{ 
              // EXACT DIMENSIONS FROM FIGMA
              width: '292px',
              height: '316px',
              objectFit: 'contain',
              opacity: 1,
          }}
        />

        {/* Right Side: The Form Card */}
        <Paper
          elevation={0}
          sx={{
            // EXACT DIMENSIONS & STYLING FROM FIGMA
            width: '480px',
            height: '672px',
            borderRadius: '6px',
            
            // Internal Layout
            p: 5,
            bgcolor: "#FFFFFF",
            boxShadow: "0px 1px 15px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0,0,0,0.02)",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          {children}
        </Paper>

      </Box>
    </Box>
  );
}