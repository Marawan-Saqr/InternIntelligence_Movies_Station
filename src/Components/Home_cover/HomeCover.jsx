import React from "react";
import { Container } from "react-bootstrap";
import "./HomeCover.css";

const HomeCover = () => {
  return (
    <div className="home-cover">
      <Container>
        <div className="content">
          <h2>
            Movies <span>Station</span>
          </h2>
          <p>Journey into the cosmic depths of the great cinematic movies!</p>
        </div>
      </Container>
    </div>
  );
};

export default HomeCover;
