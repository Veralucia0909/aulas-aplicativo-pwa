import { useState } from "react";
import "./CambioDolar.css";

function CambioDolar() {
  const [real, setReal] = useState("");
  const [dolar, setDolar] = useState("");

  function converterReal(valor) {
    setReal(valor);
    setDolar((valor / 5).toFixed(2));
  }

  function converterDolar(valor) {
    setDolar(valor);
    setReal((valor * 5).toFixed(2));
  }

  return (
    <div className="cambio-dolar">
      <h3>Câmbio Dólar</h3>

      <input
        type="number"
        placeholder="Valor em Real"
        value={real}
        onChange={(e) => converterReal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor em Dólar"
        value={dolar}
        onChange={(e) => converterDolar(e.target.value)}
      />
    </div>
  );
}

export default CambioDolar;
