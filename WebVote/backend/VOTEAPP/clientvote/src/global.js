import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
        background-color: #f5f5f1;
        background-image: linear-gradient(90deg, #f5f5f1 0%,navy 74%);;
        /* background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,9,1) 49%, rgba(255,72,0,1) 100%); */
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
	height: 100vh;
  }`;