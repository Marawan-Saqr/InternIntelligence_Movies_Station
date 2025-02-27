import { useContext } from "react";
import { movieContext } from "../../../Contexts/MovieContext.jsx";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import UpcomingMoviesCard from "../../Home/Upcoming_movies/Upcoming_movies_card/UpcomingMoviesCard.jsx";
import "./UpcomingMovies.css";
import Loading from "../../../Components/Loading/Loading.jsx";

const UpcomingMovies = () => {
  // Component States
  const { upcoming, loading } = useContext(movieContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="new-shows mt-5">
      <Container>
        {/* عنوان القسم مع أنيميشن */}
        <motion.h4
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Upcoming Movies
        </motion.h4>
        <Row>
          {upcoming.length === 0 ? (
            <h2>No Data For Now</h2>
          ) : (
            upcoming.slice(0, 6).map((up, index) => (
              <Col xs={4} sm={4} md={2} lg={2} key={up.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <UpcomingMoviesCard up={up} />
                </motion.div>
              </Col>
            ))
          )}
        </Row>
      </Container>
    </div>
  );
};

export default UpcomingMovies;