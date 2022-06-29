import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { ThemeType } from './theme'

export default createGlobalStyle<{theme: ThemeType}>`
  ${normalize}

  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
  }
`