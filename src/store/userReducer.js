// Define o estado inicial do usuário
const initialState = {
  name: "", // Nome do usuário
  email: "", // E-mail do usuário
  gender: "", // Gênero do usuário
};

// Redutor para gerenciar o estado do usuário
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    // Caso de ação para salvar os dados do usuário
    case "SAVE_USER_DATA":
      return action.payload; // Retorna os dados do usuário fornecidos pela ação

    // Caso padrão, retorna o estado atual sem fazer alterações
    default:
      return state; // Retorna o estado atual do usuário
  }
}
