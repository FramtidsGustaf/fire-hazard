import React, { useState } from 'react';

function App() {
	const [hazards, setHazards] = useState(null);

	const handleOnClick = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(async ({ coords }) => {
				const { latitude, longitude } = coords;
				const response = await fetch(
					`http://localhost:9000/get-hazards/${latitude}/${longitude}`
				);
				const data = await response.json();
        setHazards(data);
			});
		}
	};

	return (
		<div className='App'>
			<button onClick={handleOnClick}>Klicka</button>
      {
        hazards && 
        hazards.map((hazard, index) => (
          <p key={index}>{hazard.Grass}</p>
        ))
      }
		</div>
	);
}

export default App;
