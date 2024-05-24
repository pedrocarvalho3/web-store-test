import { createTheme } from "@mui/material"; // Importa a função createTheme do MUI

// Cria um tema personalizado utilizando createTheme
const theme = createTheme({
  breakpoints: {
    // Define valores para os breakpoints (tamanhos de tela)
    values: {
      xs: 0, // Extra small (para telas menores que 460px)
      sm: 460, // Small (para telas maiores ou iguais a 460px)
      md: 680, // Medium (para telas maiores ou iguais a 680px)
      lg: 720, // Large (para telas maiores ou iguais a 720px)
      xl: 900, // Extra large (para telas maiores ou iguais a 900px)
    },
  },
});

export default theme; // Exporta o tema personalizado
