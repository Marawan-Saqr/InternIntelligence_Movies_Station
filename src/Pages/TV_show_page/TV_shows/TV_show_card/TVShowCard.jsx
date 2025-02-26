import React from "react";
import { Link } from "react-router-dom";
import "./TVShowCard.css";



const TVShowCard = ({ show }) => {
  return (
    <div className="show mb-3 mt-5">
      <Link to={`/tv-show-page/artwork-details/${show.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
            alt={show.name}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="show-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{show.name}</h5>
          <p>{show.release_date}</p>
        </div>
      </Link>
    </div>
  );
};


export default TVShowCard;