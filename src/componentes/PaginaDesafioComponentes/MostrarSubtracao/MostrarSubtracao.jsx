// Cria um componente chamado MostrarSubtracao que deve receber dois números como propriedade e mostrar a subtração dos números conforme exemplo:
// A subtração de 10 - 2 é: 8

import './MostrarSubtracao.css';
import MostrarSubtracao from "./MostrarSubtracao";

const MostrarSubtracao = ({ num1, num2 }) => {
  const resultado = num1 - num2;

  return (
    <div>
      A subtração de {num1} - {num2} é: {resultado}
    </div>
  );
};

export default MostrarSubtracao;




// function App() {
//   return (
//     <div>
//       <MostrarSubtracao num1={10} num2={2} />
//     </div>
//   );
// }

// export default App;