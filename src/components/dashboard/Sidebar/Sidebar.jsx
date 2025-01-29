import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUserPlus,
  FaUsers,
  FaClipboardList,
  FaTruck,
  FaBell,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="">
      {/* Sidebar */}
      <div
        className={`h-full bg-gradient-to-b from-gray-900 to-gray-700 text-white transition-all duration-300 
          shadow-lg ${isSidebarOpen ? "w-64" : "w-16"}`}
      >
        <button
          onClick={toggleSidebar}
          className="text-white bg-gray-900 p-2 rounded-lg md:hidden z-50"
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {/* Logo or Title */}
        <div className="flex items-center justify-between p-4 border-b border-gray-600">
          <button onClick={toggleSidebar} className="hidden md:block">
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-2">
          <SidebarItem
            to="/dashboard"
            icon={<FaTachometerAlt size={20} />}
            text="Dashboard"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Addidol"
            icon={<FaUserPlus size={20} />}
            text="Add New Idol"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Users"
            icon={<FaUsers size={20} />}
            text="Users"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Orders"
            icon={<FaClipboardList size={20} />}
            text="Orders"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Deliveries"
            icon={<FaTruck size={20} />}
            text="Deliveries"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Notifications"
            icon={<FaBell size={20} />}
            text="Notifications"
            isOpen={isSidebarOpen}
          />
          <SidebarItem
            to="/dashboard/Settings"
            icon={<FaCog size={20} />}
            text="Settings"
            isOpen={isSidebarOpen}
          />
        </ul>
      </div>
    </div>
  );
};

// Sidebar Item Component for Cleaner Code
const SidebarItem = ({ to, icon, text, isOpen }) => {
  const path = useLocation();
  return (
    <li>
      <Link
        to={to}
        className={` flex items-center space-x-4 text-gray-300 hover:bg-gray-700 p-3 rounded-lg transition-all 
        duration-200 ${path.pathname === to ? "bg-gray-600" : ""}`}
      >
        {icon}
        <span
          className={`${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 `}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

export default Sidebar;
