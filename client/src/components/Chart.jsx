import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
import TitleStyled from '../styled/TitleStyled';

export default function Chart({ hazards }) {
	const [data, setData] = useState([]);

	const fetchPeriod = async () => {
		const url = 'http://localhost:9000/get-period';
		const response = await fetch(url);
		const data = await response.json();
		return data;
	};

	const buildData = async (fetchPeriod, hazards) => {
		const period = await fetchPeriod();
		const data = [];
		if (hazards) {
			for (let i = 0; i < hazards.length; i++) {
				data.push({ dag: period[i], brandrisk: hazards[i].Grass });
			}
		}
		setData(data);
	};

	useEffect(() => {
		buildData(fetchPeriod, hazards);
	}, [hazards]);

	return (
		<>
			{data ? (
				<>
					<TitleStyled>Brandrisk</TitleStyled>
					<VictoryChart
						dependentAxis
						domainPadding={20}
						domain={{ y: [0, 5] }}
						width={600}>
						<VictoryBar data={data} x='dag' y='brandrisk' />
					</VictoryChart>
				</>
			) : (
				'Loading'
			)}
		</>
	);
}
