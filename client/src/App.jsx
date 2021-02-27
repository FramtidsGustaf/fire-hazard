import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HazardsPage from './pages/HazardsPage';
import LandingPage from './pages/LandingPage';

function App() {
	return (
		<>
			<Header/>
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
			<Footer/>
		</>
	);
}

export default App;
