import React from "react";
import "./WatchNow.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const WatchNow = () => {
  return (
    <div className="watch-now">
      <Container>
        <motion.div
          className="content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src="marvel-logo.png"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            A Universe Of Super <span>Heroes</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
          >
            All Your Favourite Stories And More. Start Watching Now
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <a href="https://www.marvel.com/movies" target="_blank">
              Watch Now
            </a>
          </motion.button>
        </motion.div>
      </Container>
    </div>
  );
};

export default WatchNow;