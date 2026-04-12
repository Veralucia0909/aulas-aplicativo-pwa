import './NumerosImpares.css';

function NumerosImpares({numeros}) {

  const impares = numeros.filter(num => num % 2 !== 0);

  return (
    <ul className="numeros-impares">
      {impares.map((n, index) => (
        <li key={index}>{n}</li>
      ))}
    </ul>
  );
}

export default NumerosImpares;