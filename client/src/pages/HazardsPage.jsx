import React, { useEffect, useState } from 'react';
import Chart from '../components/Chart';
import Description from '../components/Description';
import { Enter } from '../styled/DescriptionStyled';
import { StyledHazardsPage as SHazardsPage } from '../styled/PageStyled';

export default function HazardsPage() {
	const [hazards, setHazards] = useState(null);
	const [isHidden, setIsHidden] = useState(true);

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

	const handleOnClick = () => {
		setIsHidden(false);
	}

	useEffect(() => {
		getHazards();
	}, []);

	return (
		<SHazardsPage>
		{
			hazards ? <Chart hazards={hazards}/> : 'Loading'
		}
		<Enter isHidden={isHidden} onClick={handleOnClick}>Beskrivning</Enter>
		<Description isHidden={isHidden} setIsHidden={setIsHidden}/>
		</SHazardsPage>
	);
}
