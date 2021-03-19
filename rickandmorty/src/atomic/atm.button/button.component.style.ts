import styled from 'styled-components'
import { Color, FontFamily, FontWeight, Radius, Spacing } from '../obj.constants/constants'

export const ButtonStyled = styled.a`
  font-family: ${FontFamily.Primary};
  padding: ${Spacing.Small} ${Spacing.Large};
  border-radius: ${Radius.Large};
  background-color: ${Color.CallToAction};
  font-weight: ${FontWeight.Medium};
  color: ${Color.Primary};
  border: none;
  outline: none;
  display: inline-block;
  &:hover {
    cursor: pointer;
    color: ${Color.White};
    background-color: ${Color.CallToAction}CC;
  }
`
