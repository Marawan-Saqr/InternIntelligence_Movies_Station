import React from 'react';
import { useParams } from 'react-router-dom';
import { movieContext } from '../../../Contexts/MovieContext.jsx';
import { useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ActorsCard from './Actors_card/ActorsCard.jsx';
import './Actors.css';

const Actors = () => {

  // Component States
  const { ARTWORKID } = useParams();
  const { actors, getActors } = useContext(movieContext);


  // UseEffect
  useEffect(()=> {
    getActors(ARTWORKID)
  }, [ARTWORKID])


  return (
    <div className='actors mt-5 mb-5'>
      <Container>
        <h4>Movie <span>Actors</span></h4>
        <Row>
          {!actors || actors.length === 0 ? <h2>No Available Cast</h2> : (actors.map((actor)=> (
            <Col xs={4} sm={4} md={3} lg={3} key={actor.id}>
              <ActorsCard actor={actor} />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}

export default Actors;