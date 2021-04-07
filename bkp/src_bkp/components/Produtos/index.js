import React, { useState } from 'react';
import ListarProdutos from '../ListarProdutos';
import {Alert} from 'react-bootstrap';

import {
  Container
} from './styled';

export default (props) => {
  const [exibirMsg, setExibirMsg] = useState(false);
  const [produto, setProduto] = useState('');

  function visivel() {
    return props.visivel ? null : 'hidden';
  }

  function exibirMensagem(produto){
    setExibirMsg(true);
    setProduto(produto.nome);
    setTimeout(() => {
      setExibirMsg(false);
    }, 3000);
  } 

  return (
    <Container>
      <div className={visivel()}>
        <Alert variant="success" style={{margin: '10px'}} show={exibirMsg}>
          <b>{produto} Adicionado no carrinho</b>
        </Alert>
        <ListarProdutos exibirMensagem={exibirMensagem} adicionarProduto={props.adicionarProduto}/>
      </div>
    </Container>
  );
}