import React from 'react'
import { Cross, ExitStyled } from '../styled/DescriptionStyled'

export default function Exit({setIsHidden}) {
  
  const handleOnClick = () => {
    setIsHidden(true);
  }

  return (
    <ExitStyled onClick={handleOnClick}>
      <Cross first></Cross>
      <Cross></Cross>
    </ExitStyled>
  )
}
