// import { ThemeProvider, CssBaseline, Box } from "@mui/material";
// import theme from "./theme/theme";
// import Sidebar from "./Sidebar";
import DashboardLayout from "./components/templates/DashboardLayout";
import { Typography } from "@mui/material";



function App() {
  

  return (
    <>
    <DashboardLayout>
      {/* This content represents the "Page" level */}
      <Typography variant="h4" fontWeight="bold">
        Welcome Home
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={2}>
        Select an option from the sidebar to get started.
      </Typography>
    </DashboardLayout>
    
      
    </>
  )
}

export default App
