import React from "react";
import { Link } from "react-router-dom";
import "./UpcomingMoviesCard.css";



const UpcomingMoviesCard = ({ up }) => {
  return (
    <div className="show mb-3">
      <Link to={`/movies-page/movie-details/${up.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${up.poster_path}`}
            alt={up.title}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="upcoming-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{up.title}</h5>
          <p>{up.release_date}</p>
        </div>
      </Link>
    </div>
  );
};


export default UpcomingMoviesCard;