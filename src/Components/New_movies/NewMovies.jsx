import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import NewMoviesCard from '../../Components/New_movies/New-movies-card/NewMoviesCard.jsx';
import './NewMovies.css';
import Loading from '../../Components/Loading/Loading.jsx';



const NewMovies = () => {

  // Component States
  const { movies, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='new-movies'>
      <Container>
        <Row>
          {movies.length === 0 ? (<h2>No Data For Now</h2>) : (movies.slice(0, 6).map((movie)=> (
            <Col xs={4} sm={4} md={2} lg={2} key={movie.id}>
              <NewMoviesCard movie={ movie } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default NewMovies;