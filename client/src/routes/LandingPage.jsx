import React from 'react'
import {Link} from 'react-router-dom';
import {StyledLandingPage as SLanding} from '../styled/PageStyled';

export default function LandingPage() {
  
  return (
    <SLanding>
      <Link to="/hazards">Get Fire Hazard Forecast</Link>
    </SLanding>
  )
}
