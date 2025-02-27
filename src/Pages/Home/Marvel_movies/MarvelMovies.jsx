import { useContext } from "react";
import { movieContext } from "../../../Contexts/MovieContext.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import MarvelMoviesCard from "../../Home/Marvel_movies/Marvel_movies_card/MarvelMoviesCard.jsx";
import "./MarvelMovies.css";
import Loading from "../../../Components/Loading/Loading.jsx";

const MarvelMovies = () => {
  // Component States
  const { marvel, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="new-shows mt-5">
      <Container>
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Marvel Movies
        </motion.h4>
        <Row>
          {marvel.length === 0 ? (
            <h2>No Data For Now</h2>
          ) : (
            marvel.map((marv, index) => (
              <Col xs={4} sm={4} md={2} lg={2} key={marv.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <MarvelMoviesCard marv={marv} />
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default MarvelMovies;
