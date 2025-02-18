import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import MoviesCard from '../../Components/Movies/Movies_card/MoviesCard.jsx';
import './Movies.css';
import Loading from '../../Components/Loading/Loading.jsx';


const Movies = () => {

  // Component States
  const { movies, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='movies mt-5'>
      <Container>
        <Row>
          {movies.length === 0 ? (<h2>No Data For Now</h2>) : (movies.map((movie)=> (
            <Col xs={4} sm={4} md={3} lg={2} key={movie.id}>
              <MoviesCard movie={ movie } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default Movies;