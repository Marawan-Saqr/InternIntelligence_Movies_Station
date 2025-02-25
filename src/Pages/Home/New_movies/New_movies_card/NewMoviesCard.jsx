import React from "react";
import { Link } from "react-router-dom";
import "./NewMoviesCard.css";



const NewMoviesCard = ({ movie }) => {
  return (
    <div className="show mb-3">
      <Link to={`/movies-page/artwork-details/${movie.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="movie-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{movie.title}</h5>
          <p>{movie.release_date}</p>
        </div>
      </Link>
    </div>
  );
};


export default NewMoviesCard;