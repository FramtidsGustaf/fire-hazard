import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart';
import { StyledHazardsPage as SHazardsPage } from '../styled/PageStyled';

export default function HazardsPage() {
	const [hazards, setHazards] = useState(null);

	const getHazards = () => {
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

	useEffect(() => {
		getHazards();
	}, []);

	return (
		<SHazardsPage>
		{
			hazards ? <Chart hazards={hazards}/> : 'Loading'
		}
		</SHazardsPage>
	);
}
