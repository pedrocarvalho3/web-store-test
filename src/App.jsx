import { BrowserRouter } from "react-router-dom"; // Importa o BrowserRouter para o roteamento
import { ThemeProvider } from "@mui/material"; // Importa o ThemeProvider para o tema
import theme from "./theme"; // Importa o tema personalizado
import Routes from "./Routes"; // Importa o componente de rotas

// Componente principal da aplicação
function App() {
  return (
    // Provedor do tema para toda a aplicação
    <ThemeProvider theme={theme}>
      {/* BrowserRouter para gerenciar as rotas da aplicação */}
      <BrowserRouter>
        {/* Componente de rotas para definir as diferentes páginas */}
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App; // Exporta o componente principal da aplicação
