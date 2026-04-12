//Crie um objeto que represente um carro com propriedades como marca, modelo e ano. Imprima cada propriedade no console.
//Adicione uma propriedade representando a cor do carro e imprima o objeto atualizado.
//Remova a propriedade de ano do objeto e imprima o objeto atualizado.

let carro = {
  marca: "Honda",
  modelo: "Fit",
  ano: 2014
};

console.log("Marca:", carro.marca);
console.log("Modelo:", carro.modelo);
console.log("Ano:", carro.ano);

carro.cor = "Prata";
console.log("Objeto atualizado cor:");
console.log(carro);

delete carro.ano;
console.log("Objeto atualizado sem ano:");
console.log(carro);
