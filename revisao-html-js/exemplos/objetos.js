function exemploObjetos() {
  const pessoa = {
    nome: "João",
    idade: 30,
    dataNascimento: new Date(1994, 5, 15),
    endereco: {
      rua: "Rua A",
      numero: 123,
    },
  };

  console.log("Pessoa:", pessoa);
  console.log("Nome:", pessoa.nome);
  console.log("Idade:", pessoa.idade);
  console.log("Data de Nascimento:", pessoa.dataNascimento);
  console.log("Endereço:", pessoa.endereco);

  // substitui o valor do objeto pessoa
  pessoa.nome = "Maria";
  console.log("Pessoa após alteração:", pessoa);
  // nova propriedade
  pessoa.email = "teste@mail.com";

  console.log("Tipo Pessoa:", pessoa.tipoPessoa);

  pessoa.nome = true;
  console.log("Pessoa após alteração do tipo:", pessoa);

  // remover a propriedade do objeto
  // não é recomendado, pois pode causar problemas de referência
  // delete pessoa.idade;
  const {
    idade,
    endereco: { rua, ...restEndereco },
    ...copiaPessoa
  } = pessoa;
  console.log("Pessoa após remoção da idade:", {
    ...copiaPessoa,
    endereco: restEndereco,
  });

  console.clear();

  const nome = "Thiago";
  nome.length; // 6
  nome.replace("Th", "T"); // Tiago

  const altura = 1.8;

  altura.toString(); // '1.8'
  console.log(altura.toString());
  altura.toFixed(); // '2'
  console.log(altura.toFixed());
}
