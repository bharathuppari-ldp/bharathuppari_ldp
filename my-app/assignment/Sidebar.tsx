import MenuItem from "./MenuItems";

interface MenuItemData {
  text: string;
  icon?: string;
}

interface SidebarProps {
  title: string;
  logo?: string;
  items: MenuItemData[];
  activeItem: string;
  setActiveItem: (text: string) => void;
}

// Main Sidebar Component
export default function SideBar({ title , logo , items , activeItem, setActiveItem}: SidebarProps) {
  return (
    <div
      style={{
        width: "260px",
        height: "95vh",
        backgroundColor: "#18181b",
        color: "#e4e4e7",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "1px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Top Section */}
      <div>
        <div style={{ display: "flex", 
          alignItems: "center", 
          gap: "10px", 
          marginBottom: "30px" 
          }}>
            {/* <img
            src="./download.png"
            alt="App Logo"
            style={{ width: "32px", height: "32px", borderRadius: "8px" }}
            /> */}
            <div>{logo}</div>
            <h2>{title}</h2>
        </div>

        {items.map((item) => (
          <MenuItem
          
            key={item.text}
            text={item.text}
            icon={item.icon}
            isActive={activeItem === item.text}
            onClick={() => setActiveItem(item.text)}
          />
        ))}
      </div>

      <div style={{ fontSize: "14px", color: "#a1a1aa" }}>
        ⚡ Watch how to
      </div>
    </div>
  );
}


