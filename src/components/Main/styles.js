import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #f3f4f6;
  min-height: calc(100vh - 72px);
  max-height: 100vh;
  .container {
    display: grid;
    grid-template-columns: 7fr 4fr;
    justify-items: space-around;
    max-width: 1200px;
    margin: 0 auto;
  }
  .main {
    max-width: 100%;
    h1 {
      color: #0468bf;
      font-size: 44px;
      font-weight: 700;
      margin: 40px 0;
      align-items: center;
    }
    svg {
      bottom: -1px;
      z-index: 0;
    }
  }
  form {
    background-color: #8cbaee;
    padding: 32px;
    max-width: 100%;
    margin: 16px 0 32px 0;
    .group-form {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
  }
`;
