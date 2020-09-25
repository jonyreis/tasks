import styled from "styled-components";

export const InputStyles = styled.div`
  margin-bottom: 1rem;
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
`;

export const ButtonStyles = styled.button`
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
`;
