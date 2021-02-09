import React from 'react';
import { Card, Button } from 'react-bootstrap';
import placehold from '../../images/produto.jpg';


import {
  Container
} from './styled';

export default () => {
  const produtos = [
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
    { nome: 'Aprender java', preco: 'R$ 30,99' },
  ];

  function handleComprar(event){
    event.preventDefault(); 
  }

  function render() {
    let key = 1;
    const carts = produtos.map(produto =>
      <Card style={{ width: '18rem', margin: '10px', float: 'left' }} key={key} data-testid={'cart' + key++}>
        <Card.Img variant='top' src={placehold} />
        <Card.Body className='text-center'>
          <Card.Title style={{ height: '40px' }}>{produto.nome}</Card.Title>
          <Card.Text>
            Descrição do Poduto
        </Card.Text>
          <Button variant='success' style={{ width: '100%' }} onClick={(event) => handleComprar(event, produto) }>
            Comprar ({produto.preco})
        </Button>
        </Card.Body>
      </Card>
    )
    return carts;
  }


  return (
    <Container>
      {render()}
    </Container>
  );
}