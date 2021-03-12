import styled from 'styled-components'
import { Color, FontFamily, FontSize, FontWeight, LineHeight, Spacing } from './constants'

export const H1 = styled.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.XLarge};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  &::first-line {
    color: ${Color.Primary};
    font-size: ${FontSize.XLarge};
  }
  margin-bottom: ${Spacing.Medium};
`

export const H2 = styled.h2`
  position: relative;
  display: inline-block;
  z-index: 1;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: ${LineHeight.Large};
  font-weight: ${FontWeight.Bold};
  color: ${Color.Black};
  margin-bottom: ${Spacing.Large};
`

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  line-height: ${LineHeight.Medium};
  font-weight: ${FontWeight.Bold};
  margin: ${Spacing.Medium} 0 ${Spacing.Small};
  color: ${Color.CallToAction};
`

export const Body = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.Small};
  font-weight: ${FontWeight.Regular};
  line-height: ${LineHeight.Medium};
  color: ${Color.Primary};
`

export const BodySecondary = styled.p`
  font-family: ${FontFamily.Secondary};
  font-size: ${FontSize.XXSmall};
  font-weight: ${FontWeight.Regular};
  color: ${Color.Black};
`