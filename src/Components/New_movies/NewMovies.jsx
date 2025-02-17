import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import NewMoviesCard from '../../Components/New_movies/New-movies-card/NewMoviesCard.jsx';
import './NewMovies.css';


const NewMovies = () => {

  // Component States
  const { movies } = useContext(movieContext);
  console.log(movies);


  return (
    <div className='new-movies'>
      <Container>
        <Row>
          {movies.length === 0 ? (<h2>No Data For Now</h2>) : (movies.slice(0, 6).map((movie)=> (
            <Col lg={2} key={movie.id}>
              <NewMoviesCard movie={ movie } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default NewMovies;