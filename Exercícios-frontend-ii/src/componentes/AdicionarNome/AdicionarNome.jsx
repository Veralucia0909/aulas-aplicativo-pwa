import { useState } from "react";
import "./AdicionarNome.css";

function AdicionarNome() {
  const [nome, setNome] = useState("");
  const [lista, setLista] = useState([]);

  function adicionar() {
    setLista([...lista, nome]);
    setNome("");
  }

  return (
    <div className="nomes">
      <h3>Adicionar Nome</h3>

      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <button onClick={adicionar}>Adicionar</button>

      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdicionarNome;