import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import MarvelMoviesCard from '../../Components/Marvel_movies/Marvel_movies_card/MarvelMoviesCard.jsx';
import './MarvelMovies.css';
import Loading from '../../Components/Loading/Loading.jsx';



const MarvelMovies = () => {

  // Component States
  const { marvel, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='new-shows mt-5'>
      <Container>
        <h4>Marvel Movies</h4>
        <Row>
          {marvel.length === 0 ? (<h2>No Data For Now</h2>) : (marvel.map((marv)=> (
            <Col xs={4} sm={4} md={2} lg={2} key={marv.id}>
              <MarvelMoviesCard marv={ marv } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default MarvelMovies;