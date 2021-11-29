import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #397f6e;
    --color-primary-transparent: rgba(57, 127, 110, 0.2);
    --color-text: #000000;
    --color-disabled: #d9d9d9;
    --color-lightgrey: #f6f7f9;
    --color-lightgreen: #ebf2f1;
    --color-white: #fff;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 17px;
  }
  
  h1, h2, h3 {
    font-family: "Kumbh Sans", sans-serif;
  }

  .btn {
    padding: 12.75px 25.5px;
    border-radius: 3.4px;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    font-size: 17px;
    display: inline-flex;
    transition: all .1s ease-in-out;
    background: #fff;
    cursor: pointer;
  }

  .btn.small {
    padding: 0.5rem 1rem;
  }

  .btn.full {
    background-color: var(--color-primary);
    color: white;
  }

  .btn:hover {
    box-shadow: 0 0 0 0.33rem var(--color-primary-transparent);
  }
`;

export default GlobalStyle;
