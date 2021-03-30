import React from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  Jumbotron,
  Modal
} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, {registerLocale} from 'react-datepicker';
import pt from 'date-fns/locale/pt';


registerLocale('pt', pt);

export default () => {
  return (
    <Jumbotron fuild style={{margin: '10px'}}>
      <h3 className="text-center">Finalizar Compra</h3>
    
      <Form noValidate style={{margin: '10px'}}>
        
        <Form.Group as={Row} controlId="email">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="Informe seu E-mail" name="email" data-testid="txt-email" /> 
            <Form.Control.Feedback type="invalid">
              Informe um E-mail valido.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="nomeCompleto">
          <Form.Label column sm={3}>
            Nome Completo
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Informe seu nome completo" name="nomeCompleto" data-testid="txt-nome-completo" /> 
            <Form.Control.Feedback type="invalid">
              Informe seu nome completo (mínimo de 5 caracteres)
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="dataNascimento">
          <Form.Label column sm={3}>
            Data de Nascimento
          </Form.Label>
          <Col sm={9}>
            <DatePicker withPortal locale="pt" peekNextMonth showMonthDropdown showYearDropdown dropdownMode="select" dateFormat="dd/MM/yyyy" placeholderText="Informe a data de nascimento" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="cpf">
          <Form.Label column sm={3}>
            CPF
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Informe seu CPF" name="nomeCompleto" data-testid="txt-cpf" /> 
            <Form.Control.Feedback type="invalid">
              Informe um CPF válido
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="endereco">
          <Form.Label column sm={3}>
            Endereço Completo
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Informe seu endereço Completo" name="endereco" data-testid="txt-endereco" /> 
            <Form.Control.Feedback type="invalid">
              Informe seu endereço completo.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="estado">
          <Form.Label column sm={3}>
            Informe seu estado
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select"  name="estado" data-testid="txt-estado" >
              <option value="">Selecione um estado</option>
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Informe Seu estado
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="cidade">
          <Form.Label column sm={3}>
            Informe sua cidade
          </Form.Label>
          <Col sm={9}>
            <Form.Control as="select"  name="cidade" data-testid="txt-cidade">
              <option value="">Selecione uma cidade</option> 
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              Informe sua cidade
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="cep">
          <Form.Label column sm={3}>
            CEP
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Informe seu CEP" name="cep" data-testid="txt-cep" /> 
            <Form.Control.Feedback type="invalid">
              Informe um CEP válido
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="emailPromocional">
          <Form.Label column sm={12}>
            Deseja receber emails com promoções?
          </Form.Label>
          <Form.Check inline name="emailPromocional" type="radio" id="promocaoSim" value="S" label="Sim" style={{marginLeft: "15px"}}/>
          <Form.Check inline name="emailPromocional" type="radio" id="promocaoNao" value="N" label="Não" style={{marginLeft: "15px"}}/>
        </Form.Group>

        <Form.Group as={Row} controlId="termosCondicoes">
          <Form.Check name="termosCondicoes" label="Concordo com os termos e condições." style={{marginLeft: "15px"}} data-testid="check-termos-condicoes"/>
        </Form.Group>

        <Form.Group as={Row} controlId="finalizaCompra">
          <Col className="text-center" sm={12}>
            <Button type="submit" variant="success" data-testid="btn-finalizar-compra">
              Finalizar Compra
            </Button>
          </Col>
        </Form.Group>

      </Form>
    </Jumbotron>
  );
}