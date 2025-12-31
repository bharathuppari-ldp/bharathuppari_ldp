import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0F0F14",
      paper: "#15151C",
    },
    primary: {
      main: "#7C6CF6",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#9CA3AF",
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },

  components: {
    
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          borderRight: "1px solid #23232E",
          backgroundColor: "#15151C",
        },
      },
    },

    
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: 8,
          "&:hover": {
            backgroundColor: "#252536",
          },
        },
      },
      variants: [
        {
          props: { selected: true },
          style: {
            backgroundColor: "#1E1E29",
          },
        },
      ],
    },

    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 36,
          color: "#9CA3AF",
        },
      },
    },

    
    MuiTypography: {
      styleOverrides: {
        root: {
          userSelect: "none",
        },
      },
    },
  },
});

export default theme;
