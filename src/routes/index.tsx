import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Companies } from "../pages/Companies/Index";
import { Home } from "../pages/Home/index";
import { Suppliers } from "../pages/Suppliers/index";

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
