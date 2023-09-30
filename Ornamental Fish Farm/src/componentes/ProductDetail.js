import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Importe o hook useNavigate
import "../styles/ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams(); // Obtém o parâmetro productId da URL
  const navigate = useNavigate(); // Use o hook useNavigate para navegação entre rotas

  const product = {
    id: productId,
    name: "Peixes ",
    description: "Sem no estoque " + "."
  };

  const handleBack = () => {
    // Use navigate para voltar para a página da loja com o ID correto
    navigate(`/store/${product.id}`);
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      {/* Adicione o ID da loja à rota de volta para a loja */}
      <button onClick={handleBack} className="back-button">
        Voltar para a lista de peixes
      </button>
    </div>
  );
}

export default ProductDetail;
