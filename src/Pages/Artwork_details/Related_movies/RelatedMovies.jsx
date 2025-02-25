import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { movieContext } from "../../../Contexts/MovieContext.jsx";
import Loading from "../../../Components/Loading/Loading.jsx";
import "./RelatedMovies.css";
import RelatedMoviesCard from "./Related_movies_card/RelatedMoviesCard.jsx";
import { Col, Row, Container } from "react-bootstrap";

const RelatedMovies = () => {
  // Component States
  const { related, getRelatedMovies, loading } = useContext(movieContext);
  const { ARTWORKID } = useParams();

  useEffect(() => {
    if (ARTWORKID) {
      getRelatedMovies(ARTWORKID);
    }
  }, [ARTWORKID]);

  // Loading
  if (loading) {
    return <Loading />;
  }

  if (!related || related.length === 0) {
    return <h3 className="text-center text-muted">No Related Movies Found</h3>;
  }

  return (
    <div className="related-movies-container mt-5 mb-5">
      <div className="related-movies-grid">
        <Container>
          <h4 className="section-title">Related <span>Movies</span></h4>
          <Row>
            {related.map((movie) => (
              <Col xs={4} sm={4} md={3} lg={2} key={movie.id}>
                <RelatedMoviesCard movie={movie} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default RelatedMovies;
