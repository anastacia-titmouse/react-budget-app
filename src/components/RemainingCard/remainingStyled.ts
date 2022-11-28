import styled from "styled-components";
import { Color } from "../../config/color";

interface IStyles {
  $isOverBudget: boolean;
}

export const RemainingCardStyled = styled.div<IStyles>`
  display: flex;
  align-items: center;
  padding: 40px 30px;
  background: ${({ $isOverBudget }) => ($isOverBudget ? Color.Red : Color.Violet)};
  border-radius: 10px;
`;

export const Title = styled.p<IStyles>`
  font-weight: ${({ $isOverBudget }) => ($isOverBudget ? "700" : "500")};
  color: ${({ $isOverBudget }) => ($isOverBudget ? "#FFFFFF" : "#000000")};
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
`;
