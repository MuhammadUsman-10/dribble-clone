import { Navigate, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CardsListing from "../pages/CardsListing";




const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cards" element={<CardsListing />} />
    </Routes>
  );
};

export default Routers;
