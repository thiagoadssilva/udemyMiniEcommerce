import React from 'react';

export default () =>{
    const estados = [
        {'sigla': '', 'nome': 'Selecione o estado'},
        {'sigla': 'AC', 'nome': 'Acre (AC)'},
        {'sigla': 'AL', 'nome': 'Alagoas (AL)'},
        {'sigla': 'AP', 'nome': 'Amapá (AP)'},
    ];


    return estados.map(estado =>
        <option key={estado.sigla} value={estado.sigla} data-testid={estado.sigla}>
            {estado.nome}
        </option>    
    )
}