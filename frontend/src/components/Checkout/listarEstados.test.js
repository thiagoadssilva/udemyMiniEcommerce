import React from 'react';
import {render} from '@testing-library/react';
import ListarEstados from './listarEstados';

describe('Teste do componente de listar os estados', () =>{
    it('Deve gerar a lista dos estados', () =>{
        const {getByTestId} = render(<ListarEstados />);
        expect(getByTestId('AC')).toHaveTextContent('Acre');
    });
});