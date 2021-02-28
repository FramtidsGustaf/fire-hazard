import styled from 'styled-components';
import theme from './theme';

const { colors, fonts } = theme;

export const DescriptionStyled = styled.div`
	height: 80vh;
	width: 80vw;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(${props => props.isHidden ? '200%, -50%' : '-50%, -50%'});
	background-color: rgba(29, 29, 33, 0.8);
	display: flex;
	align-items: center;
	justify-content: center;
  transition: transform .2s ease-out;
`;

export const DescriptionList = styled.ul`
	list-style: none;
	height: 50vh;
	width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& li {
		font-family: ${fonts.body};
		font-size: 2.5rem;
		color: ${colors.text};
	}
`;

export const ExitStyled = styled.button`
	position: absolute;
	height: 40px;
	width: 40px;
  background: none;
  border: none;
  outline: none;
	top: 8%;
	left: 96%;
	transform: translate(-50%, -50%);
	cursor: pointer;
`;

export const Cross = styled.p`
  position: absolute;
  top: 45%;
  left: -7%;
	background-color: ${colors.text};
	height: 4px;
	width: 45px;
	transform: rotate(${props => (props.first ? '45deg' : '135deg')});
`;

export const Enter = styled.button`
  min-height: 10vh;
  width: fit-content;
  border: 5px solid ${colors.dark};
  outline: none;
  padding: 1rem;
  position: absolute;
  background-color: ${colors.dark};
  font-family: ${fonts.body};
  font-size: 2rem;
  color: ${colors.text};
  top: 50%;
  left: 92%;
  transform: translate(${props => props.isHidden ? '-50%, -50%' : '200%, -50%'});
  transition: all .2s ease-out; 
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
    color: ${colors.dark};
  }
`
 