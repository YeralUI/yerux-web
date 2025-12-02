import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CaseSabores from "./pages/CaseSabores";
import CaseTicteams from "./pages/CaseTicteams";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-sabores" element={<CaseSabores />} />
      <Route path="/case-ticteams" element={<CaseTicteams />} />
   
    </Routes>
  );
}
