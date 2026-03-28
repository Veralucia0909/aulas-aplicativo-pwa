//Escreva uma função que imprima no console o ano atual baseado na "Data Atual” do computador.

function AnoAtual() {
  let dataAtual = new Date();
  let ano = dataAtual.getFullYear();
  console.log("Ano atual: " + ano);
}

AnoAtual();

