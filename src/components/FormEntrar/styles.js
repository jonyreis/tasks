import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    background-color: #8cbaee;
    padding: 22px;
    width: 390px;
    max-height: 100%;
    margin: 56px 0;

    label {
      color: #0468bf;
      display: block;
      font-size: 0.9rem;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 0.5rem;
    }
    input {
      border: solid 1px #eee;
      display: block;
      width: 100%;
      font-size: 0.8rem;
      padding: 0.5rem;
      border-radius: 0.2rem;
      background: #eee;
      transition: 0.2s;
      margin-bottom: 0.5rem;
      &::placeholder {
        font-size: 14px;
      }
    }
    input:hover,
    input:focus {
      outline: none;
      border-color: #f5b442;
      background-color: #fff;
      box-shadow: 0 0 0 3px #fbc74b;
    }

    button {
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
      width: 100%;

      &:hover,
      &:focus {
        background: #f5b442;
        outline: none;
        box-shadow: 0 0 0 3px #fbc74b, 0 0 0 4px #f5b442;
      }

      &:disabled {
        opacity: 0.5;
        cursor: wait;
      }
    }
    span {
      font-size: 12px;
      line-height: 22px;
      color: #f0656d;
    }
  }
`;
