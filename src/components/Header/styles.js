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
    .status-user {
      margin: 0;
      padding: 0;
      span {
        margin-right: 10px;
      }
      p {
        font-size: 16px;
        font-weight: bold;
        margin-right: 20px;
      }
    }
    .button {
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      border: none;
      border-radius: 0.2rem;
      background: #f5b442;
      color: #fff;
      padding: 0.8rem 1.2rem;
      box-sizing: border-box;
      transition: 0.2s;
      max-width: 100%;

      &:hover,
      &:focus {
        background: #f5b442;
        outline: none;
        box-shadow: 0 0 0 3px #fbc74b, 0 0 0 4px #f5b442;
      }
    }
  }
`;
