import React from "react";
import backgroundImage from "../assets/bg-img.svg";
import { MainContainer } from "./styles";

import Cadastro from "../components/Cadastro/Cadastro";

const Home = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="main">
          <h1>Organize tudo com o Tasks</h1>
          <img src={backgroundImage} alt="imagem" />
        </div>
        <Cadastro />
      </div>
    </MainContainer>
  );
};

export default Home;
