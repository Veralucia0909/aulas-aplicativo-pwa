function exemploFuncao() {
  function mostrarAnoAtual() {
    alert("Estamos no ano: " + new Date().getFullYear());
  }

  //   mostrarAnoAtual();

  function saudacaoPersonalizada(nome, sobrenome) {
    alert(`Olá ${nome} ${sobrenome}, bem-vindo!! ${new Date().getFullYear()}`);
  }
  saudacaoPersonalizada("João", "Silva", "Teste");

  function meuComponente({ nome, sobrenome }) {
    console.log("Nome é: " + nome);
    console.log("Sobrenome é: " + sobrenome);
  }

  meuComponente({ nome: "João", sobrenome: "Silva" });

  function calcularMedia(numeroUM, numeroDOIS) {
    if (isNaN(numeroUM) || isNaN(numeroDOIS)) {
      console.error("Por favor, insira apenas números para calcular a média.");
      return null;
    }

    if (numeroUM < 0 || numeroDOIS < 0) {
      console.error(
        "Por favor, insira apenas números positivos para calcular a média.",
      );
      return null;
    }

    if (numeroUM > 10 || numeroDOIS > 10) {
      console.error(
        "Por favor, insira apenas números menores ou iguais a 100 para calcular a média.",
      );
      return null;
    }

    return (numeroUM + numeroDOIS) / 2;
  }

  const media = calcularMedia(10, "teste");

  // ARROW FUNCTION
  const mostrarAnoAtualArrow = () => {
    alert("Estamos no ano: " + new Date().getFullYear());
  };
  mostrarAnoAtualArrow();

  const saudacaoPersonalizadaArrow = (nome) => {
    return `Olá ${nome}, bem-vindo!!`;
  };
  saudacaoPersonalizadaArrow("João");

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Filtrando apenas os números pares
  // const numerosPares = numeros.filter(numero => numero % 2 === 0);

  //   const numerosPares = numeros.filter((numero) => {
  //     return numero % 2 === 0;
  //   });

  function filtrarNumerosPares(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  const numerosPares = numeros.filter(filtrarNumerosPares);

  console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

  const pessoas = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 17 },
    { nome: "Ana", idade: 20 },
  ];
  // Filtrando apenas as pessoas com idade maior ou igual a 18 anos
  const pessoasMaioresDeIdade = pessoas.filter((pessoa) => pessoa.idade >= 18);
  console.log(pessoasMaioresDeIdade);
}
