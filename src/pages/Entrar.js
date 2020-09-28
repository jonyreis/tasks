import React from "react";
import backgroundImage from "../assets/bg-img.svg";
import { MainContainer } from "./styles";

import FormEntrar from "../components/FormEntrar/FormEntrar";

const Entrar = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="main">
          <h1>Organize tudo com o Tasks</h1>
          <img src={backgroundImage} alt="imagem" />
        </div>
        <FormEntrar />
      </div>
    </MainContainer>
  );
};

export default Entrar;
