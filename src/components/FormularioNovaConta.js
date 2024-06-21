import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function NovaContaForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Previne o envio padrão do formulário
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      // Acessa os valores dos campos após a validação
      const nome = form.elements.nome.value;
      const sobrenome = form.elements.sobrenome.value;
      const email = form.elements.email.value;
      const agencia = form.elements.agencia.value;
      const cpf = form.elements.cpf.value;

      console.log(nome, sobrenome, email, agencia, cpf);

      if (
        nome === "" ||
        sobrenome === "" ||
        email === "" ||
        agencia === "" ||
        cpf === ""
      ) {
        alert("Preencha todos os campos");
      }
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 align-center">
        <Form.Group as={Col} md="">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            id="nome"
            name="nome"
            type="text"
            placeholder="First name"
            defaultValue={""}
          />
          <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            required
            id="sobrenome"
            name="sobrenome"
            type="text"
            placeholder="Last name"
            defaultValue={""}
          />
          <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
          />
          <Form.Control.Feedback type="invalid">
            Adicione um email válido!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="">
          <Form.Label>Agência</Form.Label>
          <Form.Control
            id="agencia"
            name="agencia"
            type="number"
            placeholder="Agência"
            required
          />
          <Form.Control.Feedback type="invalid">
            Adicione uma agência válida
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row>
        <Col md={{ span: 12, offset: 0 }}>
          <Form.Group className="mb-1" as={Col} xs="" md="12">
            <Form.Label>CPF</Form.Label>
            <Form.Control
              required
              id="cpf"
              name="cpf"
              type="number"
              placeholder="CPF"
              defaultValue={""}
            />
            <Form.Control.Feedback>Muito bem!</Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-1">
        <Form.Check
          required
          label="Concordo com os termos e condições"
          feedback="Você deve concordar antes de enviar."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Criar</Button>
    </Form>
  );
}

export default NovaContaForm;
