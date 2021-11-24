import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    html, body {
      font-family: "Kumbh Sans", sans-serif;
      background: #EBF2F1;
    }
`;

export default GlobalStyle;
