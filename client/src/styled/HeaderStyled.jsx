import styled from 'styled-components';
import theme from './theme';

const {colors, fonts} = theme;

const HeaderStyled = styled.header`
  width: 100vw;
  height: 15vh;
  background-color: ${colors.primary};
`

export default HeaderStyled;