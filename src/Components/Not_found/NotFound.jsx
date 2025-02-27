import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  // Component States
  const navigate = useNavigate();

  return (
    <div className="not-found mt-5 mb-5">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center not-found-container">
        <Row>
          <Col>
            <h1 className="display-1 text-danger fw-bold">404</h1>
            <h2 className="mb-3">Oops! Page Not Found</h2>
            <p>The page you're looking for doesn't exist or has been moved.</p>
            <button className="btn btn-danger" onClick={() => navigate("/")}>
              Go Home
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
