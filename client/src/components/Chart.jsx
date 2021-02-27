import React, { useEffect, useState } from 'react';
import { VictoryBar, VictoryChart } from 'victory';
import TitleStyled from '../styled/TitleStyled';


export default function Chart({ hazards }) {
	const [data, setData] = useState([]);

	const getPeriod = () => {
		const day = new Date().getDay();
		let period = ['Idag', 'Imorgon'];
		const periods = [
			['Tisdag', 'Onsdag', 'Torsdag', 'Fredag'],
			['Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
			['Torsdag', 'Fredag', 'Lördag', 'Söndag'],
			['Fredag', 'Lördag', 'Söndag', 'Måndag'],
			['Lördag', 'Söndag', 'Måndag', 'Tisdag'],
			['Söndag', 'Måndag', 'Tisdag', 'Onsdag'],
			['Måndag', 'Tisdag', 'Onsdag', 'Torsdag'],
		];
		period = [...period, ...periods[day]];
		// setPeriod(period);
		return period;
	};

	const buildData = (period, hazards) => {
		const data = [];

		for (let i = 0; i < period.length; i++) {
			data.push({ dag: period[i], brandrisk: hazards[i].Grass });
		}
    console.log(data);
		setData(data);
	};

	useEffect(() => {
		//getPeriod();
		buildData(getPeriod(), hazards);
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
