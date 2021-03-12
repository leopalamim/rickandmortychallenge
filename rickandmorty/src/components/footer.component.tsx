import { Grid } from './grid'
import { Row, Col } from "react-flexbox-grid";
import { FooterWrapper } from './footer.component.style'
import { Button } from './button.component';

export const Footer: React.FC = () => {

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return(
    <FooterWrapper>
      <Grid>
        <Row center="xs">
          <Col>
            <Button onClick={scrollToTop}>Top</Button>
          </Col>
        </Row>
      </Grid>
    </FooterWrapper>
  )
}