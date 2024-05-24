import { Route, Routes } from "react-router-dom"; // Importa Route e Routes do react-router-dom
import Home from "./pages/Home"; // Importa o componente Home
import Finalized from "./pages/Finalized"; // Importa o componente Finalized

// Componente que define as rotas da aplicação
export default function ProjectRoutes() {
  return (
    // Define as rotas da aplicação
    <Routes>
      {/* Rota para a página inicial */}
      <Route path="/" element={<Home />} />
      {/* Rota para a página de compra finalizada */}
      <Route path="/finalized" element={<Finalized />} />
    </Routes>
  );
}
