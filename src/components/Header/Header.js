import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./styles";

const Header = ({ auth, user }) => {
  const dispatch = useDispatch();
  console.log(user.user);
  const userEmail = window.localStorage.getItem("userEmail");
  if (user === {}) return null;
  const users = user.map((data) => {
    return {
      nome: data.nome,
      email: `"${data.email}"`,
    };
  });

  const dataUser = users.filter((user) => {
    return user.email === userEmail;
  });

  function handleLogout() {
    dispatch({
      type: "@auth/SIGN_IN_SUCCESS",
      login: false,
    });
  }

  return (
    <HeaderContainer>
      {auth && dataUser[0] ? (
        <div>
          <Link to="/dashboard" id="logo">
            tasks
          </Link>
          <div className="status-user">
            <span>Olá, </span>
            <p>{dataUser[0].nome}</p>
            <button onClick={handleLogout} className="button">
              Sair
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Link to="/" id="logo">
            tasks
          </Link>
          <Link to="/entrar" className="button">
            {" "}
            Entrar
          </Link>
        </div>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  user: state.user,
});

export default connect(mapStateToProps)(Header);
