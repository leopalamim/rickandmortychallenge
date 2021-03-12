import React from 'react'
import { Grid } from '../components/grid'
import { Row, Col } from 'react-flexbox-grid'
import { Body } from '../components/typography'
import { useEffect, useState } from 'react'
import { CharactersQuery } from 'graphql/queries/characters'
import { useRequest } from 'graphql/request.hook'
import { CharactersResponse } from 'types/api'
import { Link } from 'react-router-dom';
import { LoadingState } from 'graphql/loading-state.component'
import { Thumbnail } from 'components/image'
import { Card } from 'components/card.component'
import { Separator } from 'components/separator.component.style'
import { Hero } from 'components/hero.component'
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
