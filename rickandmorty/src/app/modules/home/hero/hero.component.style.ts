import styled from "styled-components";
import { Color } from "src/atomic/obj.constants/constants";
import { Grid } from "src/atomic/obj.grid/grid";

export const HeroStyled = styled.div`
  margin-top: 0px;
  height: 100vh;
  background: ${Color.White} url(background-wallpaper.jpg) center center no-repeat;
  background-size: cover;
`

export const HeroGridStyled = styled(Grid)`
  display: flex;
  align-items: center;
  height: 100%;
`