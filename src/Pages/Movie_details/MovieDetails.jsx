import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { movieContext } from "../../Contexts/MovieContext.jsx";
import Loading from "../../Components/Loading/Loading.jsx";
import "./MovieDetails.css";
import DetailsCover from './Details_cover/DetailsCover.jsx';
import DetailsBackImage from './Details_back_image/DetailsBackImage.jsx';
import DetailsInformation from './Details_information/DetailsInformation.jsx';
import { Container } from 'react-bootstrap';

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
        <div>
          <DetailsCover details={details} />
          <DetailsBackImage details={details} />
          <Container>
            <hr style={{border: '2px solid red'}} />
          </Container>
          <DetailsInformation details={details} />
        </div>
      ) : (
        <h2 className="text-center">No Data Found</h2>
      )}
    </div>
  );
};

export default MovieDetails;
