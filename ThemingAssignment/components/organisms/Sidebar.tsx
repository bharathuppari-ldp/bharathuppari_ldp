import { useState } from "react";
import { Box, Drawer, List } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchIcon from "@mui/icons-material/Search";

import BrandHeader from "../molecules/BrandHeader";
import SidebarItem from "../molecules/SidebarItem";
import SidebarFooter from "../molecules/SidebarFooter";

const MENU_ITEMS = [
  { key: "home", label: "Home", icon: <HomeOutlinedIcon /> },
  { key: "cash", label: "Cash Acceleration", icon: <SearchIcon /> },
] as const;

type MenuKey = typeof MENU_ITEMS[number]["key"];

// Must match the width defined in your theme.ts
const DRAWER_WIDTH = 280; 

export default function Sidebar() {
  const [selected, setSelected] = useState<MenuKey>("home");

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0, 
      }}
    >
      <Box p={3} display="flex" flexDirection="column" height="100%">
        <BrandHeader />

        <List>
          {MENU_ITEMS.map((item) => (
            <SidebarItem
              key={item.key}
              label={item.label}
              icon={item.icon}
              selected={selected === item.key}
              onClick={() => setSelected(item.key)}
            />
          ))}
        </List>

        <SidebarFooter />
      </Box>
    </Drawer>
  );
}