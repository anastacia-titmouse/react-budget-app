import styled from "styled-components";
import { Color } from "../../config/color";

export const SpentcardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
  background-color: ${Color.Pink};
  border-radius: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  @media (max-width: 390px) {
    font-size: 16px;
  }
`;
