import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "x-usuario": localStorage.getItem("usuarioLogado"),
  },
});

export const buscarClientesPeloUsuario = async () => {
  return await api.get(`/clientes`);
};

export const buscarClientePeloId = async (idCliente) => {
  return await api.get(`/clientes/${idCliente}`);
};

export const adicionarCliente = async (cliente) => {
  await api.post("/clientes", cliente);
};

export const atualizarCliente = async (clienteAtualizado) => {
  await api.put("/clientes", clienteAtualizado);
};

export const removerClientePeloId = async (idCliente) => {
  return await api.delete(`/clientes/${idCliente}`);
};
