import styled from 'styled-components';
import theme from './theme';
const {colors} = theme;

export const StyledLandingPage = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.primary};

  & a {
    background-color: ${colors.dark};
  }
`