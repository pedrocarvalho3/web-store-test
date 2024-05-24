import React from "react"; // Importa o React
import ReactDOM from "react-dom/client"; // Importa o ReactDOM
import App from "./App.jsx"; // Importa o componente App
import "./index.css"; // Importa o arquivo CSS
import { Provider } from "react-redux"; // Importa o Provider do Redux
import { store } from "./store/store.js"; // Importa a loja Redux

// Renderiza o componente App dentro do elemento com o ID "root" no HTML
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Provedor Redux envolvendo o componente App */}
    <Provider store={store}>
      {/* Componente App */}
      <App />
    </Provider>
  </React.StrictMode>
);
