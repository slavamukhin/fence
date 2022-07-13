import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { ThemeType } from './theme'

export default createGlobalStyle<{theme: ThemeType}>`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Hind+Madurai:wght@300;500;600;700&display=swap');

  body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    box-sizing: border-box;
    font-family: 'DM Sans', sans-serif;
  }
`