//Escreva uma função que recebe uma string como argumento, e imprima no console o resultado com a seguinte condições:
//”Tamanho até 5 carácteres = pequena”, ”Tamanho até 10 carácteres = média”, ”Tamanho a cima de 10 carácteres = grande”
//Exemplo de resultado: “A string ‘aplicativos’ é grande.”

function tamanhoString(texto) {
  if (texto.length <= 5) {
    console.log("Tamanho até 5 caracteres = pequena");
  } else if (texto.length <= 10) {
    console.log("Tamanho até 10 caracteres = média");
  } else {
    console.log("Tamanho acima de 10 caracteres = grande");
  }
}

tamanhoStringtring("Casa");
tamanhoStringString("Javascript");
tamanhoStringString("Programação Web");
