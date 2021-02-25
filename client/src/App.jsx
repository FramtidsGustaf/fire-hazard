import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HazardsPage from './routes/HazardsPage';
import LandingPage from './routes/LandingPage';

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route path='/hazards'>
						<HazardsPage />
					</Route>
					<Route path='/'>
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
