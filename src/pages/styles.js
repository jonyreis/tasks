import styled from "styled-components";

export const MainContainer = styled.main`
  background-color: #f3f4f6;
  min-height: 110vh;
  max-height: 100vh;
  .container {
    display: flex;
    grid-template-columns: 7fr 4fr;
    justify-content: space-between;
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
  }
`;

export const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  justify-content: space-between;
`;
