// Cria um componente chamado MostrarMeuNomeCompleto que deve receber como propriedade o seu nome, seu sobrenome e mostrar conforme o exemplo:
// O meu nome completo é: Vera Lúcia Paula de Lima


import './MostrarMeuNomeCompleto,css';
import MostrarMeuNomeCompleto from "./MostrarMeuNomeCompleto";


const MostrarMeuNomeCompleto = ({ nome, sobrenome }) => {
  return (
    <div>
      O meu nome completo é: {nome} {sobrenome}
    </div>
  );
};

export default MostrarMeuNomeCompleto;





// function App() {
//   return (
//     <div>
//       <MostrarMeuNomeCompleto 
//         nome="Vera Lúcia" 
//         sobrenome="Paula de Lima" 
//       />
//     </div>
//   );
// }

// export default App;