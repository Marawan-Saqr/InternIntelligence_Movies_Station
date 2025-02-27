import React from 'react';
import { motion } from 'framer-motion';
import './AboutIinformations.css';

const AboutInformations = () => {
  return (
    <div className="about-container mt-5 mb-5">
      <motion.div
        className="about-content"
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
          About Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          We are a passionate team dedicated to bringing the best movie-watching experience to our users. Our mission is to provide a seamless platform for discovering, reviewing, and enjoying films of all genres.
        </motion.p>

        <div className="about-highlights">
          {[
            { title: "Our Mission", text: "To create the ultimate movie hub where film lovers can explore and share their passion for cinema." },
            { title: "Our Vision", text: "To be the go-to destination for movie enthusiasts, offering personalized recommendations and an engaging community." },
            { title: "Our Values", text: "Passion for cinema, commitment to quality content, and fostering a community of movie lovers worldwide." }
          ].map((item, index) => (
            <motion.div
              className="highlight"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutInformations;