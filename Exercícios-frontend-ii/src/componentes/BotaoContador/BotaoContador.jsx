import { useState } from "react";
import "./BotaoContador.css";

function BotaoContador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  return (
    <div className="botao-contador">
      <button onClick={incrementar}>
        Contador é: {contador}
      </button>
    </div>
  );
}

export default BotaoContador;