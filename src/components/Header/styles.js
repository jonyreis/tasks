import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    a {
      color: #0468bf;
      font-size: 16px;
      font-weight: 700;
      text-decoration: none;
    }
    #logo {
      font-size: 28px;
    }
  }
`;
