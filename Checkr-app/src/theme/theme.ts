import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#224DFF', // Vibrant Blue (Matches Screenshot 145)
    },
    text: {
      primary: '#1A1C21',
      secondary: '#6F727A', // Slightly darker grey for subtitles
    },
    action: {
      disabledBackground: '#9EAFFE', // Light Periwinkle (Matches Screenshot 144)
      disabled: '#ffffff', // Keeps text white when disabled!
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      color: '#1A1C21',
      fontSize: '24px',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '14px',
      color: '#333333', 
      marginBottom: '6px',
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      fontSize: '16px',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px', // Slightly squarer corners as per UI
          padding: '12px 0',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#1939B7', // Darker shade on hover
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
             backgroundColor: '#9EAFFE', // Explicitly applying the disabled color
             color: '#ffffff'
          }
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          backgroundColor: '#FFFFFF', 
          '& fieldset': {
            borderColor: '#E0E0E0',
          },
          '&:hover fieldset': {
            borderColor: '#BDBDBD',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#224DFF',
          },
        },
        input: {
          padding: '10px 14px',
        }
      },
    },
    MuiCheckbox: {
        styleOverrides: {
            root: {
                color: '#C7C7C7', // Grey when unchecked
                '&.Mui-checked': {
                    color: '#224DFF', // Blue when checked
                }
            }
        }
    }
  },
});

export default theme;