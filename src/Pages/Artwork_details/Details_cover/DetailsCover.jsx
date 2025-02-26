import "./DetailsCover.css";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { watchlistContext } from '../../../Contexts/WatchList.jsx';
import { useContext } from 'react';

const DetailsCover = ({ details }) => {

  // Component States
  const { addToWatchlist } = useContext(watchlistContext);


  return (
    <div>
      <div className="cover" style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500/${details.backdrop_path}")`}}>
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
            <button className="me-2">
              <Link to={"/movies-page"}>All Movies</Link>
            </button>
            <button style={{fontWeight: 'bold'}} className="mt-3" onClick={()=> addToWatchlist(details)}>
              Add To Watchlist
          </button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default DetailsCover;
