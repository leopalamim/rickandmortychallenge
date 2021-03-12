import styled from 'styled-components'
import { Color, Spacing } from './constants'

interface SeparatorProps {
  type?: 'line' | 'subsection' | 'section'
}

const SeparatorSize = {
  line: Spacing.Small,
  subsection: Spacing.Large,
  section: Spacing.XXLarge
}

export const Separator = styled.div<SeparatorProps>`
  padding-top: ${(props) => (props.type ? SeparatorSize[props.type] : Spacing.XSmall)};
`
