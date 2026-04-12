//Crie um array com 3 frutas e imprima cada uma no console.
//Adicione mais uma fruta ao array e imprima o array atualizado.
//Remova a última fruta do array e imprima o array atualizado.


let frutas = ["Maçã", "Banana", "Laranja"];
console.log("Frutas iniciais:");
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// Adiciona mais uma fruta
frutas.push("Uva");

// Imprime o array atualizado
console.log("adicionar uma fruta:");
console.log(frutas);

// Remove a última fruta
frutas.pop();

// Imprime o array atualizado novamente
console.log("Após remover a última fruta:");
console.log(frutas);
