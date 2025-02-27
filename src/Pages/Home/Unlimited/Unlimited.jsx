import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Unlimited.css";

const Unlimited = () => {
  return (
    <div className="unlimited">
      <Container>
        <Row className="align-items-center">
          {/* صورة القسم مع أنيميشن */}
          <Col lg={6}>
            <motion.div
              className="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="./upcoming.jpg" className="img-fluid" />
            </motion.div>
          </Col>

          {/* النصوص مع الأنيميشن */}
          <Col lg={6}>
            <motion.div
              className="right text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h6>Unlimited Movies</h6>
              <h4>New Movies Waiting For You</h4>
              <p>
                Get Access To 10,000 Movie On Web & Mobile Devices And Watch All In
                One Place And Know The Details Of Each Movie In One Universe Of Big
                Collection Of Movies
              </p>

              {/* زر مع تأثير hover */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={"/movies-page"}>Watch Now</Link>
              </motion.button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Unlimited;