import { HeaderStyled } from './header.component.style'
import { Grid } from "../obj.grid/grid";
import { Col, Row } from "react-flexbox-grid";
import { ImageObj } from "../atm.image/image.component";
import { Separator } from "../atm.separator/separator.component.style";
import { Link } from 'react-router-dom'

export const Header = () => (
  <HeaderStyled>
    <Grid>
      <Separator type="subsection" />
      <Row>
        <Col xs={12}>
          <Link to={'/'}>
            <ImageObj.LogoRickAndMorty />
          </Link>
        </Col>
      </Row>
    </Grid>
  </HeaderStyled>
)