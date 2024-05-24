import { Box, Container } from "@mui/material";
import Title from "../../components/Title";
import Products from "../../components/Products";
import Form from "../../components/Form";

// Página inicial
export default function Home() {
    return (
        // Container com largura máxima extra grande
        <Container maxWidth="xl">
            <Box mt={4}>
                {/* Cabeçalho para a seção de produtos */}
                <Title title="Produtos" />
                {/* Componente de exibição de produtos */}
                <Products />
                {/* Cabeçalho para a seção de dados do cliente */}
                <Title title="Dados do Cliente" />
                {/* Componente de formulário */}
                <Form />
            </Box>
        </Container>
    );
}
