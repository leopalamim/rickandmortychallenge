import { Col, Row } from "react-flexbox-grid";
import { Grid } from "./grid";
import { HeroStyled, HeroGridStyled } from "./hero.component.style";
import { H1 } from "./typography";
import { Video } from "./video.component";

export const Hero = () => (
  <HeroStyled>
    <HeroGridStyled>
      <Grid>
        <Row middle="xs">
          <Col xs={12} md={6}>
            <H1>Rick <br /> and Morty</H1>
          </Col>
          <Col xs={12} md={6}>
            <Video url="https://www.youtube.com/embed/fJ1np6NnMYU"/>
          </Col>
        </Row>
      </Grid>
    </HeroGridStyled>
  </HeroStyled>
)