import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

html {
  box-sizing: border-box;
  font-size: 16px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}

ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}
button{
	cursor: pointer;
}

#root{
	display: grid;

	background-color: #1E3542;
}

`;
