import { Box, CardContent, Grid, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import plusIcon from "../../assets/baseline-add-24px.svg";
import minusIcon from "../../assets/baseline-remove-24px.svg";
import { CardCustom, ContentHidden, ProductAction } from "./styles";
import { formatPrice } from "../../utils";
import { updateCount } from "../../store/action";

// Componente de exibição de produtos
export default function Products() {
    // Obtém os produtos do estado global usando useSelector
    const initialStateProducts = useSelector((state) => state.products);
    // Usa o estado local para armazenar os produtos
    const [products, setProducts] = useState(initialStateProducts);

    const dispatch = useDispatch();

    // Função para atualizar a contagem de um produto
    const updateProductCount = (action, id) => {
        // Copia os produtos para evitar mutação direta do estado
        const updatedProducts = [...products];
        // Encontra o índice do produto pelo ID
        const idx = updatedProducts.findIndex((item) => item.id === id);
        
        // Verifica se a contagem é zero antes de decrementar
        if (updatedProducts[idx].count === 0 && action === "minus") return;
        
        // Atualiza a contagem do produto com base na ação
        const updatedItem = {
            ...updatedProducts[idx],
            count: action === "plus" ? updatedProducts[idx].count + 1 : updatedProducts[idx].count - 1,
        };
        
        // Atualiza a lista de produtos com o produto atualizado
        updatedProducts[idx] = updatedItem;
        // Atualiza o estado local com os produtos atualizados
        setProducts(updatedProducts);
    };

    // Função para atualizar o carrinho com a contagem de um produto
    const updateCart = (id, count) => {
        // Despacha a ação para atualizar a contagem do produto no carrinho
        dispatch(updateCount(id, count));
    };

    return (
        <Box mx={1} my={4}>
            {/* Grid para exibir os produtos */}
            <Grid container spacing={1.5}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
                        <CardCustom elevation={0}>
                            {/* Imagem do produto */}
                            <img src={product.image} alt={product.name} className="main-image" />
                            <CardContent className="content">
                                {/* Nome do produto */}
                                <Typography variant="caption" color="#808080" lineHeight={1}>
                                    {product.name}
                                </Typography>
                                {/* Preço do produto */}
                                <Typography variant="h6" fontWeight={700} lineHeight={1.6} color="#696969">
                                    {formatPrice(product.price)}
                                </Typography>
                                {/* Informações adicionais sobre o preço */}
                                <Typography variant="caption" lineHeight={1} color="#C0C0C0">
                                    Em até 12x de {formatPrice(product.price / 12)} <br />
                                    {formatPrice(product.price - product.price / 10)} à vista (10% de desconto)
                                </Typography>
                                {/* Ações do produto (adicionar/remover quantidade) */}
                                <ContentHidden>
                                    <ProductAction>
                                        <button onClick={() => updateProductCount("minus", product.id)}>
                                            <img src={minusIcon} alt="" height={14} />
                                        </button>
                                        <input disabled min="0" value={product.count} />
                                        <button onClick={() => updateProductCount("plus", product.id)}>
                                            <img src={plusIcon} alt="" height={14} />
                                        </button>
                                    </ProductAction>
                                    {/* Botão para adicionar produto ao carrinho */}
                                    <Button variant="contained" onClick={() => updateCart(product.id, product.count)}>
                                        ADICIONAR
                                    </Button> 
                                </ContentHidden>
                            </CardContent>
                        </CardCustom>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
