import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Companies } from "../pages/companies";
import { Home } from "../pages/home";
import { Suppliers } from "../pages/suppliers";

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
