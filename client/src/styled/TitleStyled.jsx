import styled from 'styled-components';
import theme from './theme';

const{colors, fonts} = theme;

const TitleStyled = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${fonts.title};
  color: ${colors.text};
`

export default TitleStyled;
