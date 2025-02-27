import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import "./AboutCover.css";

const AboutCover = () => {
  return (
    <div className="about-cover">
      <Container>
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            About <span>Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Know More About Us And Our Journeys In The World Of Movies
          </motion.p>
        </motion.div>
      </Container>
    </div>
  );
};

export default AboutCover;