import React, { useState } from "react";
import { FaUserPlus, FaUsers, FaBell, FaCog, FaThList } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex ${
        isOpen ? "w-64" : "w-16"
      } h-screen bg-gray-800 transition-width duration-300`}
    >
      <button className="text-white p-2" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Open"}
      </button>
      <div className="flex flex-col mt-4">
        <SidebarItem icon={<FaUserPlus />} text="Add Idol" isOpen={isOpen} />
        <SidebarItem icon={<FaThList />} text="View Idol" isOpen={isOpen} />
        <SidebarItem icon={<FaUsers />} text="Users" isOpen={isOpen} />
        <SidebarItem icon={<FaBell />} text="Notifications" isOpen={isOpen} />
        <SidebarItem icon={<FaCog />} text="Settings" isOpen={isOpen} />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, isOpen }) => {
  return (
    <div className="flex items-center text-white p-2 hover:bg-gray-700 transition">
      <div className="text-lg">{icon}</div>
      {isOpen && <span className="ml-2">{text}</span>}
    </div>
  );
};

export default Sidebar;
