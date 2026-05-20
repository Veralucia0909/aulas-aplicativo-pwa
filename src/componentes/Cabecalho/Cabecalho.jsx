import { useAppContext } from "../../componentes/contexto/AppContext";
import Avatar from "../Avatar/Avatar";
import "./Cabecalho.css";


function Cabecalho() {
  const { usuarioLogado } = useAppContext();

  return (
    <header className="cabecalho__root">
      <img src="/logo.png" height="32" alt="Logo" />
      {usuarioLogado && <Avatar nome={usuarioLogado.nome} />}
    </header>
  );
}

export default Cabecalho;