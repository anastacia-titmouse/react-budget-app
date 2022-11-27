import styled from "styled-components";
import { Color } from "../../config/color";

export const StyledForm = styled.form`
  display: grid;
  row-gap: 15px;
  .form-field__error {
    color: ${Color.Red};
  }
`;
export const StyledInputForm = styled.input`
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  padding: 20px 15px;
  &::placeholder {
    color: #999999;
  }
  &:focus-visible {
    outline: none;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    padding: 15px 10px;
  }
`;
