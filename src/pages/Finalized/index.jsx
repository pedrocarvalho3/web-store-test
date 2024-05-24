import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { calcTotal, formatPrice } from "../../utils";
import { Price, StyledWrapper, StyledContentWrapper } from "./styles";
import purchase from "../../assets/purchase.png";
import { resetCount } from "../../store/action";

// Componente da página de compra finalizada
export default function FinalizedPage() {
    // Hook para navegação
    const navigate = useNavigate();
    // Seleciona dados do usuário do estado global
    const user = useSelector((state) => state.user);
    // Seleciona produtos do estado global
    const products = useSelector((state) => state.products);
  
    const dispatch = useDispatch();
  
    // Calcula o total da compra
    const total = calcTotal(products);
  
    // Função para voltar à página inicial
    function goBack() {
        // Reseta a contagem dos produtos no carrinho
        dispatch(resetCount());
        // Navega de volta à página inicial
        return navigate("/");
    }
  
    return (
        // Wrapper estilizado
        <StyledWrapper>
            {/* Wrapper do conteúdo estilizado */}
            <StyledContentWrapper>
                {/* Título da página */}
                <Typography variant="h4" fontWeight={700} lineHeight={2}>
                    {user.name},
                </Typography>
                {/* Mensagem de confirmação da compra */}
                <Typography variant="h6" fontWeight={700}>
                    Sua compra no valor de <Price>{formatPrice(total)}</Price>
                    <br />
                    foi finalizada com sucesso
                </Typography>
                {/* Imagem de compra */}
                <Box m={4} mr={2} alignItems="center">
                    <img src={purchase} alt="" />
                </Box>
                {/* Botão para iniciar uma nova compra */}
                <Button
                    size="large"
                    variant="contained"
                    color="warning"
                    onClick={goBack}
                >
                    INICIAR NOVA COMPRA
                </Button>
            </StyledContentWrapper>
        </StyledWrapper>
    );
}
