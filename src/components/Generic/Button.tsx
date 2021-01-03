import styled from 'styled-components';
import theme from '../../theme';

const Button = styled.button`
  background: ${theme.palette.button.primary};

  color: ${theme.palette.text.secondary};
  border: none;
  outline: none;
  border-radius: 18px;
  height: 36px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  padding: 0 28px;
  ${theme.typography.button};

  :not(:disabled):hover {
    cursor: pointer;
  }
  
  &:hover {
    background: ${theme.palette.button.hover};
  }
  
  /* &:focus {
    color: ${theme.palette.text.primary};
    background: ${theme.palette.button.focus};
  } */

  &:active {
    background: ${theme.palette.button.active};
    color: ${theme.palette.text.secondary};
  }
`;

export default Button;
