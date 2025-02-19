import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { movieContext } from "../../Contexts/MovieContext.jsx";
import Loading from "../../Components/Loading/Loading.jsx";
import "./MovieDetails.css";
import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  // Component States
  const { details, getMovieDetails, loading } = useContext(movieContext);
  const params = useParams();

  useEffect(() => {
    getMovieDetails(params.MOVIEID);
  }, [params.MOVIEID]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="movie-details">
      {details ? (
        <div className="cover">
          <Container>
            <div className="content">
              <h2>
                {details.title}
              </h2>
              <p>
                Series : {details.belongs_to_collection ? details.belongs_to_collection.name : "No Series"}
              </p>
              <button className="me-2"><a target="_blank" href={details.homepage}>Show Original Page</a></button>
              <button><Link to={"/movies-page"}>All Movies</Link></button>
            </div>
          </Container>
        </div>
      ) : (
        <h2 className="text-center">No Data Found</h2>
      )}
    </div>
  );
};

export default MovieDetails;
