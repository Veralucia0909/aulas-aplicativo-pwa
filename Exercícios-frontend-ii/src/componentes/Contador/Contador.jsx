import { useState } from "react";
import "./Contador.css";

function Contador() {
  const [valor, setValor] = useState(0);

  return (
    <div className="box contador2">
      <button onClick={() => setValor(valor - 1)}>-</button>
      <span>{valor}</span>
      <button onClick={() => setValor(valor + 1)}>+</button>
    </div>
  );
}

export default Contador;
