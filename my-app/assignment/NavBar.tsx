import {useState} from "react";
import SideBar from "./Sidebar.tsx";

function NavBar() {

const [activeItem, setActiveItem] = useState("Home");

const menuItems = [
  { text: "Home", icon: "🏠"},
  { text: "Cash Acceleration",icon: "💰"},
  
];

  return(
  <SideBar title="Sedeer" logo="📊" items={menuItems} activeItem={activeItem} setActiveItem={setActiveItem} />
  );
}

// 🏠 💰 📊

export default NavBar;


