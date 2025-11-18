import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Alarms from "./pages/Alarms";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex bg-[#0a0c14] min-h-screen text-white">
        <Sidebar />
        <main className="ml-64 p-8 w-full">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/devices" element={<Devices />} />
              <Route path="/alarms" element={<Alarms />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}
