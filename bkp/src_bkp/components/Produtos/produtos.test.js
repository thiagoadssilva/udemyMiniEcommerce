import React from 'react';
import {render} from '@testing-library/react';
import Produtos from '../Produtos';

describe('Teste do componente produtos', () =>{
    it('Deve redenrizar o componente sem erros', () =>{
        const {getAllByText} = render(
            <Produtos  visivel={true} adicionarProduto={() => false}/>
        );
        const botoes = getAllByText(/comprar/i);
        expect(botoes).toBeTruthy();
    });
});