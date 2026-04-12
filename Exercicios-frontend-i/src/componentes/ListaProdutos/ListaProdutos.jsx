
import './ListaProdutos.css';

function ListaProdutos({produtos}) {
  return (
    <ul className="listaProdutos">
      {produtos.map((produto, index) => (
        <li key={index}>{produto}</li>
      ))}
    </ul>
  );
}

export default ListaProdutos;

// function ListaProdutos() {
//   const produtos = [
//     { nome: "Celular Samsung" },
//     { nome: "Notebook Acer" },
//     { nome: "Smart TV LG" },
//     { nome: "Impressora HP" },
//     { nome: "Tablet Multilaser" },
//     { nome: "Monitor Dell" },
//   ];

//   return (
//     <Principal>
//       <h2>Lista de Produtos</h2>

//       <ul className="lista-produtos">
//         {produtos.map((itemProduto, index) => (
//           <li key={index}>
//             {itemProduto.nome}
//           </li>
//         ))}
//       </ul>

//     </Principal>
//   );
// }

// export default ListaProdutos;






















