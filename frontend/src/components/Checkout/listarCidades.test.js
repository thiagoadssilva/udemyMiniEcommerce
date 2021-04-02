import React from 'react';
import {render} from '@testing-library/react';
import axiosMock from 'axios';
import ListarCidades from './listarCidades';

describe('Teste da listagem das cidades', () =>{
    it('Deve gerar uma lista com as cidades', async () => {
        axiosMock.get.mockResolvedValueOnce({data: ['são paulo', 'são pedro']});
        const {finfByTestId} = render(<ListarCidades estado='SP'/>);
        expect(axiosMock.get).toHaveBennCalledTimes(1);
        expect(await findByTestId('são paulo')).toHaveTextContent('são paulo');
        expect(await findByTestId('são pedro')).toHaveTextContent('são pedro');
    });
});