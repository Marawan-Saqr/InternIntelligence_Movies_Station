import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import UpcomingMoviesCard from '../../Components/Upcoming_movies/Upcoming_movies_card/UpcomingMoviesCard.jsx';
import './UpcomingMovies.css';
import Loading from '../../Components/Loading/Loading.jsx';



const UpcomingMovies = () => {

  // Component States
  const { upcoming, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='new-shows mt-5'>
      <Container>
        <h4>Upcoming Movies</h4>
        <Row>
          {upcoming.length === 0 ? (<h2>No Data For Now</h2>) : (upcoming.slice(0, 6).map((up)=> (
            <Col xs={4} sm={4} md={2} lg={2} key={up.id}>
              <UpcomingMoviesCard up={ up } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default UpcomingMovies;