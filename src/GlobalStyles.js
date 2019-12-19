import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export default createGlobalStyle`
  ${normalize}
  @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
  body {
    font-family: 'Raleway', sans-serif;
  }
  *, ::after, ::before {
    box-sizing: border-box;
  }
`;
