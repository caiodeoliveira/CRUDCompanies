import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
  .fade-in {
	animation: fadeIn 1.0s ease forwards;
}
@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
`;
