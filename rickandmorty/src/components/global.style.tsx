import { createGlobalStyle } from 'styled-components'
import { Breakpoint, Color } from './constants'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    }

    body{ 
      background-color: ${Color.Background};
    }

    a {
      text-decoration: none;
      color: ${Color.Primary};
    }

@media (min-width: 0px){
  html{
    font-size: 12px;
  }
}

@media (min-width: ${Breakpoint.Desktop}){
  html{
    font-size: 18px;
  }
}
`
