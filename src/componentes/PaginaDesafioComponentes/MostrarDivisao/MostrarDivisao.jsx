// Cria um componente chamado MostrarDivisao que deve receber dois números como propriedade e mostrar a divisão dos números conforme exemplo:
// A divisão de 50 / 10 é: 5

import './MostrarDivisao.css';
import MostrarDivisao from "./MostrarDivisao";


const MostrarDivisao = ({ num1, num2 }) => {
  const resultado = num1 / num2;

  return (
    <div>
      A divisão de {num1} / {num2} é: {resultado}
    </div>
  );
};

export default MostrarDivisao;



// function App() {
//   return (
//     <div>
//       <MostrarDivisao num1={50} num2={10} />
//     </div>
//   );
// }

// export default App;