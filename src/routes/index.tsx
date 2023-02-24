import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Companies } from "../pages/Companies/Companies";
import { Home } from "../pages/Home";

export const RoutesThree = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BrowserRouter>
  );
};
