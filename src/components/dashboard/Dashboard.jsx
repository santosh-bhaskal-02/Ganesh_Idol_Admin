import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Addidol from "./Sidebar/Addidol";
import AddCategory from "./Sidebar/AddCategory";
import Users from "./Sidebar/Users";
import Notifications from "./Sidebar/Notifications";
import Settings from "./Sidebar/Settings";
import Orders from "./Sidebar/Orders";
import Deliveries from "./Sidebar/Deliveries";
import HomeDashboard from "./homedashboard/HomeDashboard";
const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-full justify-center items-center">
        <Routes>
          <Route path="/" element={<HomeDashboard />}></Route>
          <Route path="/Addidol" element={<Addidol />}></Route>
          <Route path="/AddCategory" element={<AddCategory />}></Route>
          <Route path="/Users" element={<Users />}></Route>
          <Route path="/Notifications" element={<Notifications />}></Route>
          <Route path="/Settings" element={<Settings />}></Route>
          <Route path="/Orders" element={<Orders />}></Route>
          <Route path="/Deliveries" element={<Deliveries />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
