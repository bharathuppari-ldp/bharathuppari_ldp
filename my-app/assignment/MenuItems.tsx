
interface MenuItemProps {
  text: string;
  isActive?: boolean;
  icon?: string;
  onClick: () => void;
}
function MenuItem({ text,icon, isActive ,onClick}: MenuItemProps) {
  return (
    <div
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "12px 16px",
        borderRadius: "12px",
        marginBottom: "8px",
        cursor: "pointer",
        backgroundColor: isActive ? "#27272a" : "transparent",
        color: isActive ? "#ffffff" : "#e4e4e7",
      }}
    >
      
     <span>{icon}</span> 
      {/* <img
        src={icon}
        alt={text + " icon"}
        style={{ width: "18px", height: "18px" }}
        /> */}
      <span>{text}</span>
    </div>
  );
}

export default MenuItem;
