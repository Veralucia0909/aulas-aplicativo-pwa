function exemploVariaveis() {
  var nome = "João Silva";
  const idade = 18;

  let possuiFaculdade = true;
  possuiFaculdade = false;

  var preco;
  preco = 100;
  // novo
  let time; // Undefined
  const comida = null; // Null
  const novoObjeto = {}; // Object

  console.log("O tipo de nome é: " + typeof nome);
  console.log("O tipo de idade é: " + typeof idade);
  console.log("O tipo de possuiFaculdade é: " + typeof possuiFaculdade);
  console.log("O tipo de preco é: " + typeof preco);
  console.log("O tipo de time é: " + typeof time);
  console.log("O tipo de comida é: " + typeof comida);
  console.log("O tipo de novoObjeto é: " + typeof novoObjeto);

  const gols = 1000;
  const frase1 = 'Pelé fez ' + gols + ' gols';
  const frase2 = `Pelé fez ${gols} gols`; // Utilizando Template String


  'JavaScript é "super" fácil';
  "JavaScript é 'super' fácil";
  'JavaScript é "super" fácil';
  `JavaScript é "super" fácil"`;
  // "JavaScript é "super" fácil"; // Inválido

  const numeroUm = prompt("Informe o número UM:");
  const numeroDois = prompt("Informe o número DOIS:");
  
  if(isNaN(numeroUm) || isNaN(numeroDois)) {
    console.log("Um dos valores informados não é um número válido.");
    return;
  }

  const soma = Number(numeroUm) + +numeroDois
  console.log("A soma é:" + soma)
}
