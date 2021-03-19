import React from 'react';

import {Form, Row, Col, Button, Jumbotron, Modal} from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker';
import DatePicker, {registerLocale} from 'react-datepicker';
import pt from 'date-fns/locale/pt';

registerLocale('pt', pt);

import {
    Container
} from './styled';

export default () => {
    return(
        <Container>
            <h1>Checkout</h1>
        </Container>
    );
}