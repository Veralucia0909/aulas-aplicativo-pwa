import { useState } from "react";
import "./Multiplicar.css";


const Multiplicar = () => {
  const [numeroUm, setNumeroUm] = useState("");
  const [numeroDois, setNumeroDois] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    setResultado(+numeroUm * +numeroDois);
  };

  return (
    <>
      <input
        type="number"
        placeholder="Número Um"
        value={numeroUm}
        onChange={(e) => setNumeroUm(e.target.value)}
      />
      *
      <input
        type="number"
        placeholder="Número Dois"
        value={numeroDois}
        onChange={(e) => setNumeroDois(e.target.value)}
      />
      <button onClick={calcular}>Multiplicar</button>={resultado}
    </>
  );
};

export default Multiplicar;