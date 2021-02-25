import styled from 'styled-components';
import theme from './theme';

const {colors, fonts} = theme;

const FooterStyled = styled.footer`
  width: 100vw;
  height: 5vh;
  padding-right: 1rem;
  background-color: ${colors.primary};
  font-family: ${fonts.body};
  color: ${colors.secondary};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default FooterStyled;