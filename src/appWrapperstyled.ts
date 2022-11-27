import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
  row-gap: 30px;
  padding: 30px 20px;
  width: 500px;
  @media (max-width: 390px) {
    width: 300px;
  }
`;
