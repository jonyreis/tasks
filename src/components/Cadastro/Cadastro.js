import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { FormContainer } from "./styles";

const Cadastro = ({ user }) => {
  const [inputEmail, setInputEmail] = React.useState("");

  const schema = Yup.object().shape({
    nome: Yup.string().required("O nome é obrigatório"),
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O email é obrigatório"),
    password: Yup.string()
      .min(6, "A senha precisa ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSubmit(data) {
    dispatch({
      type: "@user/CREATE_USER",
      data,
    });
    navigate("/entrar");
  }

  function validateEmail(event) {
    setInputEmail(event.target.value);
    for (let i = 0; i < user.length; i++) {
      if (event.target.value === user[i].email) {
        alert("Email já cadastrado");
        setInputEmail("");
      }
    }
  }

  return (
    <FormContainer>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input label="Nome:" type="text" name="nome" />
        <Input
          label="Email:"
          type="email"
          name="email"
          placeholder="seuemail@email.com"
          value={inputEmail}
          onChange={validateEmail}
        />
        <div className="group-form">
          <div>
            <Input label="Data de Nascimento:" type="date" name="issueDate" />
          </div>
          <div>
            <Input
              label="CPF:"
              type="text"
              name="cpf"
              placeholder="000.000.000-00"
            />
          </div>
        </div>
        <Input label="Cep:" type="text" name="cep" placeholder="00000-000" />
        <div className="group-form">
          <div>
            <Input label="Endereço:" type="text" name="endereço" />
          </div>
          <div>
            <Input label="Número:" type="number" name="numero" />
          </div>
        </div>
        <Input label="Senha:" type="password" name="password" />
        <button type="submit">Cadastre-se</button>
      </Form>
    </FormContainer>
  );
};

export default connect((state) => ({
  user: state.user,
}))(Cadastro);
