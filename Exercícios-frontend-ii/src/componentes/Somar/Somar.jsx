import { useState } from "react";
import "./Somar.css";

const Somar = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    setResultado(Number(numeroUm) + Number(numeroDois));
    setResultado(+numeroUm + +numeroDois);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Número Um"
        value={numeroUm}
        onChange={(e) => setNumeroUm(e.target.value)}
      />
      +
      <input
        type="number"
        placeholder="Número Dois"
        value={numeroDois}
        onChange={(e) => setNumeroDois(e.target.value)}
      />
      
      <button onClick={calcular}>Somar</button>={resultado}
    
    </>
  );
};

export default Somar;
