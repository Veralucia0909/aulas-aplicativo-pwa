// Cria um componente chamado MostrarSoma que deve receber dois números como propriedade e mostrar a soma dos números conforme exemplo:
// A soma de 11 + 12 é: 23

import './MostrarSoma.css';
import MostrarSoma from "./MostrarSoma";

const MostrarSoma = ({ num1, num2 }) => {
  const resultado = num1 + num2;

  return (
    <div>
      A soma de {num1} + {num2} é: {resultado}
    </div>
  );
};

export default MostrarSoma;





// function App() {
//   return (
//     <div>
//       <MostrarSoma num1={11} num2={12} />
//     </div>
//   );
// }

// export default App;