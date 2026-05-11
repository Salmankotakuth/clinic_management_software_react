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
      <aside className={`bg-blue-900 text-white transition-all duration-300 ${sidebarOpen ? 'w-64' : 'w-20'}`}>
        <div className="p-4 flex items-center justify-between border-b border-blue-800">
          {sidebarOpen && <h1 className="font-bold text-xl">HealthCare Clinic</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-blue-800 rounded-lg"
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
                `flex items-center gap-4 p-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-100 hover:bg-blue-800'
                }`
              }
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {sidebarOpen && <span>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">Kochi Medical Center</h2>
              <p className="text-sm text-gray-600">Marine Drive, Kochi, Kerala</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Notifications className="text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Settings className="text-gray-600" />
              </button>
              <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <AccountCircle className="text-gray-600 text-3xl" />
                <div>
                  <p className="text-sm font-medium text-gray-800">Dr. Admin</p>
                  <p className="text-xs text-gray-500">Administrator</p>
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
