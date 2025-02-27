import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./HomeCover.css";

const HomeCover = () => {
  return (
    <div className="home-cover">
      <Container>
        <div className="content">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            Movies <span>Station</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.3 }}
          >
            Journey into the cosmic depths of the great cinematic movies!
          </motion.p>
        </div>
      </Container>
    </div>
  );
};

export default HomeCover;