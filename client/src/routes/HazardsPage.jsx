import React, { useEffect, useState } from 'react';
import { StyledHazardsPage as SHazardsPage } from '../styled/PageStyled';
import { VictoryBar, VictoryChart } from 'victory';

export default function HazardsPage() {
	const [hazards, setHazards] = useState(null);
	const data = [
		{ Date: 'Idag', Grass: 3 },
		{ Date: 'Imorgon', Grass: 3 },
		{ Date: '2021-02-28', Grass: 3 },
		{ Date: '2021-03-01', Grass: 3 },
		{ Date: '2021-03-02', Grass: 3 },
		{ Date: '2021-03-03', Grass: 3 },
	];

	const getHazards = () => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(async ({ coords }) => {
				const { latitude, longitude } = coords;
				const response = await fetch(
					`http://localhost:9000/get-hazards/${latitude}/${longitude}`
				);
				const data = await response.json();
				console.log(data);
			});
		}
	};

	useEffect(() => {
		// getHazards();
	}, []);

	return (
		<SHazardsPage>
			<VictoryChart domainPadding={20}>
				<VictoryBar data={data} x="Date" y="Grass"/>
			</VictoryChart>
		</SHazardsPage>
	);
}
