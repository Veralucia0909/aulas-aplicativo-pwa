import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppContext } from "../../componentes/contexto/AppContext";
import { buscarUsuarioLogado } from "../../servicos/usuarios";

function ValidarAutenticacao() {
  const navigate = useNavigate();
  const { setUsuarioLogado } = useAppContext();

  const usuarioLogado = buscarUsuarioLogado();

  useEffect(() => {
    if (!usuarioLogado) {
      navigate("/login");
    }
    setUsuarioLogado(usuarioLogado);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, setUsuarioLogado]);

  return usuarioLogado ? <Outlet /> : null;
}

export default ValidarAutenticacao;