import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
    text: {
      primary: "#03314B",
      secondary: "#6D787E",
    },
  },

  typography: {
    fontFamily: "Cera Pro, Arial, sans-serif",
    h4: {
      fontSize: "24px",
      fontWeight: 700,
      marginBottom: "24px",
    },
  },

  components: {
    /* -------- Global container alignment -------- */
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1200px",
          paddingLeft: "80px",
          paddingRight: "80px",
        },
      },
    },

    /* -------- Tabs spacing -------- */
    MuiTabs: {
      styleOverrides: {
        root: {
          marginBottom: "32px",
        },
      },
    },

    /* -------- Card -------- */
    MuiCard: {
      styleOverrides: {
        root: {
          width: "260px",
          borderRadius: "8px",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;


