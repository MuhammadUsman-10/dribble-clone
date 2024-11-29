import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GoPro from "../pages/GoPro";
import Inspiration from "../pages/Inspiration";
import Jobs from "../pages/Jobs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import UserProfile from "../pages/UserProfile";
import ProtectedRoutes from "../Components/UI/ProtectedRoutes";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shots/popular" element={<Inspiration />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="pro" element={<GoPro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userprofile" element={ <ProtectedRoutes> <UserProfile /> </ProtectedRoutes> } />
    </Routes>
  );
};

export default Routers;
