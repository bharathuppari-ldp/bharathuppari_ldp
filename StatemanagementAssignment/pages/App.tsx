import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Typography, Container } from "@mui/material";
import theme from "./theme/theme";
import LibraryTabs from "./components/LibraryTabs";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography variant="h4">My Library</Typography>
        <LibraryTabs />
      </Container>
    </ThemeProvider>
  );
};

export default App;


