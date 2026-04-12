import { useState } from "react";
import "./RemoverNome.css";

function RemoverNome() {
  const [nomes, setNomes] = useState([
    "Vera",
    "Bruna",
    "Caio",
    "João"
  ]);

  function removerNome(index) {
    const novaLista = nomes.filter((_, i) => i !== index);
    setNomes(novaLista);
  }

  return (
    <div className="remover-nome">
      <ul>
        {nomes.map((nome, index) => (
          <li key={index}>
            {nome}
            <button onClick={() => removerNome(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RemoverNome;