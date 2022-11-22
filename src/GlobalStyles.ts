import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#root {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`;
