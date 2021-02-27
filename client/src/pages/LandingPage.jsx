import React from 'react';
import { Link } from 'react-router-dom';
import Fire from '../components/Fire';
import { StyledLandingPage as SLanding } from '../styled/PageStyled';

export default function LandingPage() {
	return (
		<SLanding>
			<Link to='/hazards'> Brandrisk
        <Fire/>
      </Link>
		</SLanding>
	);
}
