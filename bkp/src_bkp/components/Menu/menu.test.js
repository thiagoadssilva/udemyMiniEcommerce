import React from 'react';
import {render} from '@testing-library/react';
import Menu from '../Menu';


describe('Teste do componente Menu', () =>{
    it('Deve redenrizar o componente sem erros', () =>{
        const {getByText} = render(<Menu produtos={[]} handleExibirProdutos={() => false} handleExibirCheckout={() => false}/>);
        const texto = getByText(/mini ecommerce/i)
        expect(texto).toBeInTheDocument();
    }) 
});