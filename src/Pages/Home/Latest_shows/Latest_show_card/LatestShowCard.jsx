import React from "react";
import { Link } from "react-router-dom";
import "./LatestShowCard.css";



const LatestShowCard = ({ show }) => {
  return (
    <div className="show mb-3">
      <Link to={`/tv-show-page/artwork-details/${show.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt={show.title}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="movie-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{show.title}</h5>
          <p>{show.release_date}</p>
        </div>
      </Link>
    </div>
  );
};


export default LatestShowCard;