import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './DetailsImages.css';

const DetailsImages = ({ details }) => {
  return (
    <div className='details-images mt-5 mb-5'>
      <Container>
        <h4>Movie <span>Covers</span></h4>
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
