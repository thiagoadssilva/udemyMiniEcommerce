import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default (props) =>{
    const CIDADES_URL = 'http://localhost:3002/mini-ecommerce/estado/:estado/cidade';
    const [cidades, setCidades] = useState([]);

    useEffect(() =>{
        async function obterCidades(){
            try {
                let {data} = await axios.get(CIDADES_URL.replace(':estado', props.estado));
                setCidades(data);
            } catch (error) {
                setCidades([]);
            }
        }

        if(props.estado !== ''){
            obterCidades();
        }

    },[props.estado]);

    return cidades.map(cidade =>
        <option key={cidade} value={cidade} data-testid={cidade}>
            {cidade}
        </option>
    );
}
