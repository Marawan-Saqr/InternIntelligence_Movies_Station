import { useContext } from 'react';
import TVShowCard from './TV_show_card/TVShowCard.jsx';
import { movieContext } from '../../../Contexts/MovieContext.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../../Components/Loading/Loading.jsx';
import PaginationComp from '../../../Components/Paginate_comp/PaginateComp.jsx';


const TVShows = () => {

  // Component States
  const { shows, loading } = useContext(movieContext);
  console.log(shows);

  if (loading) {
    return <Loading />
  }


  return (
    <div className='tv-show'>
      <Container>
        <Row>
          {shows.length >= 1 ? (shows.map((show)=> (
            <Col xs={4} sm={4} md={3} lg={2} key={show.id}>
              <TVShowCard show={ show } />
            </Col>
          ))) : <h2 className="text-center">No Shows For Now</h2>}
        </Row>
        <PaginationComp />
      </Container>
    </div>
  )
}

export default TVShows;