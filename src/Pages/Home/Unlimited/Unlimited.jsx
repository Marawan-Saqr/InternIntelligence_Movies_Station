import { Container, Row, Col } from 'react-bootstrap';
import './Unlimited.css';
import { Link } from 'react-router-dom';


const Unlimited = () => {
  return (
    <div className='unlimited'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className="left">
              <img src="./upcoming.jpg" className='img-fluid' />
            </div>
          </Col>
          <Col lg={6}>
            <div className="right text-center">
              <h6>Unlimited Movies</h6>
              <h4>New Movies Waiting For You</h4>
              <p>Get Access To 10,000 Movie On Web & Mobile Devices And Watch All In One Place And Know The Details Of Each Movie In One Universe Of Big Collection Of Movies</p>
              <button>
                <Link to={"/movies"}>Watch Now</Link>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}


export default Unlimited;