import { Outlet, NavLink } from "react-router";
import {
  Dashboard as DashboardIcon,
  People,
  CalendarMonth,
  LocalHospital,
  Receipt,
  Inventory2,
  Assessment,
  Menu as MenuIcon,
  Notifications,
  Settings,
  AccountCircle
} from "@mui/icons-material";
import { useState } from "react";

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navItems = [
    { path: "/", label: "Dashboard", icon: <DashboardIcon /> },
    { path: "/patients", label: "Patients", icon: <People /> },
    { path: "/appointments", label: "Appointments", icon: <CalendarMonth /> },
    { path: "/doctors", label: "Doctors", icon: <LocalHospital /> },
    { path: "/billing", label: "Billing", icon: <Receipt /> },
    { path: "/inventory", label: "Inventory", icon: <Inventory2 /> },
    { path: "/reports", label: "Reports", icon: <Assessment /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className={`bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-700 text-white transition-all duration-300 shadow-xl ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between border-b border-white/10 bg-white/5">
          {sidebarOpen && (
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">HealthCare Clinic</h1>
              <p className="text-xs text-blue-100 mt-1">Kochi Medical Center</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-110"
          >
            <MenuIcon />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-4 p-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/20'
                    : 'text-blue-50 hover:bg-white/10 hover:text-white hover:translate-x-1'
                }`
              }
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-50 via-blue-50 to-indigo-50 shadow-md border-b border-indigo-100 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Kochi Medical Center</h2>
              <p className="text-sm text-indigo-700 flex items-center gap-2 mt-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Marine Drive, Kochi, Kerala
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-3 hover:bg-white/60 rounded-xl relative transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                <Notifications className="text-indigo-700" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              <button className="p-3 hover:bg-white/60 rounded-xl transition-all duration-200 hover:scale-105 backdrop-blur-sm">
                <Settings className="text-indigo-700" />
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-indigo-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md">
                  DA
                </div>
                <div>
                  <p className="text-sm font-semibold text-indigo-900">Dr. Admin</p>
                  <p className="text-xs text-indigo-600">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
