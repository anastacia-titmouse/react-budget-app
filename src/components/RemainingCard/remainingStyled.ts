import styled from "styled-components";
import { Color } from "../../config/color";

interface IProps {
  error?: boolean;
}

export const RemainingCardStyled = styled.div`
  background-color: ${(props: IProps) => (props.error ? Color.Red : Color.Violet)};
  color: ${(props: IProps) => (props.error ? "#FFF" : "black")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 30px;
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
