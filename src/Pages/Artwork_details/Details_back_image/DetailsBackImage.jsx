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
            <img 
              src={details.belongs_to_collection?.backdrop_path 
                ? `https://image.tmdb.org/t/p/w500/${details.belongs_to_collection.backdrop_path}` 
                : "/no-image.jpg"} 
              className='img-fluid' 
              alt="Collection Backdrop" 
            />
          </Col>
          <Col lg={5}>
            <img 
              src={details.backdrop_path 
                ? `https://image.tmdb.org/t/p/w500/${details.backdrop_path}` 
                : "/no-image.jpg"} 
              className='img-fluid' 
              alt="Movie Backdrop" 
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailsBackImage;