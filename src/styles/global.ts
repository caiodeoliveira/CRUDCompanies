import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-smooth: always;
    font-family: 'Roboto Condensed', sans-serif;
  }

  #root, body, html {
    height: 100%;
  }

  #root {
    min-width: 900px;
    min-width: 100vw;
    background-color: black;
  }

  button {
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
`;
