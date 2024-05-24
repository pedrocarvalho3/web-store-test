import { combineReducers, createStore } from "redux"; // Importa funções Redux necessárias
import { reducer as formReducer } from "redux-form"; // Importa o redutor do Redux Form

import productReducer from "./productReducer"; // Importa o redutor de produtos
import userReducer from "./userReducer"; // Importa o redutor de usuário

// Combina os redutores em um único redutor raiz
const rootReducer = combineReducers({
  products: productReducer, // Redutor de produtos
  user: userReducer, // Redutor de usuário
  form: formReducer, // Redutor do Redux Form
});

// Cria a loja Redux com o redutor raiz combinado
export const store = createStore(rootReducer);
