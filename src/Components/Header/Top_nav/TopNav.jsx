import './TopNav.css';
import React from "react";
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const TopNav = () => {

  // Component States
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "movies", path: "/movies" },
  ];
  const [activeLink, setActiveLink] = useState(null);


  // Get Dynamic Active Link From Location Path Name
  const location = useLocation();

  useEffect(()=> {
    const linkIndex = links.findIndex((link)=> link.path === location.pathname);
    setActiveLink(linkIndex);
  }, [location.pathname])

  return (
    <div className="top-nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {links.map((link, index)=> (
                <Link to={link.path} key={index} className={activeLink === index ? "active nav-link": "nav-link"}>{link.name.toUpperCase()}</Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};


export default TopNav;