import Tabela from './components/tabela';
import './App.css'

function App() {
  const products = [
    { id:1, nome: 'Maçã',estoque:10, preco:10},
    { id:2, nome: 'Banana',estoque:10,preco:10},
    { id:3, nome: 'Melancia',estoque:10,preco:10},
    { id:4, nome: 'Melão',estoque:10,preco:10},
    { id:5, nome: 'Uva',estoque:10,preco:10},
];

  return (
    <>
      <Tabela products={products}/>
    </>
  )
}

export default App
