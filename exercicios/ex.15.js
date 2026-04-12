//Com base na lista de números, escreva um programa que imprima no console
//  os números que são ímpares.

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];
  for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 !== 0) {
    console.log(numeros[i]);
  }
}