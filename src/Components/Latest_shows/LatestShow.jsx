import { useContext } from 'react';
import { movieContext } from '../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import LatestShowCard from '../../Components/Latest_shows/Latest-show-card/LatestShowCard.jsx';
import './LatestShow.css';
import Loading from '../../Components/Loading/Loading.jsx';



const LatestShow = () => {

  // Component States
  const { shows, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='new-shows mt-5'>
      <Container>
        <h4>Best Shows On Tv Now</h4>
        <Row>
          {shows.length === 0 ? (<h2>No Data For Now</h2>) : (shows.slice(0, 6).map((show)=> (
            <Col xs={4} sm={4} md={2} lg={2} key={show.id}>
              <LatestShowCard show={ show } />
            </Col>
          )))}
        </Row>
      </Container>
    </div>
  )
}


export default LatestShow;