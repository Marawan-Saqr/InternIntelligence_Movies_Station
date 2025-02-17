import './TopLogo.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const TopLogo = () => {
  return (
    <div className='top-logo'>
      <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Movies Station</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
          <img src="./logo.webp" />
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand><a><i className="fas fa-search"></i></a></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TopLogo;