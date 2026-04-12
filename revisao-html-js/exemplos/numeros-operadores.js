function numerosOperadores() {
  //   const idade = 50;
  const gols = 1000;
  const pi = 3.14; //decimal

  const soma = "100" + 50; // 10050
  const subtracao = "100" - 50; // 50
  const multiplicacao = "100" * "2"; // 200
  const divisao = "Blabla 100" / 2; // NaN (Not a Number)

  const numero = 70;
  const unidade = "kg";
  const peso = numero + unidade; // '70kg'
  const pesoPorDois = peso / 2; // NaN (Not a Number

  let incremento = 5;
  console.log(incremento++); // 5
  console.log(incremento); // 6

  let incremento2 = 5;
  console.log(++incremento2); // 6
  console.log(incremento2); // 6

  const frase = "Isso é um teste";
  +frase; // NaN
  -frase; // NaN

  //   const idade = "28";
  //   console.log(+idade); // 28 (número)
  //   console.log(-idade); // -28 (número)

  //   console.log(+idade + 5); // 33

  const possuiFaculdade = true;
  console.log(+possuiFaculdade); // 1

  const possuiGraduacao = true;
  const possuiDoutorado = false;

  if (possuiGraduacao) {
    console.log("Possui graduação");
  } else {
    console.log("Não possui graduação");
  }

  //   const diaSemana = Number(prompt("Digite um dia da semana: "));

  //   if (diaSemana === 1) {
  //     console.log("Segunda-feira");
  //   } else if (diaSemana === 2) {
  //     console.log("Terça-feira");
  //   } else if (diaSemana === 3) {
  //     console.log("Quarta-feira");
  //   } else if (diaSemana === 4) {
  //     console.log("Quinta-feira");
  //   } else if (diaSemana === 5) {
  //     console.log("Sexta-feira");
  //   } else if (diaSemana === 6) {
  //     console.log("Sábado");
  //   } else if (diaSemana === 7) {
  //     console.log("Domingo");
  //   } else {
  //     console.log("Dia inválido");
  //   }

  const diaSemana = Number(prompt("Digite um dia da semana: "));

  switch (diaSemana) {
    case 1:
      console.log("Segunda-feira");
      break;
    case 2:
      console.log("Terça-feira");
      break;
    case 3:
      console.log("Quarta-feira");
      break;
    case 4:
      console.log("Quinta-feira");
      break;
    case 5:
      console.log("Sexta-feira");
      break;
    case 6:
      console.log("Sábado");
      break;
    case 7:
      console.log("Domingo");
      break;
    default:
      console.log("Dia inválido");
      break;
  }

  const idade = 25;
  const possuiCNH = false;

  if (idade >= 18 && !possuiCNH) {
    console.log("Poderias ter CNH, mas não tens!");
  }

  if (possuiCNH || idade >= 18) {
    console.log("Podes entrar na festa!");
  }
}
