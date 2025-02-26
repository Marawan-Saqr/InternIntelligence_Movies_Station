import React from "react";
import "./Watchlist.css";
import { Container, Row, Col } from "react-bootstrap";
import { watchlistContext } from "../../Contexts/WatchList.jsx";
import { useContext } from "react";
import WatchlistCard from "./Watchlist_card/WatchlistCard.jsx";

const Watchlist = () => {
  // Component States
  const { watch } = useContext(watchlistContext);

  return (
    <div className="watchlist mt-5 mb-5">
      <Container>
        <Row>
          {watch.length >= 1 ? (
            watch.map((element) => (
              <>
                <h4>Watclist</h4>
                <Col xs={4} sm={4} md={6} lg={3} key={element.id}>
                  <WatchlistCard element={element} />
                </Col>
              </>
            ))
          ) : (
            <h2
              className="text-center"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              No Movies At Watchlist
            </h2>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Watchlist;
