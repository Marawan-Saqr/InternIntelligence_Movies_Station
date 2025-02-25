import "./TopNav.css";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TopNav = () => {
  // Component States
  const links = [
    { name: "home", path: "/" },
    { name: "about", path: "/about" },
    { name: "movies", path: "/movies-page" },
    { name: "tv-show", path: "/tv-show-page" },
  ];
  const [activeLink, setActiveLink] = useState(null);

  // Get Dynamic Active Link From Location Path Name
  const location = useLocation();

  useEffect(() => {
    const linkIndex = links.findIndex(
      (link) => link.path === location.pathname
    );
    setActiveLink(linkIndex);
  }, [location.pathname]);

  // Show Menu In Small Media
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="top-nav">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={handleShow} />
          <Offcanvas
            show={show}
            onHide={handleClose}
            style={{ backgroundColor: "#202020", color: "#fff" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                {links.map((link, index) => (
                  <Link
                    to={link.path}
                    key={index}
                    className={
                      activeLink === index ? "active nav-link" : "nav-link"
                    }
                  >
                    {link.name.toUpperCase()}
                  </Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
          <Navbar.Collapse id="navbarScroll" in={false}>
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {links.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className={
                    activeLink === index ? "active nav-link" : "nav-link"
                  }
                >
                  {link.name.toUpperCase()}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
