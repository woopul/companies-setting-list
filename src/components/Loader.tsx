import React from 'react';
import styled, { keyframes } from 'styled-components';
import theme from '../theme';


const animateBar = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

const StyledLoader = styled.div`
  width: 100%;
  height: 2px;
  background: ${theme.palette.button.default};
  .bar {
    height: 2px;
    background-color: ${theme.palette.button.primary};
    animation-name: ${animateBar};
    animation-duration: 5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in; 
  }
`



export const Loader = () => {
  return (<>
    We are gathering privacy settings...
    <StyledLoader>
      <div className="bar"></div>
    </StyledLoader>
  </>)
}