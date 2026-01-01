import { Box, Typography } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";

export default function SidebarFooter() {
  return (
    <Box mt="auto" color="text.secondary" display="flex" gap={1}>
      <BoltIcon fontSize="small" />
      <Typography variant="body2">Watch how to</Typography>
    </Box>
  );
}
