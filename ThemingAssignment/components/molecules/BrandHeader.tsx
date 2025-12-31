import { Box, Typography } from "@mui/material";
import LogoMark from "../atoms/LogoMark";

export default function BrandHeader() {
  return (
    <Box display="flex" alignItems="center" gap={1.5} mb={4}>
      <LogoMark />
      <Typography variant="h6" fontWeight={600}>
        Seeder
      </Typography>
    </Box>
  );
}
