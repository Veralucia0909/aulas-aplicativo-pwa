function exemploArray() {
  const numeros = [1, 2, 3, 4, 5];

  // Acessando elementos do array
  console.log(numeros[0]); // Saída: 1
  console.log(numeros[2]); // Saída: 3
  console.log(numeros.length); // Saída: 5

  const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

  // Acessando elementos do array
  console.log(frutas[0]); // Saída: Maçã
  console.log(frutas[3]); // Saída: Morango
  console.log(frutas.length); // Saída: 4

  const pessoas = [
    { nome: "João", idade: 30 },
    { nome: "Maria", idade: 25 },
    { nome: "Pedro", idade: 35 },
  ];

  // Acessando elementos do array
  console.log(pessoas[0].nome); // Saída: João
  console.log(pessoas[1].idade); // Saída: 25
  console.log(pessoas.length); // Saída: 3

  // arrays com multiplos tipos de dados
  const misturado = [1, "Olá", true, { nome: "Ana" }, [1, 2, 3]];
  misturado[70] = "Valor na posição 70"; // Adicionando um valor na posição 70

  const videoGames = ["Switch", "PS4", "XBox"];

  //adicionar um item novo no array
  // videoGames.push("3DS"); // Adiciona ao final da array

  const novoVideoGames = ["3DS", ...videoGames]; // Outra forma de adicionar um item ao final do array usando spread operator

  // remover o último item do array
  videoGames.pop(); // Remove o último item e retorna ele

  // saber o tamanho do array
  videoGames.length; // 3

  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  const frutasDois = ["Banana", "Morango", "Uva"];
  for (let i = 0; i < frutasDois.length; i++) {
    console.log(frutasDois[i]);
  }

  const videoGamesDois = ["Switch", "PS4", "XBox", "3DS"];
  for (let i = 0; i < videoGamesDois.length; i++) {
    console.log(videoGamesDois[i]);
    if (videoGamesDois[i] === "PS4") {
      break;
    }
  }
}
