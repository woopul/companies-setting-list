import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: 'Roboto', sans-serif;
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
