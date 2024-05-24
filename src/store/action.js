// Ação para atualizar a contagem de um produto no carrinho
export const updateCount = (id, count) => ({
  type: "UPDATE_COUNT", // Tipo da ação
  payload: { id, count }, // Dados associados à ação
});

// Ação para redefinir a contagem de todos os produtos no carrinho para zero
export const resetCount = () => ({
  type: "RESET_COUNT", // Tipo da ação
});

// Ação para salvar os dados do usuário
export const saveUserData = (data) => ({
  type: "SAVE_USER_DATA", // Tipo da ação
  payload: data, // Dados associados à ação (dados do usuário)
});
