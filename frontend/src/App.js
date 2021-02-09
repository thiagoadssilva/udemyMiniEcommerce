import React, {useState} from 'react';
import Menu from './components/Menu';
import Produtos from './components/Produtos';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  const [carrinho, setCarrinho] = useState({produtos: []});
  const [exibirProduto, setExibirProduto] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

  return (
    <div>
      <Menu />
      <Produtos />
      <Checkout />
    </div>
    
  );
}

export default App;
