import { useState, useEffect } from "react";
import { MdAddCircle, MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Avatar from "../../componentes/Avatar/Avatar";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import normalizarString from "../../utils/normalizarString";
import "./ListaClientes.css";
import { useAppContext } from "../../contexto/AppContext";
import { buscarClientesPeloUsuario, removerClientePeloId } from "../../servicos/clientes";

function ListaClientes() {
  const navigate = useNavigate();
  const { usuarioLogado } = useAppContext();

  const [termoBusca, setTermoBusca] = useState("");
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const getClientes = async () => {
      const { data } = await buscarClientesPeloUsuario(usuarioLogado.id);
      setClientes(data);
    };

    getClientes();
  }, [usuarioLogado.id]);

  const removerCliente = async (clienteParaRemover) => {
    if (confirm(`Tem certeza que deseja remover o cliente ${clienteParaRemover.nome} ?`)) {
      await removerClientePeloId(clienteParaRemover.id);
      document.location.reload()
    }
  };

  const clientesFiltrados = clientes.filter(
    (cliente) =>
      normalizarString(cliente.nome).includes(normalizarString(termoBusca)) ||
      // normalizarString(cliente.cpf).includes(normalizarString(termoBusca)) ||
      normalizarString(cliente.cidade).includes(normalizarString(termoBusca))
  );

  return (
    <Principal titulo="Lista de Clientes" voltarPara="/">
      <CampoCustomizado
        type="search"
        placeholder="Buscar Cliente pelo nome, CPF ou cidade."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />

      {clientesFiltrados.map((cliente) => {
        return (
          <div key={cliente.id} className="lista-clientes__item">
            <div className="lista-clientes__item-informacoes">
              <Avatar nome={cliente.nome} imagem={cliente.foto} />

              {cliente.nome}
            </div>
            <div>
              <MdEdit size={24} onClick={() => navigate(`/cadastro-cliente/${cliente.id}`)} />
              <MdDelete size={24} color="red" onClick={() => removerCliente(cliente)} />
            </div>
          </div>
        );
      })}

      {clientesFiltrados.length === 0 && (
        <p className="lista-clientes__mensagem-vazia">Nenhum cliente encontrado.</p>
      )}

      <MdAddCircle
        className="lista-clientes__botao-adcionar"
        size={64}
        color="#ff9100"
        onClick={() => navigate("/cadastro-cliente")}
      />
    </Principal>
  );
}

export default ListaClientes;
