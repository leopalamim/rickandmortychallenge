import React from 'react'
import { Grid } from '../../../../atomic/obj.grid/grid'
import { Row, Col } from 'react-flexbox-grid'
import { Body } from '../../../../atomic/atm.typography/typography'
import { useEffect, useState } from 'react'
import { CharactersQuery } from 'app/data/graphql/queries/characters'
import { useRequest } from 'app/core/graphql/request.hook'
import { CharactersResponse } from 'app/data/graphql/types/api'
import { Link } from 'react-router-dom';
import { LoadingState } from 'app/modules/components/loading-state/loading-state.component'
import { Thumbnail } from 'atomic/atm.image/image'
import { Card } from 'atomic/atm.card/card.component'
import { Separator } from 'atomic/atm.separator/separator.component.style'
import { Hero } from 'app/modules/components/home/hero/hero.component'
import { Reveal } from 'react-reveal'

const Home: React.FC = () => {
  const [users, setUsers] = useState([])
  const { fetch, data, error, loading } = useRequest<CharactersResponse>(CharactersQuery)

  useEffect(() => {
    fetch()
  }, [fetch]);

  useEffect(() => {
    if (data) {
      const characters = data.characters.results
      setUsers(characters)
    }
  }, [data, fetch]);

  if (error) return <Body>Error...</Body>

  return (
    <>
      <Hero />
      <Separator type="section" />
      <Grid>
        <LoadingState loading={loading}>
          <Reveal bottom>
            <Row center="xs">
              <Col xs={6}>
                <Body>"Now if you'll excuse me, I've got a quick solo adventure to go on and this one will not be directed by Ron Howard."</Body>
              </Col>
            </Row>
          </Reveal>
          <Separator type="section" />
          <Row center="xs">
            {users.map((character) => (
              <>
                <Col xs={12} md={6}>
                  <Reveal bottom>
                    <Link to={"/" + character.id}>
                      <Card>
                        <Grid>
                          <Row center="xs" start="md" middle="xs">
                            <Col xs={12} md={6}>
                              <Thumbnail src={character.image} alt ={character.name} />
                            </Col>
                            <Col xs={12} md={6}>
                              <Body>{`Name: ${character.name}`}</Body>
                              <Body>{`Status: ${character.status}`}</Body>
                            </Col>
                          </Row>
                        </Grid>
                      </Card>
                    </Link>
                    <Separator type="subsection" />
                  </Reveal>
                </Col>
              </>
            ))}
          </Row>
        </LoadingState>
      </Grid>
    </>
  );
};

export default Home;
