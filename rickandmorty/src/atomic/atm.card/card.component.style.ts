import styled from 'styled-components'
import { Color, Spacing } from '../obj.constants/constants'

export const CardFrameStyled = styled.div`
  background-color: ${Color.White};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: ${Spacing.Medium};
  border: 1px solid transparent;
  border-radius: 20px;
`
