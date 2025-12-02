import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CaseSabores from "./pages/CaseSabores";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-sabores" element={<CaseSabores />} />
   
    </Routes>
  );
}
