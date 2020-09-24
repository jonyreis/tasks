import React from "react";

import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <Link to="/" end id="logo">
          tasks
        </Link>
        <Link to="/entrar"> Entrar</Link>
      </div>
    </HeaderContainer>
  );
};

export default Header;
