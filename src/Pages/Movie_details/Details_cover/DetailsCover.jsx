import React from "react";
import "./DetailsCover.css";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const DetailsCover = ({ details }) => {
  return (
    <div>
      <div className="cover">
        <Container>
          <div className="content">
            <h2>{details.title}</h2>
            <p>
              Series :{" "}
              {details.belongs_to_collection
                ? details.belongs_to_collection.name
                : "No Series"}
            </p>
            <button className="me-2">
              <a target="_blank" href={details.homepage}>
                Show Original Page
              </a>
            </button>
            <button>
              <Link to={"/movies-page"}>All Movies</Link>
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DetailsCover;
