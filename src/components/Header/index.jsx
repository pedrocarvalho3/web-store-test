import { Box, Typography } from "@mui/material";

// Componente de cabeçalho
export default function Header({ title }) {
    return (
        <Box marginY={2}>
            {/* Título */}
            <Typography
                variant="h4"
                fontWeight="500"
                borderBottom={1} // Adiciona uma borda na parte inferior do texto
                borderColor="lightgray" // Define a cor da borda
                lineHeight={1.8} // Define a altura da linha para melhorar a legibilidade
            >
                {title} {/* O título é passado como propriedade */}
            </Typography> 
        </Box>
    )
}
