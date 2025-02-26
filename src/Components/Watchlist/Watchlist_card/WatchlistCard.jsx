import React from "react";
import { Link } from "react-router-dom";
import "./WatchlistCard.css";
import { watchlistContext } from '../../../Contexts/WatchList.jsx';
import { useContext } from 'react';

const WatchlistCard = ({ element }) => {

  // Component States
  const { removeWatchedMovie } = useContext(watchlistContext);


  return (
    <div className="show mb-4">
      <Link to={`/movies-page/artwork-details/${element.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
            alt={element.title}
            className="card-img-top"
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </div>
        <div className="watchlist-content text-center">
          <h5 style={{ fontWeight: "bold" }}>{element.title}</h5>
          <p>{element.release_date}</p>
        </div>
      </Link>
      <button onClick={()=> removeWatchedMovie(element.id)} style={{textTransform: 'uppercase'}} className="btn btn-danger">Remove</button>
    </div>
  );
};


export default WatchlistCard;