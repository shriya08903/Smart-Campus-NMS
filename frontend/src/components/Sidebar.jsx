import { Link, useLocation } from "react-router-dom";
import { Activity, Network, AlertTriangle, Settings, Radio } from "lucide-react";

export default function Sidebar() {
  const location = useLocation();

  const menu = [
    { label: "Dashboard", path: "/", icon: <Activity /> },
    { label: "Devices", path: "/devices", icon: <Network /> },
    { label: "Alarms", path: "/alarms", icon: <AlertTriangle /> },
    { label: "Settings", path: "/settings", icon: <Settings /> },
  ];

  return (
    <aside className="fixed left-0 top-0 w-64 h-screen bg-[#0f121a] border-r border-blue-900/40 p-6">
      <div className="flex items-center gap-3 mb-10">
        <Radio className="text-neon animate-pulse" />
        <h1 className="text-2xl font-bold text-neon">NMS</h1>
      </div>

      {menu.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all text-white 
            ${location.pathname === item.path ? "bg-blue-600/30 neon-card" : "hover:bg-blue-600/10"}
          `}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </aside>
  );
}
