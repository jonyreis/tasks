import styled from "styled-components";

export const FormContainer = styled.div`
  form {
    background-color: #8cbaee;
    padding: 22px;
    max-width: 100%;
    max-height: 100%;
    margin: 16px 0;

    .group-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    label {
      color: #0468bf;
      display: block;
      font-size: 0.9rem;
      font-weight: bold;
      line-height: 1;
      padding-bottom: 0.5rem;
    }
    input,
    textarea {
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
    input:focus,
    textarea:hover,
    textarea:focus {
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

export const TaskContainer = styled.div`
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  width: 100%;
  margin: 16px 0;
  .group-button {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    button {
      padding: 8px;
    }
  }
`;

export const ModalContainer = styled.div`
  background-color: #ffffff;
  color: #000000;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  position: fixed;
  top: 20vh;
  right: 10%;
  width: 300px;
  height: 200px;
  margin: 16px 0;
  padding: 32px;
  -webkit-box-shadow: 0px 0px 40px 0px rgba(170, 170, 170, 0.79);
  -moz-box-shadow: 0px 0px 40px 0px rgba(170, 170, 170, 0.79);
  box-shadow: 0px 0px 40px 0px rgba(170, 170, 170, 0.79);
  #close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  div {
    margin-top: 16px;
    h4 {
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 8px;
    }
  }
`;
