import React from "react";
import "./WatchNow.css";
import { Container } from "react-bootstrap";

const WatchNow = () => {
  return (
    <div className="watch-now">
      <Container>
        <div className="content">
          <img src="marvel-logo.png" />
          <h2>
            A Universe Of Super <span>Heroes</span>
          </h2>
          <p>All Your Favourite Stories And More. Start Watching Now</p>
          <button>
            <a href="https://www.marvel.com/movies" target="_blank">Watch Now</a>
          </button>
        </div>
      </Container>
    </div>
  );
};

export default WatchNow;
