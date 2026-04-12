import "./TamanhoTexto.css";

function TamanhoTexto({texto}) {
  return (
    <div className="tamanhoTexto">
      Tamanho: {texto.length}
    </div>
  );
}

export default TamanhoTexto;