import './Multiplicacao.css';

function Multiplicacao({num1, num2}) {
  return (
    <div className="multiplicacao">
      Resultado: {num1 * num2}
    </div>
  );
}

export default Multiplicacao;