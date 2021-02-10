import React from 'react';
import { Nav, NavDropdown, Navbar, NavbarBrand } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faCashRegister, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


import {
  Container
} from './styled';

export default () => {
  return (
    <Container>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="">Mini Ecommerce</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              title={
                <div style={{display: 'inline-block'}}>
                  <FontAwesomeIcon icon={faShoppingCart}/>    
                  &nbsp;
                  Carrinho
                </div>
              }
              drop="left"
            >
              <NavDropdown.Item href="">
                <FontAwesomeIcon icon={faShoppingBasket}/>
                &nbsp;
                <strong>Produtos</strong>
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              {/* COLCOAR AQUI A LISTA DOS PRODUTOS */}
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="" data-testid="total-carrinho">
                Total: R$ {/* AQUI VAI FICAR A FUNÇÃO QUE VAI CALCULAR O VALOR TOTAL */}
              </NavDropdown.Item>

              <span>
                <NavDropdown.Divider />
                <NavDropdown.Item href="" style={{color: 'green'}}>
                  <FontAwesomeIcon  icon={faCashRegister}/>
                  &nbsp;
                  Finalizar Compra
                </NavDropdown.Item>
              </span>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>  
    </Container>
  );
}