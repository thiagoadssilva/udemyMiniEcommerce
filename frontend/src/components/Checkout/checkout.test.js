import React from 'react';
import {render} from '@testing-library/react';
import Checkout from '../Checkout';

describe('Teste do component Checkout', () => {
    it('Deve redenrizar o componente sem erros', () =>{
        const {getByText} = render(<Checkout />);
        const texto = getByText(/checkout/i);
        expect(texto).toBeInTheDocument();
    }); 
});