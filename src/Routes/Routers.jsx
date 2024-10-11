import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GoPro from "../pages/GoPro";
import Inspiration from "../pages/Inspiration";
import Jobs from "../pages/Jobs";




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shots/popular" element={<Inspiration />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="pro" element={<GoPro />} />
    </Routes>
  );
};

export default Routers;
