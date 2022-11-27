import styled from "styled-components";

export const StyledList = styled.ul`
  max-height: 200px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const StyledEmptyList = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  margin: 50px 0;
`;
