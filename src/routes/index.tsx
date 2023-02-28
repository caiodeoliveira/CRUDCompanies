import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Companies } from "../pages/Companies/Companies";
import { Home } from "../pages/Home";
import { Suppliers } from "../pages/Suppliers";

export const RoutesThree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/suppliers" element={<Suppliers />} />
      </Routes>
    </BrowserRouter>
  );
};
