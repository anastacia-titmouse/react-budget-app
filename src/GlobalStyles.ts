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

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
  font-weight: normal;
  font-style: normal;
}
a {
  text-decoration: none;
}
`;
