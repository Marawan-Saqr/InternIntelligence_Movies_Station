import React from "react";
import { Link } from 'react-router-dom';
import "./NewMoviesCard.css";

const NewMoviesCard = ({ movie }) => {
  return (
    <div className="show">
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className="card-img-top"
          style={{ objectFit: "cover", borderRadius: "8px" }}
        />
        <div className="text-center">
          <h5 style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
            <Link to={`/movies/movie-details/${movie.id}`}>{movie.title}</Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default NewMoviesCard;