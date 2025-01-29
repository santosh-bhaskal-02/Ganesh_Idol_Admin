import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/authentication/Login";
import SignUp from "./components/authentication/SignUp";
import ForgotPassword from "./components/authentication/ForgotPassword";
import LandingPage from "./components/Home/Home.jsx";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="w-full">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Dashboard/*" element={<Dashboard />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/ForgotPassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
