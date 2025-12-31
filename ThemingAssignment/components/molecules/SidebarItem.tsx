import { type ReactNode } from "react";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  selected: boolean;
  onClick: () => void;
}

export default function SidebarItem({ label, icon, selected, onClick }: SidebarItemProps) {
  return (
    <ListItemButton selected={selected} onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
}