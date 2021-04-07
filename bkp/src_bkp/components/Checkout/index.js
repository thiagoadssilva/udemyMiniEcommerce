import React, { useState } from 'react';
import {
  Form,
  Row,
  Col,
  Button,
  Jumbotron,
  Modal
} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { registerLocale } from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import ListarEstados from './listarEstados';
import ListarCidades from './listarCidades';

import { Formik } from 'formik';
import * as yup from 'yup';
import { validarCpf} from '../../utils/cpf-util';

registerLocale('pt', pt);

export default (props) => {

  const [dataNascimento, setDataNascimento] = useState(null);
  const [formEnviado, setFormEnviado] = useState(false);
  const [showModal, setshowModal] = useState(false);
  const [showErroModal, setShowErroModal] = useState(false);

  const schema = yup.object({
    email: yup.string().email().required(),
    nomeCompleto: yup.string().required().min(5),
    cpf: yup.string().required().min(14).max(14),
    endereco: yup.string().required().min(5),
    cidade: yup.string().required(),
    estado: yup.string().required(),
    cep: yup.string().required().min(9).max(9),
    emailPromocional: yup.string().required(),
    termoCondicioes: yup.bool().oneOf([true])
  });


  function visivel() {
    return props.visivel ? null : 'hidden';
  }

  function finalizarCompra(values) {

  }

  function handleDataNascimento(data){
    setDataNascimento(data);
  }

  function datePickerCss(){
    if(!formEnviado){
      return "form-control";
    }
    if(dataNascimento){
      return "form-control is-valid";
    }else{
      return "form-control is-invalid";
    }
  }

  return (
    <Jumbotron fuild style={{ margin: '10px' }} className={visivel()}>
      <h3 className="text-center">Finalizar Compra</h3>

      <Formik
        onSubmit={(values) => finalizarCompra(values)}
        initialValues={{
          email: '',
          nomeCompleto: '',
          cpf: '',
          endereco: '',
          cidade: '',
          estado: '',
          cep: '',
          termoCondicioes: false,
          emailPromocional: 'S'
        }}
        validationSchema={schema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors
        }) => (
          <Form 
            noValidate 
            style={{ margin: '10px' }}
            onSubmit={handleSubmit}
          >
            <Form.Group as={Row} controlId="email">
              <Form.Label column sm={3}>
                Email
              </Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="email" 
                  placeholder="Informe seu E-mail" 
                  name="email" 
                  data-testid="txt-email" 
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email }
                />
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
                <Form.Control 
                  type="text" 
                  placeholder="Informe seu nome completo" 
                  name="nomeCompleto" 
                  data-testid="txt-nome-completo" 
                  value={values.nomeCompleto}
                  onChange={handleChange}
                  isValid={touched.nomeCompleto && !errors.nomeCompleto}
                  isInvalid={touched.nomeCompleto && !!errors.nomeCompleto }
                />
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
                <DatePicker 
                  withPortal 
                  locale="pt" 
                  peekNextMonth 
                  showMonthDropdown 
                  showYearDropdown 
                  dropdownMode="select" 
                  dateFormat="dd/MM/yyyy" 
                  placeholderText="Informe a data de nascimento" 
                  selected={dataNascimento}  
                  onChange={handleDataNascimento}
                  className={datePickerCss()}
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="cpf">
              <Form.Label column sm={3}>
                CPF
              </Form.Label>
              <Col sm={9}>
                <Form.Control 
                  type="text" 
                  placeholder="Informe seu CPF" 
                  name="nomeCompleto" 
                  data-testid="txt-cpf" 
                  value={values.cpf}
                  onChange={handleChange}
                  isValid={touched.cpf && !errors.cpf}
                  isInvalid={touched.cpf && !!errors.cpf }
                />
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
                <Form.Control 
                  type="text" 
                  placeholder="Informe seu endereço Completo" 
                  name="endereco" 
                  data-testid="txt-endereco" 
                  value={values.endereco}
                  onChange={handleChange}
                  isValid={touched.endereco && !errors.endereco}
                  isInvalid={touched.endereco && !!errors.endereco }
                />
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
                <Form.Control 
                  as="select" 
                  name="estado" 
                  data-testid="txt-estado" 
                  value={values.estado}
                  onChange={handleChange}
                  isValid={touched.estado && !errors.estado}
                  isInvalid={touched.estado && !!errors.estado }
                >
                  <ListarEstados />
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
                <Form.Control 
                  as="select" 
                  name="cidade" 
                  data-testid="txt-cidade"
                  value={values.cidade}
                  onChange={handleChange}
                  isValid={touched.cidade && !errors.cidade}
                  isInvalid={touched.cidade && !!errors.cidade }
                >
                  <option value="">Selecione uma cidade</option>
                  <ListarCidades estado={values.estado} />
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
                <Form.Control 
                  type="text" 
                  placeholder="Informe seu CEP" 
                  name="cep" 
                  data-testid="txt-cep" 
                  value={values.cep}
                  onChange={handleChange}
                  isValid={touched.cep && !errors.cep}
                  isInvalid={touched.cep && !!errors.cep }
                />
                <Form.Control.Feedback type="invalid">
                  Informe um CEP válido
                </Form.Control.Feedback>
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="emailPromocional">
              <Form.Label column sm={12}>
                Deseja receber emails com promoções?
              </Form.Label>
              <Form.Check 
                inline name="emailPromocional" 
                type="radio" 
                id="promocaoSim" 
                value="S" 
                label="Sim" 
                style={{ marginLeft: "15px" }} 
                checked={values.emailPromocional === 'S'}
                onChange={handleChange}
              />
              <Form.Check 
                inline name="emailPromocional" 
                type="radio" 
                id="promocaoNao" 
                value="N" 
                label="Não" 
                style={{ marginLeft: "15px" }} 
                checked={values.emailPromocional === 'N'}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Row} controlId="termosCondicoes">
              <Form.Check 
                name="termosCondicoes" 
                label="Concordo com os termos e condições." 
                style={{ marginLeft: "15px" }} 
                data-testid="check-termos-condicoes" 
                value={values.termosCondicoes}
                onChange={handleChange}
                isValid={touched.termosCondicoes && !errors.termosCondicoes}
                isInvalid={touched.termosCondicoes && !!errors.termosCondicoes }
              />
            </Form.Group>

            <Form.Group as={Row} controlId="finalizaCompra">
              <Col className="text-center" sm={12}>
                <Button type="submit" variant="success" data-testid="btn-finalizar-compra">
                  Finalizar Compra
                </Button>
              </Col>
            </Form.Group>

          </Form>
        )}
      </Formik>
      <Modal show={false} data-testid="modal-compra-sucesso">
        <Modal.Header closeButton>
          <Modal.Title>Compra Realizado com Sucesso!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Um email foi enviado para sua caixa de emails, com as confirmações do pedido.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={false} data-testid="modal-erro-comprar">
        <Modal.Header closeButton>
          <Modal.Title>Erro ao processar o pedido!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tente novamente mais tarde
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning">
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>

    </Jumbotron>
  );
}