// Cria um componente chamado MostrarMultiplicacao que deve receber dois números como propriedade e mostrar a multiplicação dos números conforme exemplo:
// A multiplicação de 10 * 10 é: 100

import './MostrarMultiplicacao,css';
import MostrarMultiplicacao from "./MostrarMultiplicacao";

const MostrarMultiplicacao = ({ num1, num2 }) => {
  const resultado = num1 * num2;

  return (
    <div>
      A multiplicação de {num1} * {num2} é: {resultado}
    </div>
  );
};

export default MostrarMultiplicacao;




// function App() {
//   return (
//     <div>
//       <MostrarMultiplicacao num1={10} num2={10} />
//     </div>
//   );
// }

// export default App;