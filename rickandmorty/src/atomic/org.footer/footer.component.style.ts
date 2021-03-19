import styled from 'styled-components'
import { Color, Spacing } from '../obj.constants/constants'

export const FooterWrapper = styled.div`
  width: 100vw;
  height: 300px;
  background-image: linear-gradient(${Color.Background}, ${Color.Black});
  display: flex;
  align-items: flex-end;
  padding: ${Spacing.Medium};
`