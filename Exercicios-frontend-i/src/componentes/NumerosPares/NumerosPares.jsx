import './NumerosPares.css';

function NumerosPares({numeros}) {

  const pares = numeros.filter(num => num % 2 === 0);

  return (
    <ul className="numeros-pares">
      {pares.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}

export default NumerosPares;
