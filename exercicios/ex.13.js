//Escreva um programa que calcule e mostre a tabuada (até 10x) de um número qualquer, digitado pelo usuário. 
// Exemplo: Informado o número 5:
//”5 x 1 = 5”
//”5 x 2 = 10”
//”5 x 9 = 45”
//”5 x 10 = 50”

let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
  console.log(numero + " x " + i + " = " + (numero * i));
}
