import styled from 'styled-components';
import theme from './theme';
const { colors, fonts } = theme;

const DefaultPage = styled.div`
	width: 100vw;
	height: 80vh;
	background-color: ${colors.primary};
`

export const StyledLandingPage = styled(DefaultPage)`
	& a {
		height: 30vh;
		width: 30vw;
		position: absolute;
    padding:  0 1rem 0 1rem;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border: 5px solid ${colors.text};
    box-shadow: none;
		text-decoration: none;
    font-family: ${fonts.title};
    font-size: 2.5rem;
    color: ${colors.text};
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    transition: all ease-out .2s;
    
    & svg {
      max-height: 12rem;
    }
    
    &:hover {
      transform: scale(1.02) translate(-48.5%, -54%);
      box-shadow: 0 10px 20px ${colors.dark};
    }
	}
`;

export const StyledHazardsPage = styled(DefaultPage)`
`;
