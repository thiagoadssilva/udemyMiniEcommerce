import React from 'react';
import {render} from '@testing-library/react';
import Checkout from '../Checkout';

describe('Teste do component Checkout', () => {
    it('Deve redenrizar o componente sem erros', () =>{
        const {getAllByText} = render(<Checkout />);
        const textos = getAllByText('Finalizar Compra');
        expect(textos[0]).toBeInTheDocument();
    }); 
});