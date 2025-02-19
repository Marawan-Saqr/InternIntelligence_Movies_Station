import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './DetailsBackImage.css';

const DetailsBackImage = ({ details }) => {
  return (
    <div className='details-back-image mt-5 mb-5'>
      <Container>
      <h4>Movie <span>Images</span></h4>
        <Row className='justify-content-between'>
          <Col lg={5}>
            <img src={`https://image.tmdb.org/t/p/w500/${details.belongs_to_collection ? details.belongs_to_collection.backdrop_path : null}`} className='img-fluid' alt={"image"} />
          </Col>
          <Col lg={5}>
            <img src={`https://image.tmdb.org/t/p/w500/${details.backdrop_path}`} className='img-fluid' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailsBackImage;