import React from "react";
import { Container } from "react-bootstrap";
import Loader from '../../../Components/Loading/Loading.jsx';
import { movieContext } from '../../../Contexts/MovieContext.jsx';
import { useContext } from 'react';
import "./HomeCover.css";

const HomeCover = () => {

  // Component States
  const { loading } = useContext(movieContext);


  return (
    <div className="home-cover">
      {loading && <Loader />}
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