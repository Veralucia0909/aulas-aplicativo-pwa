export const buscarUsuarioLogado = () => {
  const idUsuarioLogado = localStorage.getItem("usuarioLogado");

  if (!idUsuarioLogado) {
    return null;
  }

  const usuariosDoLocalStorage = JSON.parse(localStorage.getItem("usuarios")) || [];

  return usuariosDoLocalStorage.find((u) => u.id === idUsuarioLogado) || null;
};