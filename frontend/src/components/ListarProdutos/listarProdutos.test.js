import React from 'react';
import {render} from '@testing-library/react';
import ListarProduto from '../ListarProdutos';

describe('Teste do componente listar produto', () =>{
    it('Deve redenrizar o componente sem erros', () =>{
        const {getByTestId} = render(
            <ListarProduto adicionarProduto={() => false} exibirMensagem={() => false}/>    
        );
        expect(getByTestId('cart1')).toHaveTextContent('Aprender java');
    });

    it('Deve redenrizar a descrição sem erros', () =>{
        const {getByTestId} = render(
            <ListarProduto adicionarProduto={() => false} exibirMensagem={() => false}/>    
        );
        expect(getByTestId('cart1')).toHaveTextContent('Descrição do Poduto');
    });

    it('Deve redenrizar a descrição do botão sem erros', () =>{
        const {getByTestId} = render(
            <ListarProduto adicionarProduto={() => false} exibirMensagem={() => false}/>    
        );
        expect(getByTestId('cart1')).toHaveTextContent('Comprar (R$ 30,99)');
    });
});