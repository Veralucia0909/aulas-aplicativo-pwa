//Escreva um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números no console, exemplo:
//A = 10; B = 5;
//“A + B = 15”
//“A - B = 5”
//“A * B = 50”
//“A / B = 2”


let num1 = Number(prompt("Digite o primeiro numero:"));
let nun2 = Number(prompt("Digite o segundo numero:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Por favor, digite apenas números válidos.");
} else {
  console.log("Soma: " + (num1 + num2));
  console.log("Subtração: " + (num1 - num2));
  console.log("Multiplicação: " + (num1 * num2));

  if (num2 !== 0) {
    console.log("Divisão: " + (num1 / num2));
  } else {
    console.log("Divisão: Não é possível dividir por zero.");
  }
}



