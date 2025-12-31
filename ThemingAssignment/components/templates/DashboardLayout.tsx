import { type ReactNode } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../../theme/theme"; // Adjust path as necessary
import Sidebar from "../organisms/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box  display="flex">
        <Sidebar />
        <Box flex={1} p={4} component="main">
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
