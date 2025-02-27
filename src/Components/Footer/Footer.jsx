import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={3} className="mb-3 mb-lg-0">
            <div className="footer-logo">
              <img src="./logo.webp" alt="Logo" className='img-fluid' />
            </div>
          </Col>
          <Col lg={3} className="mb-3 mb-lg-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About</Link></li>
              <li><Link to="/movies-page" className="text-light text-decoration-none">Movies</Link></li>
              <li><Link to="/watchlist" className="text-light text-decoration-none">Watchlist</Link></li>
            </ul>
          </Col>
        </Row>
        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;