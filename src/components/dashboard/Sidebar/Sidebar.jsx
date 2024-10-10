// src/Sidebar.js
import React from "react";
import {
  FaPlus,
  FaEye,
  FaUsers,
  FaEnvelope,
  FaCog,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItems = [
    { name: "Add New Idol", icon: <FaPlus />, link: "/add-idol" },
    { name: "View Idol", icon: <FaEye />, link: "/view-idol" },
    { name: "Users", icon: <FaUsers />, link: "/users" },
    { name: "Messages", icon: <FaEnvelope />, link: "/messages" },
    { name: "Settings", icon: <FaCog />, link: "/settings" },
    {
      name: "Forgot Password",
      icon: <FaSignInAlt />,
      link: "/admin-forgot-password",
    },
    { name: "Admin Logout", icon: <FaSignOutAlt />, link: "/admin-logout" },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64">
      <div className="flex items-center justify-center h-16 bg-gray-900 text-2xl font-bold">
        Ganesh Museum
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-2 mt-4">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="flex items-center p-4 hover:bg-gray-700 transition-colors"
              >
                <span className="mr-3">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
