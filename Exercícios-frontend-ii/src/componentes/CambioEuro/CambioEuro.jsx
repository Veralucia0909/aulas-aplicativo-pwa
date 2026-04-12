import { useState } from "react";
import "./CambioEuro.css";

function CambioEuro() {
  const [real, setReal] = useState("");
  const [euro, setEuro] = useState("");

  function converterReal(valor) {
    setReal(valor);
    setEuro((valor / 5.5).toFixed(2));
  }

  function converterEuro(valor) {
    setEuro(valor);
    setReal((valor * 5.5).toFixed(2));
  }

  return (
    <div className="cambio-euro">
      <h3>Câmbio Euro</h3>

      <input
        type="number"
        placeholder="Valor em Real"
        value={real}
        onChange={(e) => converterReal(e.target.value)}
      />

      <input
        type="number"
        placeholder="Valor em Euro"
        value={euro}
        onChange={(e) => converterEuro(e.target.value)}
      />
    </div>
  );
}

export default CambioEuro;