import React, { useEffect, useState } from 'react';
import { Body, H1, H2, H3 } from 'components/typography';
import { useParams } from 'react-router-dom';
import { useRequest } from 'graphql/request.hook';
import { CharacterQuery } from 'graphql/queries/characters';
import { CharacterResponse, Person } from 'types/api';
import { Grid } from 'components/grid';
import { Col, Row } from 'react-flexbox-grid';
import { LoadingState } from 'graphql/loading-state.component';
import { Separator } from '../components/separator.component.style';
import { ProfileImage } from '../components/image'
import { Card } from 'components/card.component';
import { Reveal } from 'react-reveal'

const CharacterPage: React.FC = () => {
  const [person, setPerson] = useState<Person>();
  const { fetch, error, data, loading } = useRequest<CharacterResponse>(CharacterQuery);
  const { slug } = useParams();

  useEffect(() => {
    fetch({
      id: slug
    })
  }, [fetch, slug]);

  useEffect(() => {
    if (data) {
      const character = data.character
      setPerson(character)
    }
  }, [data, fetch, person]);

  if (!person) return <Body>Loading...</Body> 

  return (
    <Grid>
      <LoadingState loading={loading} data={data !== undefined} error={error !== undefined}>
        <LoadingState.Error>
          <Body>Ocorreu um erro. Desculpe-nos pelo transtorno.</Body>
        </LoadingState.Error>
        <LoadingState.NoData>
          <Body>Não foi possível encontrar usuários.</Body>
        </LoadingState.NoData>
        <Separator type="section" />
        <Row center="xs">
          <Col xs={12}>
            <ProfileImage src={person.image} alt ={person.name} />
          </Col>
        </Row>
        <Separator type="subsection" />
        <Row center="xs">
          <Col xs={12}>
            <H2>{person.name}</H2>
          </Col>
        </Row>
        <Separator type="subsection" />
        <Row>
          <Col xs={12}>
            <Card>
              <H3>{person.episode.length != 1 ? `${person.episode.length} episódios` : `1 episódio`}</H3>
              <Separator type="subsection" />
              {person.episode.map((episode) => (
                <>
                  <Reveal right>
                    <Body>{`• ${episode.name}`}</Body>
                    <Separator type="line" />
                  </Reveal>
                </>
              ))}
            </Card>
          </Col>
        </Row>
      </LoadingState>
    </Grid>
  );
};

export default CharacterPage;
