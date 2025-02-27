import { useContext, useEffect } from 'react';
import { movieContext } from '../../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import NewMoviesCard from '../../Home/New_movies/New_movies_card/NewMoviesCard.jsx';
import './NewMovies.css';
import Loading from '../../../Components/Loading/Loading.jsx';

const NewMovies = () => {
  // Component States
  const { movies, loading, getPage } = useContext(movieContext);

  // Load Movies First Page When Come To Home Page
  useEffect(() => {
    getPage(1);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='new-movies'>
      <Container>
        <Row>
          {movies.length === 0 ? (
            <h2>No Data For Now</h2>
          ) : (
            movies.slice(0, 6).map((movie, index) => (
              <Col xs={4} sm={4} md={2} lg={2} key={movie.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <NewMoviesCard movie={movie} />
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default NewMovies;