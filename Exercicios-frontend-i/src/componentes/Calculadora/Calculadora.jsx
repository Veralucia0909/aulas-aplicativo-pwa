
import './Calculadora.css';

function Calculadora({num1, num2, operacao}) {

  let resultado;

  switch(operacao){
    case "soma":
      resultado = num1 + num2;
      break;

    case "subtracao":
      resultado = num1 - num2;
      break;

    case "multiplicacao":
      resultado = num1 * num2;
      break;

    case "divisao":
      resultado = num1 / num2;
      break;

    default:
      resultado = "Operação inválida";
  }

  return (
    <div className="calculadora">
      Resultado: {resultado}
    </div>
  );
}

export default Calculadora;