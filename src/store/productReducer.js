import { items } from "../db"; // Importa os itens de um banco de dados simulado

// Define o estado inicial como a lista de itens importada
const initialState = items;

// Redutor para gerenciar o estado dos produtos
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // Caso de ação para atualizar a contagem de um produto
    case "UPDATE_COUNT":
      // Mapeia a lista de itens atualizando a contagem do item correspondente
      const newItems = state.map((item) =>
        item.id === action.payload.id
          ? { ...item, count: action.payload.count }
          : item
      );
      return newItems; // Retorna a nova lista de itens atualizada

    // Caso de ação para redefinir a contagem de todos os produtos para zero
    case "RESET_COUNT":
      return initialState; // Retorna o estado inicial (todos os itens com contagem zero)

    // Caso padrão, retorna o estado atual sem fazer alterações
    default:
      return state; // Retorna o estado atual dos produtos
  }
}
