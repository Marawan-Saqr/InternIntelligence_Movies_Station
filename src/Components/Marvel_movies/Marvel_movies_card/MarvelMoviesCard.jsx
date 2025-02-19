import React from "react";
import { Link } from "react-router-dom";
import "./MarvelMoviesCard.css";

const MarvelMoviesCard = ({ marv }) => {
  return (
    <div className="show mb-3">
      <Link to={`/show-details/${marv.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${marv.poster_path}`}
            alt={marv.title}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="marv-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{marv.title}</h5>
          <p>{marv.release_date}</p>
        </div>
      </Link>
    </div>
  );
};


export default MarvelMoviesCard;