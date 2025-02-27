import React, { useContext } from "react";
import "./Watchlist.css";
import { Container, Row, Col } from "react-bootstrap";
import { watchlistContext } from "../../Contexts/WatchList.jsx";
import WatchlistCard from "./Watchlist_card/WatchlistCard.jsx";
import { motion } from "framer-motion";

const Watchlist = () => {
  // Component States
  const { watch } = useContext(watchlistContext);

  return (
    <div className="watchlist mt-5 mb-5">
      <Container>
        <h4 className="mb-4">Watchlist</h4>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <Row>
            {watch.length > 0 ? (
              watch.map((element) => (
                <Col xs={4} sm={4} md={6} lg={3} key={element.id}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                  >
                    <WatchlistCard element={element} />
                  </motion.div>
                </Col>
              ))
            ) : (
              <h2
                className="text-center w-100"
                style={{ textTransform: "uppercase", fontWeight: "bold" }}
              >
                No Movies In Watchlist
              </h2>
            )}
          </Row>
        </motion.div>
      </Container>
    </div>
  );
};

export default Watchlist;