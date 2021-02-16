import React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

export default (props) => {
    function render() {
        if (props.produtos.length === 0) {
            return (
                <NavDropdown.Item href="" data-testid="itens">
                    <span> <FontAwesomeIcon icon={faSadTear} /> </span>
                    
                    Carrinho vazio..
                </NavDropdown.Item>
            );
        }

        const itens = props.produtos.map(produto =>
            <NavDropdown.Item href="" key={produto.nome} data-testid={produto.nome}>
                {produto.nome} - {produto.quantidade} x {produto.preco}
            </NavDropdown.Item>
        );

        return itens;

    }

    return (
        render()
    );
}