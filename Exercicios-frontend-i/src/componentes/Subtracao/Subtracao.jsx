
import "./Subtracao.css";

function Subtracao({num1, num2}) {
  return (
    <div className="subtracao">
      Resultado: {num1 - num2}
    </div>
  );
}

export default Subtracao;