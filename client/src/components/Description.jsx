import React from 'react';
import { DescriptionStyled, DescriptionList } from '../styled/DescriptionStyled';
import Exit from './Exit';

export default function Description({isHidden, setIsHidden}) {

  
  return (
		<DescriptionStyled isHidden={isHidden}>
      <Exit setIsHidden={setIsHidden}/>
			<DescriptionList>
				<li>1 Liten risk (snötäckt mark)</li>
				<li>2 Liten risk (gräsbrandssäsongen slut)</li>
				<li>3 Måttlig risk</li>
				<li>5 Stor Risk</li>
			</DescriptionList>
		</DescriptionStyled>
	);
}
