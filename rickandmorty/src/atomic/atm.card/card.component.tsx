import { CardFrameStyled } from './card.component.style'
import React from 'react'

export const Card: React.FC = (props) => {
  return (
    <CardFrameStyled>
      {props.children}
    </CardFrameStyled>
  )
}
