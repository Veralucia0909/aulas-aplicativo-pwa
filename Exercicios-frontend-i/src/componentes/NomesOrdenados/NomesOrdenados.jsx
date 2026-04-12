import './NomesOrdenados.css';

function NomesOrdenados({nomes}) {

  const ordenados = [...nomes].sort();

  return (
    <ol className="nomes-ordenados">
      {ordenados.map((nome, index) => (
        <li key={index}>{nome}</li>
      ))}
    </ol>
  );
}

export default NomesOrdenados;