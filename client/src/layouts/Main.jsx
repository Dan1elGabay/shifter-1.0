import { Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Roles from "../pages/Roles";
import Home from "../pages/Home";
import About from "../pages/About";
import ConatctUs from "../pages/ConatctUs";
import Pricing from "../pages/Pricing";
import UserDashboard from "../pages/UserDashboard";
export default function Main(props) {
  return (
    <div className="Main">
      <Routes>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Users" element={<Users/>}/>
        <Route path="/Roles" element={<Roles/>}/>
        <Route path="*" element={<Error404/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ContactUs" element={<ConatctUs/>} />
        <Route path="/Pricing" element={<Pricing/>} />
        <Route path="/UserDashboard" element={<UserDashboard {...props}/>} />
      </Routes>
    </div>
  );
}
