import { useState } from "react";
import "./CalculoIMC.css";

function CalculoIMC() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [status, setStatus] = useState("");

  function calcularIMC() {
    const resultado = peso / (altura * altura);
    setImc(resultado.toFixed(2));

    if (resultado < 18.5) {
      setStatus("Abaixo do peso");
    } else if (resultado < 25) {
      setStatus("Peso normal");
    } else if (resultado < 30) {
      setStatus("Sobrepeso");
    } else {
      setStatus("Obeso");
    }
  }

  return (
    <div className="calculo-imc">
      <h3>Cálculo IMC</h3>

      <input
        type="number"
        placeholder="Peso"
        onChange={(e) => setPeso(e.target.value)}
      />

      <input
        type="number"
        placeholder="Altura"
        onChange={(e) => setAltura(e.target.value)}
      />

      <button onClick={calcularIMC}>
        Calcular IMC
      </button>

      <p>IMC: {imc}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default CalculoIMC;