import "./soma.css";

function Soma({num1, num2}) {
  return (
    <div className="soma">
      Resultado: {num1 + num2}
    </div>
  );
}

export default Soma;