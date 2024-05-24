// Função para calcular o total da compra
export const calcTotal = (products) =>
  // Reduz a lista de produtos para calcular o total
  products.reduce((sum, product) => (sum += product.count * product.price), 0);

// Função para formatar o preço como moeda brasileira (BRL)
export const formatPrice = (price) =>
  // Formata o preço usando o formato de moeda brasileira (BRL)
  price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
