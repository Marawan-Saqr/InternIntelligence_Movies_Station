import './TopLogo.css';
import React, { useEffect } from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { useState } from 'react';


const TopLogo = () => {

  // Component States
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "lightMode");

  const changeTheme = () => {
    const newTheme = theme === "lightMode" ? "darkMode" : "lightMode";
    document.body.classList.toggle("darkMode");
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.add(theme);
  }, [theme]);


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
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand><a onClick={changeTheme} style={{cursor: 'pointer'}}>{theme === "darkMode" ? (<i className='fas fa-sun'></i>) : (<i className="fas fa-moon"></i>)}</a></Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default TopLogo;