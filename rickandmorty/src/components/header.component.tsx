import { HeaderStyled } from './header.component.style'
import { Grid } from "./grid";
import { Col, Row } from "react-flexbox-grid";
import { ImageObj } from "./image.component";
import { Separator } from "./separator.component.style";
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