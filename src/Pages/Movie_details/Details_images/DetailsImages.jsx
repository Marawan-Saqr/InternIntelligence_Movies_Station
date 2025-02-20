import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const DetailsImages = ({ details }) => {
  return (
    <div className='details-images'>
      <Container>
        <h4>Movie Covers</h4>
        <Row>
          <Col lg={4}>
            <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} className='img-fluid' />
          </Col>
          <Col lg={4}>
            <img src={`https://image.tmdb.org/t/p/w500/${details.belongs_to_collection.poster_path}`} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailsImages;
