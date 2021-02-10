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

  function adicionarProduto(produto){
    const objCarrinho = Object.assign({}, carrinho);

    let novoProduto = true;

    objCarrinho.produtos.forEach((prod, indice) =>{
      if(prod.nome === produto.nome){
        objCarrinho.produtos[indice].quantidade++;
        novoProduto = false;
      }
    });

    if(novoProduto){
      objCarrinho.produtos.push({
        nome: produto.nome, preco: produto.preco, quantidade: 1
      });
    }
    setCarrinho(objCarrinho);
  }

  function handleExibirProdutos(){
    setExibirCheckout(false);
    setExibirProduto(true);
  }

  function handleExibirCheckout(total){
    setExibirCheckout(true);
    setExibirProduto(false);
    setTotal(total);
  }

  return (
    <div>
      <Menu produtos={carrinho.produtos} handleExibirProdutos={handleExibirProdutos} handleExibirCheckout={handleExibirCheckout}/>
      <Produtos visivel={exibirProduto} adicionarProduto={adicionarProduto}/>
      <Checkout />
    </div>
    
  );
}

export default App;
