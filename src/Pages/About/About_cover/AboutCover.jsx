import React from "react";
import { Container } from "react-bootstrap";
import "./AboutCover.css";

const AboutCover = () => {
  return (
    <div className="about-cover">
      <Container>
        <div className="content">
          <h2>
            About <span>Us</span>
          </h2>
          <p>Know More About Us And Our Journies In World Of Movies</p>
        </div>
      </Container>
    </div>
  );
};

export default AboutCover;
