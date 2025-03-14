import { useSearchParams } from "react-router-dom";

const Categoria = () => {
  const [searchParams] = useSearchParams();
  const tipo = searchParams.get("tipo"); // Captura o parâmetro "tipo" da URL

  // Mock de produtos (substitua por dados reais do backend)
  const produtos = [
    {
      id: 1,
      nome: "Vestido Casual",
      categoria: "Casual",
      imagem: "images/products/casual1.png",
    },
    {
      id: 2,
      nome: "Terno Formal",
      categoria: "Formal",
      imagem: "images/products/formal1.png",
    },
    {
      id: 3,
      nome: "Vestido de Festa",
      categoria: "Party",
      imagem: "images/products/party1.png",
    },
    {
      id: 4,
      nome: "Roupas de Academia",
      categoria: "Gym",
      imagem: "images/products/gym1.png",
    },
  ];

  // Filtrar os produtos pela categoria da URL
  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === tipo
  );

  return (
    <div>
      <h2>Categoria: {tipo}</h2>
      <div className="produtos-grid">
        {produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((produto) => (
            <div key={produto.id} className="produto-item">
              <img src={produto.imagem} alt={produto.nome} />
              <p>{produto.nome}</p>
            </div>
          ))
        ) : (
          <p>Nenhum produto encontrado para esta categoria.</p>
        )}
      </div>
    </div>
  );
};

export default Categoria;
