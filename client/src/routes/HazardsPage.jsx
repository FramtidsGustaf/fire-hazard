import React, { useEffect, useState } from 'react'

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
    <>
      {
        hazards &&
        hazards.map((hazard, index) => (
          <p key={index}>{hazard.Grass}</p>
        ))
      }
    </>
  )
}
