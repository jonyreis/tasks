import React from "react";
import { useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import { FormContainer } from "./styles";

const FormEntrar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string()
      .min(6, "A senha precisa ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
  });

  function handleSubmit(data) {
    const json = JSON.stringify(data.email);
    for (let i = 0; i < user.length; i++) {
      if (data.email === user[i].email && data.password === user[i].password) {
        window.localStorage.setItem("userEmail", json);
        dispatch({
          type: "@auth/SIGN_IN_SUCCESS",
          login: true,
        });
        navigate("/dashboard");
      }
    }
  }

  return (
    <FormContainer>
      <Form schema={schema} onSubmit={handleSubmit}>
        <div className="heigth-form">
          <Input
            label="Email:"
            type="email"
            name="email"
            placeholder="seuemail@email.com"
          />
          <Input label="Senha:" type="password" name="password" />
          <button type="submit">Entrar</button>
        </div>
      </Form>
    </FormContainer>
  );
};

export default connect((state) => ({
  user: state.user,
}))(FormEntrar);
