function exemploData() {
  const agora = new Date();
  agora.getDate(); // Dia
  agora.getMonth(); // Número dia mês ** Começa em 0
  agora.getFullYear(); // Ano
  agora.getHours(); // Hora
  agora.getMinutes(); // Minutos

  agora.getTime(); // mostra o tempo total em milissegundos desde 1 de janeiro de 1970

  const dataNascimento = new Date(1990, 10, 15, 18, 1); // Ano, mês (começa em 0), dia
}
