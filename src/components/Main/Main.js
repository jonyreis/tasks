import React from "react";

import Input from "../Form/Input";
import Button from "../Form/Button";

import backgroundImage from "../../assets/bg-img.svg";
import { MainContainer } from "./styles";

const Main = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <MainContainer>
      <div className="container">
        <div className="main">
          <h1>Organize tudo com o Tasks</h1>
          <img src={backgroundImage} />
        </div>
        <form onSubmit={handleSubmit}>
          <Input label="Nome:" type="text" name="nome" />
          <Input
            label="Email:"
            type="email"
            name="email"
            placeholder="seuemail@email.com"
          />
          <div className="group-form">
            <Input
              label="Data de Nascimento:"
              type="date"
              name="data de nascimento"
            />
            <Input
              label="CPF:"
              type="number"
              name="cpf"
              placeholder="000.000.000-00"
            />
          </div>
          <Input
            label="Cep:"
            type="number"
            name="cep"
            placeholder="00000-000"
          />
          <div className="group-form">
            <Input label="Endereço:" type="text" name="endereço" />
            <Input label="Número:" type="number" name="numero" />
          </div>
          <Input label="Senha:" type="password" name="password" />
          <Button>Cadastre-se</Button>
        </form>
      </div>
    </MainContainer>
  );
};

export default Main;
