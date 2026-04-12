//Com base na lista de números, escreva um programa que imprima no console uma lista substituindo os múltiplos 
// de 3 por "Fizz", os múltiplos de 5 por "Buzz" e os múltiplos de ambos por "FizzBuzz".
//O retorno deve ser: “['Fizz', 7, 'FizzBuzz', 19, 53, 'Fizz', 'Buzz', 'FizzBuzz', 34, 'Fizz']”

const numeros = [18, 7, 15, 19, 53, 12, 40, 30, 34, 66];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
    resultado.push("FizzBuzz");
  } else if (numeros[i] % 3 === 0) {
    resultado.push("Fizz");
  } else if (numeros[i] % 5 === 0) {
    resultado.push("Buzz");
  } else {
    resultado.push(numeros[i]);
  }
}

console.log(resultado);
