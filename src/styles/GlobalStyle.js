import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
	* {
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    height: 100%;
    font-family: 'NanumBarunGothic', 'Arial', sans-serif;
  }
  ${reset}
`;

export default GlobalStyle;
