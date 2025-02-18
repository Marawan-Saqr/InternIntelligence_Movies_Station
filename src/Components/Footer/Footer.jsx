import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className='align-items-center'>
          <Col lg={2}>
            <div className="box">
              <img src="./logo.webp" className='img-fluid' />
            </div>
          </Col>
          <Col lg={2}>
            <div className="box">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="box">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="box">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="box">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
              </ul>
            </div>
          </Col>
          <Col lg={2}>
            <div className="box">
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About</Link></li>
                <li><Link to={"/movies"}>Movies</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;