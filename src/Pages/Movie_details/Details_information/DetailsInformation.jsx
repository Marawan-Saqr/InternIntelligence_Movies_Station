import React from "react";
import { Container, Row, Col, Card, Badge, ListGroup } from "react-bootstrap";
import "./DetailsInformation.css";

const DetailsInformation = ({ details }) => {
  return (
    <div className="details-information">
      <Container>
        <Row className="justify-content-between">
          <Col lg={6}>
            <Card className="p-4 shadow-lg border-0">
              <Card.Body>
                <Card.Title className="mb-4 text-danger">{details.original_title}</Card.Title>
                <Card.Text className="text-muted">{details.overview}</Card.Text>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Collection:</strong>{" "}
                    {details.belongs_to_collection ? details.belongs_to_collection.name : "No Series"}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Budget:</strong> ${details.budget.toLocaleString()}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Origin Country:</strong> {details.origin_country}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Original Language:</strong> {details.original_language}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Popularity:</strong> {details.popularity}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Status:</strong> {details.status}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Vote Average:</strong> {details.vote_average} ⭐
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Vote Count:</strong> {details.vote_count}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Release Date:</strong> {details.release_date}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Movie Categories:</strong>
                    <div className="mt-2">
                      {details.genres ? (
                        details.genres.map((genre) => (
                          <Badge key={genre.id} bg="danger" className="me-2">
                            {genre.name}
                          </Badge>
                        ))
                      ) : (
                        <span className="text-muted">No Data Found</span>
                      )}
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={5}>
            <div className="right">
              <img
                src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
                className="img-fluid rounded shadow"
                alt="Movie Poster"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailsInformation;