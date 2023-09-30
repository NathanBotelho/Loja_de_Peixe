import React from "react";
import { Link } from "react-router-dom"; // Importa o componente Link do React Router
import "../styles/Home.css"; // Importa o estilo CSS para este componente

function Home() {
  // Dados fictícios da lista de lojas
  const stores = [
    {
      id: 1,
      name: "Peixes de água ácida",
      description: "Água ácida é aquela que tem um PH menor que 7.0"
    },
    {
      id: 2,
      name: "Peixes de água neutra",
      description: "Água se mantem no 7.0"
    },
    {
      id: 3,
      name: "Peixes de água alcalina",
      description: "Água alcalina é aquela que tem um PH maior que 7.0"
    }
  ];

  return (
    <div>
      <h2>Escolha o tipo de peixe que você quer:</h2>
      <ul className="store-list">
        {stores.map((store) => (
          <li className="store-item" key={store.id}>
            <h3 className="store-name">{store.name}</h3>
            <p className="store-description">{store.description}</p>
            <Link to={`/store/${store.id}`} className="store-link">
              Ver mais
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
