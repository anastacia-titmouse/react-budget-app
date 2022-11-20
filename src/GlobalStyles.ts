import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
